from fastapi import FastAPI

app = FastAPI(
    title="Tachreque Jewellery Management System",
    description="Backend API for Tachreque Jewellery Management System",
    version="1.0.0",
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