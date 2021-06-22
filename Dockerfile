FROM node:current-alpine as build 
WORKDIR /app


COPY package*.json ./
RUN npm install 

COPY . . 

ENV GENERATE_SOURCEMAP false

RUN npm run build

FROM nginx 
COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80