from fastapi import FastAPI
from app.routes.health import router as health_router



app = FastAPI(
    title="BailAI API",
    version="0.1.0",
    description="AI Criminal Litigation Assistant Backend"
)

app.include_router(health_router)

@app.get("/")
def root():
    return {
        "name": "BailAI API",
        "status": "running"
    }
