#!/bin/sh

# this script is called by GitHub Actions to auto-deploy an update

# make venv if not created
if [ ! -d "venv" ] 
then
    printf "\n\nMaking Python venv\n==================\n"
    python3 -m venv venv
    printf "\n\nInstalling requirements.txt\n===========================\n"
    . venv/bin/activate
    pip install -r requirements.txt
else
    . venv/bin/activate
fi

# get latest updated resume
printf "\n\nDownloading resume\n==================\n" 
python3 modules/get_resume.py

# build image
printf "\n\nBuilding image\n==============\n"
docker build -t website:latest .
sleep 3 # sleep for 3 seconds to make sure image is done completely

# deploy stack
printf "\n\nDeploying stack\n===============\n"
docker stack deploy -c docker-compose.traefik.yml website
