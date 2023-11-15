# Build stage
FROM node:20.5.1
WORKDIR /app
COPY front/ ./
RUN npm ci
RUN npm run build
RUN npm install -g serve
EXPOSE 3000
CMD ["serve", "-s", "build"]

# #Build stage
# FROM node:20.5.1 AS build
# WORKDIR /app
# COPY front/ ./
# RUN npm ci
# RUN npm run build

# #Production stage
# FROM nginx:alpine
# COPY --from=build /app/build /usr/share/nginx/html
# COPY nginx.conf /etc/nginx/conf.d/default.conf
# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]
