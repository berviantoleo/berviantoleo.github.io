FROM node:lts-alpine as build
WORKDIR /app
COPY package.json package.json
RUN yarn
COPY . .
RUN yarn build

FROM ruby:2.7-alpine
WORKDIR /app
COPY --from=build /app /app
RUN apk add --no-cache build-base gcc bash cmake git
RUN gem install
RUN gem install bundler -v "~>1.0" && gem install bundler jekyll
RUN bundle exec jekyll build -d /public
