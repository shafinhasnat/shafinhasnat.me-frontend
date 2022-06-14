FROM node:14.18.3-alpine as build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
ENV GENERATE_SOURCEMAP false
RUN npm run build

FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
# COPY /etc/letsencrypt/live/shafinhasnat.me/fullchain.pem /usr/share/nginx/
# COPY /etc/letsencrypt/live/shafinhasnat.me/privkey.pem /usr/share/nginx/
CMD [ "nginx", "-g", "daemon off;" ]