FROM nginx:1.14-alpine

ENV HOME=/web

ENV BACKEND_URL=localhost

ENV BACKEND_PORT=80

COPY ./dist ${HOME}/dist

COPY ./build/default.template /etc/nginx/conf.d/

COPY ./build/entrypoint.sh /

RUN chmod a+x /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]


