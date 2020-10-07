FROM tiangolo/uwsgi-nginx-flask:python3.8-alpine

ENV STATIC_URL "~ ^/app/static/((css/|images/|js/|json/).*)$"
ENV STATIC_PATH "/app/static/$1"

WORKDIR /app
COPY . .
