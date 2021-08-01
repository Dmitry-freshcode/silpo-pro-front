FROM node:14-alpine
WORKDIR /app
ADD package*.json ./
RUN npm install
ADD . .
#RUN npm run build
#RUN npm prune --prodiction
#CMD ["node","./dist/main.js"]
CMD ["npm","run","start"]
