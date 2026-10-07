from fastapi import APIRouter, Depends

from app.core.dependencies import get_current_owner
from app.schemas.inventory import (
    OpeningStockRequest,
    OpeningStockResponse,
)


router = APIRouter(
    prefix="/inventory",
    tags=["Inventory"],
)


@router.post(
    "/opening-stock",
    response_model=OpeningStockResponse,
)
def add_opening_stock(
    data: OpeningStockRequest,
    current_owner: dict = Depends(get_current_owner),
):
    return {
        "message": "Opening stock recorded successfully",
        "metal_type": data.metal_type,
        "weight_grams": data.weight_grams,
    }