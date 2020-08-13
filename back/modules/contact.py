import os
import logging
import smtplib
from email.message import EmailMessage
from json import loads
from pathlib import Path

PATH = os.path.dirname(os.path.abspath(__file__))

logging.basicConfig(
    filename=f'{PATH}/../../error.log',
    filemode='a', format='[%(asctime)s] %(message)s',
    datefmt='%y-%m-%d %H:%M:%S',
    level=40
)


def read_secret():
    with open(os.path.join(str(Path.home), '.ssh/vijaystroup.com.json'), 'r') as f:
        return loads(f.read())


def send_mail(name, email, message):
    try:
        secrets = read_secret()
        with smtplib.SMTP_SSL('smtp.gmail.com', 465) as smtp:
            smtp.login(secrets['EMAIL_USER'], secrets['EMAIL_PASS'])

            msg = EmailMessage()
            msg['Subject'] = f'Contact Form from vijaystroup.com'
            msg['From'] = secrets['EMAIL_USER']
            msg['To'] = 'vijay@vijaystroup.com'
            msg.set_content(f'Name: {name}\nEmail: {email}\n\n{message}')

            smtp.send_message(msg)
    except:
        logging.exception('Exception thrown in sending email')
