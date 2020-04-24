#!/usr/bin/env python3

from json import loads
from os import getcwd, path

BASE_DIR = '/var/www/vijay/back/static/'
#BASE_DIR = path.dirname(getcwd()) + 'static/'
#BASE_DIR = '/home/vijay/code/python/vijaystroup.com/back/static/'


def read_txt(filename):
    with open(filename, 'r') as f:
        return f.read()


def read_json(filename):
    with open(filename, 'r') as f:
        return loads(f.read())


help_text = read_txt(BASE_DIR + 'txt/help.txt')
about_text = read_txt(BASE_DIR + 'txt/about.txt')
contact_text = read_txt(BASE_DIR + 'txt/contact.txt')
cupid_text = read_txt(BASE_DIR + 'txt/cupid.txt')
offlinepass_text = read_txt(BASE_DIR + 'txt/offlinepass.txt')
vijaystroupCOM_text = read_txt(BASE_DIR + 'txt/vijaystroupCOM.txt')
disney_text = read_txt(BASE_DIR + 'txt/disney.txt')
file_tree = read_json(BASE_DIR + 'json/filetree.json')
