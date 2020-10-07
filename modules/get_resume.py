import os
import io
from googleapiclient.http import MediaIoBaseDownload
from googleapiclient.discovery import build
import pickle
from Google import Create_Service

GPATH = os.path.dirname(os.path.abspath(__file__))

file_id = '1gfAGIpondKPQ2eGxdnGKxewsXYAAwsHopv7ceAIdaPg'
service = Create_Service(f'{GPATH}/credentials.json', 'drive', 'v3', ['https://www.googleapis.com/auth/drive.readonly'])

request = service.files().export_media(fileId=file_id, mimeType='application/pdf')
fh = io.BytesIO()
downloader = MediaIoBaseDownload(fh, request)

done = False
while done is False:
    status, done = downloader.next_chunk()
    print(f'Progress: {status.progress() * 100}')

fh.seek(0)
with open(f'{GPATH}/../static/resume.pdf', 'wb') as f:
    f.write(fh.read())
