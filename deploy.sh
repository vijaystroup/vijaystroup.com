#!/bin/sh

# make venv if not created
if [ ! -d "venv" ] 
then
    echo "Making Python venv" 
    python -m venv venv
    pip install -r requirements.txt
fi

# activate environment
echo "Activating venv" 
source venv/bin/activate

# get resume
echo "Downloading resume" 
python modules/get_resume.py

# build image
echo "Building image" 
docker build -t web .

# deploy stack
echo "Deploying stack" 
docker stack deploy -c docker-compose.traefik.yml
