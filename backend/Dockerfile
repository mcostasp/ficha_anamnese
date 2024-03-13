# Dockerfile

FROM node:16-alpine
WORKDIR /backend
COPY package*.json ./
COPY prisma ./prisma/
RUN npm install
COPY . .
RUN npx prisma generate
EXPOSE 3000
CMD [ "npm", "start"]