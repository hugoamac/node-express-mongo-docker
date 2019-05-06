FROM node:8

#environment web
ENV NODE_ENV="production"

#set wokspace
WORKDIR /usr/www

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD ["npm","start"]