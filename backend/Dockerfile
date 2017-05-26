FROM python:3.6-alpine
MAINTAINER Alexander Keating

EXPOSE 8000

RUN apk --update upgrade && \
    apk add postgresql-dev \
    gcc \
    musl-dev \
    && mkdir /code

COPY . /code/
WORKDIR code
RUN pip3 install -r requirements.txt


CMD  cd sentiment_analysis && python manage.py runserver