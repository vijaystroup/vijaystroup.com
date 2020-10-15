#!/bin/sh

# this script is called by GitHub Actions to auto-deploy an update

docker stack rm website

# build image
printf "\n\nBuilding image\n==============\n"
docker image rm -f website
docker build -t website .
sleep 3 # sleep for 3 seconds to make sure image is done completely

# deploy stack
printf "\n\nDeploying stack\n===============\n"
docker stack deploy -c docker-compose.traefik.yml website
