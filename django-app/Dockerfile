FROM python:3.6-alpine

ENV PYTHONUNBUFFERED 1

RUN apk --no-cache add --virtual build-dependencies \
      build-base \
      py-mysqldb \
      gcc \
      libc-dev \
      libffi-dev \
      mariadb-dev 

RUN apk -q --no-cache add mariadb-client-libs

RUN mkdir /app
WORKDIR /app
ADD requirements.txt /app/
RUN pip install -r requirements.txt
