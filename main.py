from flask import Flask, render_template
from __init__ import *


@app.route('/')
def home():
    return render_template('home.html', projects=projects)


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
