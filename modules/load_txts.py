#!/usr/bin/env python3


def read_txt(filename):
    with open(filename, 'r') as f:
        return f.read()


data = read_txt('../static/txt/home.txt')
