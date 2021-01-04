FROM node:13
WORKDIR /usr/src/app
COPY . .
COPY package-lock.json ./
RUN npm install
RUN npm run build
EXPOSE 3000
CMD [ "node", "app.js" ]
