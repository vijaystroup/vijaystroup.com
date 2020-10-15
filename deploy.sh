#!/bin/sh

# this script is for pushing up new image to GitHub and then invoking the GitHub
# action

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
docker build -t docker.pkg.github.com/vijaystroup/vijaystroupCOM/vijaystroup.com .
docker push docker.pkg.github.com/vijaystroup/vijaystroupCOM/vijaystroup.com

# deploy stack
printf "\n\nDeploying stack\n===============\n"
docker stack deploy -c docker-compose.traefik.yml web
