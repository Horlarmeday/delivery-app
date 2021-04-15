FROM node:current-alpine3.10
WORKDIR /app
COPY ["package*.json", "./"]
RUN ls
RUN npm install
COPY . /app
RUN ls