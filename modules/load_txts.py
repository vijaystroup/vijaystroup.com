#!/usr/bin/env python3

# run this with multiprocessing or threading
def read_txt(filename):
    with open(filename, 'r') as f:
        return f.read()


help_text = read_txt('/d/python/vijaystroupCOM/static/txt/help.txt')
about_text = read_txt('/d/python/vijaystroupCOM/static/txt/about.txt')
