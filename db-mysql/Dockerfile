FROM mysql:5.7

ENV MYSQL_ROOT_PASSWORD="ggp"
ENV MYSQL_DATABASE="local"

RUN mkdir -p /usr/sql/test_db-master
ADD test_db-master /usr/sql/test_db-master

COPY init.sql /docker-entrypoint-initdb.d/

RUN /etc/init.d/mysql start