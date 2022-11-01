FROM node:16.13.1

WORKDIR /home/app

COPY ./ /home/app

RUN npm install --production

CMD ["node","index.js"]

EXPOSE 3000
