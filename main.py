#!/usr/bin/env python3

from flask import Flask, render_template
import modules.load_txts as load_txts

app = Flask(__name__)


@app.route('/')
def home():
    return render_template(
        'home.html',
        help_text=load_txts.help_text,
        about_text=load_txts.about_text,
    )


if __name__ == '__main__':
    app.run(debug=True)
