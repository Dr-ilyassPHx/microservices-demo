FROM node:14

WORKDIR /home
COPY . .

RUN npm install
CMD npm run start

# EXPOSE 8080
