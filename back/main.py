#!/usr/bin/env python3

import logging
import os
import json
from flask import Flask, render_template, request, jsonify
import modules.load_static as load_static
from modules.contact import send_mail

PATH = os.path.dirname(os.path.abspath(__file__))
logging.basicConfig(
    filename=f'{PATH}/../error.log',
    filemode='a', format='[%(asctime)s] %(message)s',
    datefmt='%y-%m-%d %H:%M:%S',
    level=40
)

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
        marketwatch_text=load_static.marketwatch_text,
        blastoff_text=load_static.blastoff_text,
        file_tree=load_static.file_tree
    )

@app.route('/email', methods=['POST'])
def email():
    data = json.loads(request.data.decode('utf-8'))
    logging.error('before send email')
    if send_mail(data['name'], data['email'], data['message']) == -1:
        logging.error('after send email')
        return jsonify({'msg': 'error'})

    return jsonify({'msg': 'success'})


if __name__ == '__main__':
    app.run(debug=False, host='0.0.0.0')
