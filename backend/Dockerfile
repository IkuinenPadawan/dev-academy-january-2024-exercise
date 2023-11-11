FROM node:18-alpine
WORKDIR /bikeinfo-backend

COPY ./package.json ./
RUN npm i
COPY . .
CMD ["npm", "start"]