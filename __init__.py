import os
import json
import random
from flask import Flask
from modules import get_resume

PATH = os.path.dirname(os.path.abspath(__file__))

with open(f'{PATH}/static/json/projects.json') as f:
    projects = json.loads(f.read())

with open(f'{PATH}/static/json/timeline.json') as f:
    timeline = json.loads(f.read())

tools = os.listdir(f'{PATH}/static/images/tools')

app = Flask(__name__)
