FROM node:6.2.2-slim
RUN apt-get update && apt-get install -y netcat
RUN curl -L https://npmjs.org/install.sh | sh

WORKDIR /usr/src/app/

COPY package.json ./

RUN npm install

COPY . .
EXPOSE 3000
CMD npm start
