from flask import Flask, render_template
from config import *


@app.route('/')
def home():
    return render_template('home.html', projects=projects, timeline=timeline, tools=tools)


@app.route('/terms')
def terms():
    return render_template('terms.html')


if __name__ == '__main__':
    app.run(debug=False, host='0.0.0.0')
