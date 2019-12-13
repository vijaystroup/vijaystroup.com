#!/usr/bin/python3.6

import sys
import logging
import os

logging.basicConfig(stream=sys.stderr)
sys.path.insert(0,"/var/www/vijay")

from main import app as application
application.secret_key = os.getenv('VIJAY_WEBPASS')
