#!/bin/bash

CONTAINER_NAME=admin-frontend
IMAGE_NAME=$CONTAINER_NAME-image
PORT=80
VIRTUAL_PORT=$PORT
VIRTUAL_HOST=admin.imafloraservicos.org
LETSENCRYPT_HOST=$VIRTUAL_HOST
LETSENCRYPT_EMAIL="ti@imaflora.org"

docker rm -f $CONTAINER_NAME

docker build \
    --compress \
    --force-rm \
    --no-cache \
    --tag $IMAGE_NAME \
    .

docker run \
    --detach \
    --restart always \
    --name $CONTAINER_NAME \
    --env-file $(pwd)/.env \
    --env VIRTUAL_HOST=$VIRTUAL_HOST \
    --env VIRTUAL_PORT=$VIRTUAL_PORT \
    --env LETSENCRYPT_HOST=$LETSENCRYPT_HOST \
    --env LETSENCRYPT_EMAIL=$LETSENCRYPT_EMAIL \
    --publish $PORT \
    $IMAGE_NAME
