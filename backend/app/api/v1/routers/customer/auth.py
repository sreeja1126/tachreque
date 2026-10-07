from fastapi import APIRouter, Depends
from app.core.customer_dependencies import get_current_customer
from app.schemas.customer_auth import (
    SendOTPRequest,
    SendOTPResponse,
    VerifyOTPRequest,
    CustomerTokenResponse,
)


router = APIRouter(
    prefix="/customer/auth",
    tags=["Customer Authentication"],
)


@router.post("/send-otp", response_model=SendOTPResponse)
def send_otp(data: SendOTPRequest):
    return {
        "message": f"OTP sent to {data.phone}",
    }


@router.post("/verify-otp", response_model=CustomerTokenResponse)
def verify_otp(data: VerifyOTPRequest):
    return {
        "access_token": "customer-test-token",
        "token_type": "bearer",
    }


@router.get("/protected")
def protected_customer_route(
    current_customer: dict = Depends(get_current_customer),
):
    return {
        "message": "Customer is authenticated",
        "customer": current_customer,
    }