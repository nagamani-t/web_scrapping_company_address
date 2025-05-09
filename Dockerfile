# Use official Node image (compatible with both amd64 and arm64)
FROM node:20 as builder

WORKDIR /app

COPY package*.json ./

RUN apt-get update && apt-get install -yq \
  gconf-service libasound2 libatk1.0-0 libc6 libcairo2 libcups2 \
  libdbus-1-3 libexpat1 libfontconfig1 libgbm1 libgcc1 libgconf-2-4 \
  libgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 libnspr4 libpango-1.0-0 \
  libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 \
  libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 \
  libxss1 libxtst6 ca-certificates fonts-liberation libnss3 lsb-release \
  xdg-utils wget curl

RUN npm install puppeteer puppeteer-core

ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true

RUN apt-get install -y chromium

ENV PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]