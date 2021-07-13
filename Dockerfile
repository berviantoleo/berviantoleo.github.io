FROM node:lts-alpine as build
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn --frozen-lockfile
COPY . .
RUN yarn build

FROM ruby:3-alpine as intermed
WORKDIR /app
COPY --from=build /app /app
RUN apk add --no-cache build-base gcc bash cmake git
RUN gem install bundler jekyll
RUN bundle install
RUN bundle exec jekyll build -d public

FROM nginx:stable-alpine as runtime
COPY --from=intermed /app/public /usr/share/nginx/html

