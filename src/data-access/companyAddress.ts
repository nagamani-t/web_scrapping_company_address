import {
    GET_ITEMS_SUCCESS_MESSAGE,
    NO_DATA_FOUND,
  } from '@/data-access/config/responseMessage';
  import { FAILURE, SUCCESS } from '@/data-access/config/stringConsent';
  import axios from 'axios';
  import { isEmpty } from 'lodash';
  import puppeteer from 'puppeteer';
  
  export const fetchCompanyAddress = async (req:any) => {
    try {
      const { company, city } = req?.body;
      // Step 1: Try fetching from OpenStreetMap API
      let osmUrl = process.env.OSM_URL as string
      const response = await axios.get(osmUrl, {
        params: {
          q: `${company}, ${city}`,
          format: 'json',
          addressdetails: 1,
          limit: 1,
        },
        headers: {
          'User-Agent': 'fastify-openstreetmap-app',
        },
      });
  
      console.log('OSM Response:', response?.data);
  
      if (response.data.length > 0) {
        const result = response.data[0];
        const addressresponse = {
          // Keeping the name consistent
          addresses: [
            {
              companyName: company,
              address: result.display_name,
              country: result.address.country || 'Not available',
              state:
                result.address.state || result.address.country || 'Not available',
              city:
                result.address.city ||
                result.address.town ||
                result.address.village ||
                'Not available',
              postalCode: result.address.postcode || 'Not available',
            },
          ],
          source: 'OSM',
        };
        if (!isEmpty(addressresponse)) {
          return {
            status: SUCCESS,
            msg: GET_ITEMS_SUCCESS_MESSAGE,
            data: addressresponse,
          };
        } else {
          return {
            status: FAILURE,
            msg: NO_DATA_FOUND,
          };
        }
      }
      // Step 2: If no address found, fall back to web scraping
      console.log('No address found in OSM. Falling back to web scraping...');
      return await scrapeAddressFromOpenCorporates(company);
    } catch (error) {
      console.error('Error fetching address:', error);
      return { status: FAILURE, msg: 'Failed to fetch address' };
    }
  };
  
  export const scrapeAddressFromOpenCorporates = async (company:any) => {
    const url = `${process.env.OPEN_CORPORATES_URL}${encodeURIComponent(company)}`;
  
    try {
      const browser = await puppeteer.launch({
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
        headless: false,
      });
      const page = await browser.newPage();
      await page.goto(url, { waitUntil: 'networkidle2' });
  
      // Wait for the correct selector
      await page.waitForSelector('#results');
  
      const data = await page.evaluate(() => {
        const resultsContainer = document.querySelector('#results');
        if (!resultsContainer) return null;
  
        // Select all `li` elements inside `#results`
        const listItems = resultsContainer.querySelectorAll('li');
  
        return Array.from(listItems)
          .map((li:any) => {
            const links = li.querySelectorAll('a');
            const name = links.length > 1 ? links[1].textContent.trim() : 'N/A';
            const address =
              li.querySelector('span')?.textContent?.trim() || 'N/A';
            const statusText = li.textContent.toLowerCase();
  
            return {
              name,
              address,
              isInactive: statusText.includes('inactive'),
              isBranch: statusText.includes('branch'),
              isNotAvailable: statusText.includes('N/A'),
            };
          })
          .filter(
            (item) => !item.isInactive && !item.isBranch && !item.isNotAvailable,
          );
      });
  
      await browser.close();
      if (!data || data.length === 0) {
        return {
          status: FAILURE,
          msg: 'No valid address found',
        };
      }
      console.log('Filtered Scraped Data:', data);
      const addressresponse = {
        addresses: data.map((item) => ({
          companyName: item.name,
          address: item.address,
        })),
        source: 'WS',
      };
      if (!isEmpty(addressresponse)) {
        return {
          status: SUCCESS,
          msg: GET_ITEMS_SUCCESS_MESSAGE,
          data: addressresponse,
        };
      } else {
        return {
          status: FAILURE,
          msg: NO_DATA_FOUND,
        };
      }
    } catch (error) {
      console.error('Web Scraping Error:', error);
      return {
        status: FAILURE,
        msg: 'Failed to fetch address',
      };
    }
  };
  