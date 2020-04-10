#!/usr/bin/env python3

import json
from flask import Flask, render_template, request
import modules.load_static as load_static
from modules.contact import send_mail

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('react.html')

@app.route('/cli')
def cli():
    return render_template(
        'home.html',
        help_text=load_static.help_text,
        about_text=load_static.about_text,
        contact_text=load_static.contact_text,
        cupid_text=load_static.cupid_text,
        offlinepass_text=load_static.offlinepass_text,
        vijaystroupCOM_text=load_static.vijaystroupCOM_text,
        disney_text=load_static.disney_text,
        file_tree=load_static.file_tree
    )

@app.route('/email', methods=['POST'])
def email():
    data = json.loads(request.data.decode('utf-8'))
    sent = send_mail(data['name'], data['email'], data['message'])

    return data


if __name__ == '__main__':
    app.run(debug=True)
