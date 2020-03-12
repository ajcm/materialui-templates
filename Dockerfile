FROM node:12-alpine3.9 as builder

WORKDIR '/app/html'

COPY ./template1/ ./template1/
COPY ./template2/ ./template2/
COPY ./template3/ ./template3/

WORKDIR '/app/html/template1'
RUN npm i .
RUN npm run-script build


WORKDIR '/app/html/template2'
RUN npm i .
RUN npm run-script build

WORKDIR '/app/html/template3'
RUN npm i . 
RUN npm run-script build



#
#
#
#

FROM ajcm/alpine-nginx:latest
WORKDIR '/app/html'

COPY --from=builder /app/html/ /app/html/

## copy conf
COPY ./default.conf /etc/nginx/conf.d/default.conf

COPY ./index.html .


EXPOSE 80

