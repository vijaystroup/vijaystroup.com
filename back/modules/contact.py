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


def send_mail(name, email, message):
    try:
        with smtplib.SMTP_SSL('smtp.gmail.com', 465) as smtp:
            smtp.login(os.getenv('EMAIL_USER'), os.getenv('EMAIL_PASS'))
            logging.error('logged in')
            msg = EmailMessage()
            msg['Subject'] = f'Contact Form from vijaystroup.com'
            msg['From'] = os.getenv('EMAIL_USER')
            msg['To'] = 'vijay@vijaystroup.com'
            msg.set_content(f'Name: {name}\nEmail: {email}\n\n{message}')

            smtp.send_message(msg)
    except:
        logging.exception('Exception thrown in sending email')
        return -1
