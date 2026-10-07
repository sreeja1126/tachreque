from fastapi import APIRouter, Depends

from app.core.dependencies import get_current_owner
from app.schemas.auth import LoginRequest, TokenResponse


router = APIRouter(
    prefix="/auth",
    tags=["Authentication"],
)


@router.post("/login", response_model=TokenResponse)
def login(login_data: LoginRequest):
    return {
        "access_token": "test-token",
        "token_type": "bearer",
    }


@router.get("/protected")
def protected_route(current_owner: dict = Depends(get_current_owner)):
    return {
        "message": "You are authenticated",
        "owner": current_owner,
    }