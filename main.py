#!/usr/bin/env python3

from flask import Flask, render_template
import modules.load_static as load_static

app = Flask(__name__)


@app.route('/')
def home():
    return render_template(
        'home.html',
        help_text=load_static.help_text,
        about_text=load_static.about_text,
        contact_text=load_static.contact_text,
        cupid_text=load_static.cupid_text,
        offlinepass_text=load_static.offlinepass_text,
        vijaystroupCOM_text=load_static.vijaystroupCOM_text,
        file_tree=load_static.file_tree
    )


if __name__ == '__main__':
    app.run()
