FROM node:lts-alpine as build
WORKDIR /app
COPY package.json package.json
RUN yarn
COPY . .
RUN yarn build

FROM ruby:3-alpine
WORKDIR /app
COPY --from=build /app /app
RUN apk add --no-cache build-base gcc bash cmake git
RUN gem install bundler jekyll
RUN bundle install
RUN bundle exec jekyll build -d public
