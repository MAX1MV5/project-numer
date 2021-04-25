FROM node:14.16

RUN mkdir /usr/src/app
WORKDIR /usr/src/app/numer

ENV PATH /usr/src/app/node_modules/.bin:$PATH
COPY . /usr/src/app/numer
RUN npm install
RUN npm install react-scripts -g

EXPOSE 3000

CMD [ "npm", "start" ]