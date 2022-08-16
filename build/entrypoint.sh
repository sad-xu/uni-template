#!/bin/sh

envsubst '$BACKEND_URL $BACKEND_PORT' < /etc/nginx/conf.d/default.template > /etc/nginx/conf.d/default.conf
if [ $# = 0 ]
then
    exec nginx -g 'daemon off;'
else
    exec "$@"
fi
