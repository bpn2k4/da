from fastapi import FastAPI, Response
from fastapi.middleware.cors import CORSMiddleware

from app.routers import api_v1_router

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(api_v1_router, prefix='/api/v1')


@app.get("/")
def hello():
  text = "<h1>Hello World 4</h1>"
  return Response(text, media_type='text/html')


if __name__ == "__main__":
  import uvicorn
  uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
