from flask import Flask, render_template
from __init__ import app
import api


@app.route('/')
def home():
    projects = {
        'Cupid': {
            'image': 'cupid.svg',
            'description': 'I\'m baby squid lomo keytar fanny pack aesthetic messenger bag hammock bespoke hell of church-key artisan farm-to-table migas.',
            'type': 'application',
            'link': 'https://github.com/VijayStroup/Cupid-Bot'
        },
        'Offline Pass': {
            'image': 'lock.svg',
            'description': 'I\'m baby squid lomo keytar fanny pack aesthetic messenger bag hammock bespoke hell of church-key artisan farm-to-table migas.',
            'type': 'application',
            'link': 'https://github.com/VijayStroup/Offline-Pass'
        },
        'Personal Website': {
            'image': 'internet.svg',
            'description': 'I\'m baby squid lomo keytar fanny pack aesthetic messenger bag hammock bespoke hell of church-key artisan farm-to-table migas.',
            'type': 'web',
            'link': 'https://github.com/VijayStroup/vijaystroupCOM'
        },
        'Disney Data Science': {
            'image': 'magic-wand.svg',
            'description': 'I\'m baby squid lomo keytar fanny pack aesthetic messenger bag hammock bespoke hell of church-key artisan farm-to-table migas.',
            'type': 'data-science',
            'link': 'https://github.com/VijayStroup/Disney-Visualization'
        },
        'Market Watch': {
            'image': 'stock.svg',
            'description': 'I\'m baby squid lomo keytar fanny pack aesthetic messenger bag hammock bespoke hell of church-key artisan farm-to-table migas.',
            'type': 'application data-science',
            'link': 'https://github.com/VijayStroup/MarketWatch'
        },
        'BlastOff': {
            'image': 'rocket.svg',
            'description': 'I\'m baby squid lomo keytar fanny pack aesthetic messenger bag hammock bespoke hell of church-key artisan farm-to-table migas.',
            'type': 'application',
            'link': 'https://github.com/VijayStroup/BlastOff'
        },
        'WhichWhale': {
            'image': 'whale.svg',
            'description': 'I\'m baby squid lomo keytar fanny pack aesthetic messenger bag hammock bespoke hell of church-key artisan farm-to-table migas.',
            'type': 'web application',
            'link': 'https://github.com/VijayStroup/whichwhale'
        },
        'UCF FE Practice': {
            'image': 'coding.svg',
            'description': 'I\'m baby squid lomo keytar fanny pack aesthetic messenger bag hammock bespoke hell of church-key artisan farm-to-table migas.',
            'type': 'web application',
            'link': 'https://github.com/VijayStroup/ucf-fe'
        }
    }


    return render_template('home.html', projects=projects)


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
