from fastapi import FastAPI
from app.api.v1.routers import auth


app = FastAPI(
    title="Tachreque Jewellery Management System",
    description="Backend API for Tachreque Jewellery Management System",
    version="1.0.0",
)


app.include_router(
    auth.router,
    prefix="/api/v1",
)


@app.get("/")
def root():
    return {
        "message": "Welcome to Tachreque API",
        "status": "running",
    }


@app.get("/health")
def health_check():
    return {
        "status": "healthy",
    }