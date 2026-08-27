from fastapi import FastAPI

from app.routes.health import router as health_router
from app.routes.users import router as users_router
from app.routes.auth import router as auth_router


app = FastAPI(
    title="BailAI API",
    version="0.1.0",
    description="AI Criminal Litigation Assistant Backend"
)


app.include_router(health_router)
app.include_router(users_router)
app.include_router(auth_router)


@app.get("/")
def root():
    return {
        "name": "BailAI API",
        "status": "running"
    }
