FROM node:15.13-alpine
WORKDIR /nitflix2
ENV PATH="./node_modules/.bin:$PATH"
COPY . .
RUN npm install
RUN npm run  build
CMD ["npm", "start"]