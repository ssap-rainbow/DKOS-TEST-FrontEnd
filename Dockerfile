#Build stage
FROM node:20.5.1 AS build
WORKDIR /app
COPY front/ ./
RUN npm ci
RUN npm run build

#Production stage
FROM nginx:alpine
RUN rm /etc/nginx/conf.d/default.conf
RUN rm -rf /etc/nginx/conf.d/*
COPY /nginx.conf /etc/nginx/conf.d/

COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]