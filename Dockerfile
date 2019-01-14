FROM node:8.9-alpine
RUN mkdir /www
COPY ./ /www/
WORKDIR /www
CMD ["yarn", "start"]
EXPOSE 6001