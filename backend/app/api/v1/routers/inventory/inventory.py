from fastapi import APIRouter, Depends

from app.core.dependencies import get_current_owner
from app.schemas.inventory import (
    OpeningStockRequest,
    OpeningStockResponse,
    CurrentStockResponse,
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


@router.get(
    "",
    response_model=CurrentStockResponse,
)
def get_current_stock(
    current_owner: dict = Depends(get_current_owner),
):
    return {
        "gold_weight_grams": 0,
        "silver_weight_grams": 0,
    }

@router.get(
    "/gold",
    response_model=dict[str, str],
)
def get_gold_stock(
    current_owner: dict = Depends(get_current_owner),
):
    return {
        "metal_type": "gold",
        "weight_grams": "0",
    }


@router.get(
    "/silver",
    response_model=dict[str, str],
)
def get_silver_stock(
    current_owner: dict = Depends(get_current_owner),
):
    return {
        "metal_type": "silver",
        "weight_grams": "0",
    }