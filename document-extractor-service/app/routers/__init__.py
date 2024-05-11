from fastapi import APIRouter

from app.routers.File import file_router

api_v1_router = APIRouter()

api_v1_router.include_router(file_router, prefix='/files')
