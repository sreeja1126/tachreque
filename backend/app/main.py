from fastapi import FastAPI, Request
from fastapi.responses import JSONResponse

from app.api.v1.routers import auth
from app.api.v1.routers.customer import auth as customer_auth
from app.api.v1.routers.inventory import inventory

from app.core.exceptions import (
    AppException,
    AuthenticationException,
    AuthorizationException,
    NotFoundException,
    ValidationException,
)


app = FastAPI(
    title="Tachreque Jewellery Management System",
    description="Backend API for Tachreque Jewellery Management System",
    version="1.0.0",
)


@app.exception_handler(AuthenticationException)
async def authentication_exception_handler(
    request: Request,
    exc: AuthenticationException,
):
    return JSONResponse(
        status_code=401,
        content={"detail": exc.message},
    )


@app.exception_handler(AuthorizationException)
async def authorization_exception_handler(
    request: Request,
    exc: AuthorizationException,
):
    return JSONResponse(
        status_code=403,
        content={"detail": exc.message},
    )


@app.exception_handler(NotFoundException)
async def not_found_exception_handler(
    request: Request,
    exc: NotFoundException,
):
    return JSONResponse(
        status_code=404,
        content={"detail": exc.message},
    )


@app.exception_handler(ValidationException)
async def validation_exception_handler(
    request: Request,
    exc: ValidationException,
):
    return JSONResponse(
        status_code=422,
        content={"detail": exc.message},
    )


@app.exception_handler(AppException)
async def app_exception_handler(
    request: Request,
    exc: AppException,
):
    return JSONResponse(
        status_code=400,
        content={"detail": exc.message},
    )


app.include_router(
    auth.router,
    prefix="/api/v1",
)

app.include_router(
    customer_auth.router,
    prefix="/api/v1",
)

app.include_router(
    inventory.router,
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