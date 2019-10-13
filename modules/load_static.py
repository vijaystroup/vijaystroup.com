#!/usr/bin/env python3

from json import loads

# run this with multiprocessing or threading
def read_txt(filename):
    with open(filename, 'r') as f:
        return f.read()


def read_json(filename):
    with open(filename, 'r') as f:
        return loads(f.read())


help_text = read_txt('/d/python/vijaystroupCOM/static/txt/help.txt')
about_text = read_txt('/d/python/vijaystroupCOM/static/txt/about.txt')
contact_text = read_txt('/d/python/vijaystroupCOM/static/txt/contact.txt')
cupid_text = read_txt('/d/python/vijaystroupCOM/static/txt/cupid.txt')
offlinepass_text = read_txt(
    '/d/python/vijaystroupCOM/static/txt/offlinepass.txt'
)
vijaystroupCOM_text = read_txt(
    '/d/python/vijaystroupCOM/static/txt/vijaystroupCOM.txt'
)
file_tree = read_json('/d/python/vijaystroupCOM/static/json/filetree.json')
