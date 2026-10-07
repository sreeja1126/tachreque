from pydantic import BaseModel, Field


class SendOTPRequest(BaseModel):
    phone: str = Field(
        min_length=10,
        max_length=15,
    )


class SendOTPResponse(BaseModel):
    message: str


class VerifyOTPRequest(BaseModel):
    phone: str = Field(
        min_length=10,
        max_length=15,
    )
    otp: str = Field(
        min_length=6,
        max_length=6,
    )


class CustomerTokenResponse(BaseModel):
    access_token: str
    token_type: str = "bearer"