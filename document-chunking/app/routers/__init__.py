import requests
from fastapi import APIRouter, Response
from pydantic import BaseModel
from app.configs import API_URL

api_v1_router = APIRouter()


class ChunkBody(BaseModel):
  documentId: str


@api_v1_router.post('/chunking')
def chunking(body: ChunkBody):
  try:
    url = f'{API_URL}/api/v1/documents/{body.documentId}'
    print(url)
    res = requests.get(url)
    if res.status_code == 200:
      pass
    print(res)
    t = res.json()
    return t
  except Exception as e:
    print(e)
    response = Response(
        content=str(e),
        status_code=400,
        media_type='application/json'
    )
    return response
