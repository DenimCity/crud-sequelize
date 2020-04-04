FROM node:latest

COPY . .

RUN npm install
RUN npm run migrate

CMD ["npm", "run", "start"]