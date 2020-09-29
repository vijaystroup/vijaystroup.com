# import logging
import os
from flask import Flask

PATH = os.path.dirname(os.path.abspath(__file__))
# logging.basicConfig(
#     filename=f'{PATH}/../error.log',
#     filemode='a', format='[%(asctime)s] %(message)s',
#     datefmt='%y-%m-%d %H:%M:%S',
#     level=logging.INFO
# )

app = Flask(__name__)
