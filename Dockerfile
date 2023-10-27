FROM node:18.17.1-alpine
WORKDIR /DKOS-TEST-FRONTEND/front
COPY package.json package-lock.json ./
RUN npm install 
COPY . ./
EXPOSE 3000
CMD ["npm", "start"]