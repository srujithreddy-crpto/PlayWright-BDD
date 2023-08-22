#Get the latest version of node
FROM node:17

FROM  mcr.microsoft.com/playwright:focal
WORKDIR /app

ENV path /app/node_modules/.bin:$path

COPY package.json /app/
COPY featureFiles/ /app/featureFiles
COPY pageBase/ /app/pageBase
COPY POM/ /app/POM
COPY support/ /app/support

COPY Utils/ /app/Utils
COPY support/ /app/support
COPY package-lock.json /app/
COPY package.config.js /app/
COPY cucumber.js /app/
COPY report/ /app/report
COPY .env /app/

RUN apt-get update && apt-get -y install libnss3 libatk-bridge2.0-0 libdrm-dev libxkbcommon-dev libgbm-dev libasound-dev libatspi2.0-0 libxshmfence-dev

RUN npm install
RUN npx playwright install