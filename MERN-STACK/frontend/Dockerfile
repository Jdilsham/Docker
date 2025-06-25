FROM node:21-alpine

RUN npm install -g vite

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev"]
