import os
import json
import random
from flask import Flask

PATH = os.path.dirname(os.path.abspath(__file__))

with open(f'{PATH}/static/projects.json') as f:
    projects = json.loads(f.read())

tools = os.listdir(f'{PATH}/static/images/tools')

app = Flask(__name__)
