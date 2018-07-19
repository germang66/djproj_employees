FROM node:6.10.2-alpine
RUN mkdir -p /app
WORKDIR /app
ADD package.json /app/
RUN npm install
COPY . /app
