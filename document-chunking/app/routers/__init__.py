import requests
from fastapi import APIRouter, Response
from pydantic import BaseModel
from app.configs import API_URL
from app.services import StructExtract
import uuid

api_v1_router = APIRouter()


"""
['Hội đồng Đại học Bách khoa Hà Nội.docx',
 'Sổ tay sử dụng các dịch vụ CNTT cơ bản.docx']
"""


class ChunkBody(BaseModel):
  documentId: str


@api_v1_router.post('/chunking')
def chunking(body: ChunkBody):
  try:
    url = f'{API_URL}/api/v1/documents/{body.documentId}'
    response = requests.get(url)
    if response.status_code != 200:
      raise Exception('')
    data = response.json()
    if data['document']['file']['extension'] != 'docx':
      raise Exception('')
    filename = uuid.uuid4().__str__() + '.docx'
    filepath = './tmp/' + filename
    with open(filepath, 'wb') as f:
      response = requests.get(data['document']['file']['link'])
      f.write(response.content)
    service = StructExtract(
        path=filepath,
        title=data['document']['name']
    )
    response = {
        "chunks": service.chunks
    }
    return response
  except Exception as e:
    print(e)
    print(e.__traceback__.__str__())
    response = Response(
        content=str(e),
        status_code=400,
        media_type='application/json'
    )
    return response
