"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scrapeAddressFromOpenCorporates = exports.fetchCompanyAddress = void 0;
const responseMessage_1 = require("@/data-access/config/responseMessage");
const stringConsent_1 = require("@/data-access/config/stringConsent");
const axios_1 = require("axios");
const lodash_1 = require("lodash");
const puppeteer_1 = require("puppeteer");
const fetchCompanyAddress = async (req) => {
    try {
        const { company, city } = req === null || req === void 0 ? void 0 : req.body;
        let osmUrl = process.env.OSM_URL;
        const response = await axios_1.default.get(osmUrl, {
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
        console.log('OSM Response:', response === null || response === void 0 ? void 0 : response.data);
        if (response.data.length > 0) {
            const result = response.data[0];
            const addressresponse = {
                addresses: [
                    {
                        companyName: company,
                        address: result.display_name,
                        country: result.address.country || 'Not available',
                        state: result.address.state || result.address.country || 'Not available',
                        city: result.address.city ||
                            result.address.town ||
                            result.address.village ||
                            'Not available',
                        postalCode: result.address.postcode || 'Not available',
                    },
                ],
                source: 'OSM',
            };
            if (!(0, lodash_1.isEmpty)(addressresponse)) {
                return {
                    status: stringConsent_1.SUCCESS,
                    msg: responseMessage_1.GET_ITEMS_SUCCESS_MESSAGE,
                    data: addressresponse,
                };
            }
            else {
                return {
                    status: stringConsent_1.FAILURE,
                    msg: responseMessage_1.NO_DATA_FOUND,
                };
            }
        }
        console.log('No address found in OSM. Falling back to web scraping...');
        return await (0, exports.scrapeAddressFromOpenCorporates)(company);
    }
    catch (error) {
        console.error('Error fetching address:', error);
        return { status: stringConsent_1.FAILURE, msg: 'Failed to fetch address' };
    }
};
exports.fetchCompanyAddress = fetchCompanyAddress;
const scrapeAddressFromOpenCorporates = async (company) => {
    const url = `${process.env.OPEN_CORPORATES_URL}${encodeURIComponent(company)}`;
    try {
        const browser = await puppeteer_1.default.launch({
            headless: true,
            args: ['--no-sandbox', '--disable-setuid-sandbox'],
        });
        const page = await browser.newPage();
        await page.goto(url, { waitUntil: 'networkidle2' });
        await page.waitForSelector('#results');
        const data = await page.evaluate(() => {
            const resultsContainer = document.querySelector('#results');
            if (!resultsContainer)
                return null;
            const listItems = resultsContainer.querySelectorAll('li');
            return Array.from(listItems)
                .map((li) => {
                var _a, _b;
                const links = li.querySelectorAll('a');
                const name = links.length > 1 ? links[1].textContent.trim() : 'N/A';
                const address = ((_b = (_a = li.querySelector('span')) === null || _a === void 0 ? void 0 : _a.textContent) === null || _b === void 0 ? void 0 : _b.trim()) || 'N/A';
                const statusText = li.textContent.toLowerCase();
                return {
                    name,
                    address,
                    isInactive: statusText.includes('inactive'),
                    isBranch: statusText.includes('branch'),
                    isNotAvailable: statusText.includes('N/A'),
                };
            })
                .filter((item) => !item.isInactive && !item.isBranch && !item.isNotAvailable);
        });
        await browser.close();
        if (!data || data.length === 0) {
            return {
                status: stringConsent_1.FAILURE,
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
        if (!(0, lodash_1.isEmpty)(addressresponse)) {
            return {
                status: stringConsent_1.SUCCESS,
                msg: responseMessage_1.GET_ITEMS_SUCCESS_MESSAGE,
                data: addressresponse,
            };
        }
        else {
            return {
                status: stringConsent_1.FAILURE,
                msg: responseMessage_1.NO_DATA_FOUND,
            };
        }
    }
    catch (error) {
        console.error('Web Scraping Error:', error);
        return {
            status: stringConsent_1.FAILURE,
            msg: 'Failed to fetch address',
        };
    }
};
exports.scrapeAddressFromOpenCorporates = scrapeAddressFromOpenCorporates;
//# sourceMappingURL=companyAddress.js.map