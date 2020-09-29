from flask import jsonify
from __init__ import app


@app.route('/projects', methods=['GET'])
def projects():
    projects = {
        1: 'project 1',
        2: 'project 2',
    }

    return jsonify(projects)
