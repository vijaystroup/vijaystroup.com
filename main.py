from flask import render_template
from flask_frozen import Freezer
from config import *


@app.route('/')
def home():
    return render_template('home.html', projects=projects, timeline=timeline, tools=tools)


@app.route('vijaystroupCOM/terms/')
def terms():
    return render_template('terms.html')


if __name__ == '__main__':
    freezer = Freezer(app)
    freezer.freeze()
