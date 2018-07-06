FROM mysql:5.7

RUN mkdir -p /usr/sql/test_db
ADD test_db /usr/sql/test_db

COPY init.sql /docker-entrypoint-initdb.d/

RUN /etc/init.d/mysql start