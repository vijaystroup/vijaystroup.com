#!/bin/sh

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

# get resume
printf "\n\nDownloading resume\n==================\n" 
python3 modules/get_resume.py

# # build image
printf "\n\nBuilding image\n==============\n"
docker image rm web
docker build -t web .

# deploy stack
printf "\n\nDeploying stack\n===============\n"
docker stack deploy -c docker-compose.traefik.yml web
