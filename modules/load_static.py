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
file_tree = read_json('/d/python/vijaystroupCOM/static/json/filetree.json')
