FROM node:16.15.0 as build

ENV PATH /app/node_modules/.bin:$PATH
WORKDIR /app

COPY package.json ./
COPY yarn.lock ./
COPY . ./

RUN yarn install
RUN yarn build

FROM nginx:1.16.0-alpine
COPY --from=build /app/build /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf

COPY nginx/nginx.conf /etc/nginx/conf.d

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
