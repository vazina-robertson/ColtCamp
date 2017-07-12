FROM node:8

WORKDIR /opt/ColtCamp/app

RUN mkdir -p /opt/ColtCamp/app

COPY ./package*json /opt/ColtCamp/

RUN npm install

COPY ./ /opt/ColtCamp/app/

EXPOSE 3000

CMD npm start

