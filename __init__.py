# import logging
import os
import json
from flask import Flask

PATH = os.path.dirname(os.path.abspath(__file__))
# logging.basicConfig(
#     filename=f'{PATH}/../error.log',
#     filemode='a', format='[%(asctime)s] %(message)s',
#     datefmt='%y-%m-%d %H:%M:%S',
#     level=logging.INFO
# )
with open(f'{PATH}/static/projects.json') as f:
    projects = json.loads(f.read())

app = Flask(__name__)
