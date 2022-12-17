FROM node:lts-alpine as build
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn --frozen-lockfile
COPY . .
RUN yarn build

FROM nginx:1.23-alpine as runtime
COPY --from=build /app/build /usr/share/nginx/html
