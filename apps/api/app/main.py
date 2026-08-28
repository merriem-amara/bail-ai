from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware


from app.routes.health import router as health_router
from app.routes.users import router as users_router
from app.routes.auth import router as auth_router
from app.routes.cases import router as cases_router


app = FastAPI(
    title="BailAI API",
    version="0.1.0",
    description="AI Criminal Litigation Assistant Backend"
)


# CORS Configuration
# Allows Next.js frontend to communicate with FastAPI backend

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://127.0.0.1:3000",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.include_router(health_router)
app.include_router(users_router)
app.include_router(auth_router)
app.include_router(cases_router)


@app.get("/")
def root():
    return {
        "name": "BailAI API",
        "status": "running"
    }
