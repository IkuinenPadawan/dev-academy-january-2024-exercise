FROM node:18-alpine
WORKDIR /bikeinfo-frontend

COPY ./package.json ./
RUN npm i
COPY . .
CMD ["npm", "run", "dev"]