FROM mysql:5.7

RUN mkdir -p /usr/sql/test_db-master
ADD test_db-master /usr/sql/test_db-master

COPY init.sql /docker-entrypoint-initdb.d/

RUN /etc/init.d/mysql start