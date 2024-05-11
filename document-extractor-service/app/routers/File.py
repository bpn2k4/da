from fastapi import APIRouter

file_router = APIRouter(tags=['File router'])


@file_router.get('/')
async def get_files():
  return {
      "files": [1, 2, 3, 4, 5, 6, 7]
  }
