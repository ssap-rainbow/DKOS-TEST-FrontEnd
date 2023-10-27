FROM node:18.17.1
WORKDIR /app
COPY ./front/package.json package-lock.json ./
RUN npm install 
COPY . ./
EXPOSE 3000
CMD ["npm", "start"]