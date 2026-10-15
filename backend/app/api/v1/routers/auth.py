from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from app.core.database import get_db
from app.core.dependencies import get_current_owner
from app.schemas.auth import LoginRequest, TokenResponse
from app.services.auth_service import authenticate_owner


router = APIRouter(
    prefix="/auth",
    tags=["Authentication"],
)


@router.post("/login", response_model=TokenResponse)
def login(login_data: LoginRequest, db: Session = Depends(get_db)):
    token = authenticate_owner(
        db=db,
        identifier=login_data.username,
        password=login_data.password,
    )

    if token is None:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid credentials or inactive account",
            headers={"WWW-Authenticate": "Bearer"},
        )

    return token


@router.get("/protected")
def protected_route(current_owner: dict = Depends(get_current_owner)):
    return {
        "message": "You are authenticated",
        "owner": current_owner,
    }
