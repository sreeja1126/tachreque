from decimal import Decimal

from pydantic import BaseModel, Field


class OpeningStockRequest(BaseModel):
    metal_type: str = Field(
        min_length=1,
        max_length=20,
    )
    weight_grams: Decimal = Field(
        gt=0,
    )
    notes: str | None = None


class OpeningStockResponse(BaseModel):
    message: str
    metal_type: str
    weight_grams: Decimal