# build env
FROM node:15.10.0-alpine3.10 as build
WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH
COPY package.json /app/package.json
RUN npm install --silent && npm install react-scripts@4.0.3 -g --silent
COPY . /app
RUN npm run build

# production env
FROM nginx:1.19.7-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
# Copy .env file and shell script to container
WORKDIR /usr/share/nginx/html
COPY ./env.sh .
COPY .env .

# Add bash
RUN apk add --no-cache bash

# Make shell script executable
RUN chmod +x env.sh

# Start Nginx server
CMD ["/bin/bash", "-c", "/usr/share/nginx/html/env.sh && nginx -g \"daemon off;\""]