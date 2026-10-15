from sqlalchemy.orm import Session

from app.core.security import create_access_token, verify_password
from app.models import Owner


def authenticate_owner(db: Session, identifier: str, password: str) -> dict | None:
    owner = (
        db.query(Owner)
        .filter((Owner.email == identifier) | (Owner.phone_number == identifier))
        .first()
    )

    if owner is None or not verify_password(password, owner.password_hash):
        return None

    if not owner.is_active:
        return None

    access_token = create_access_token(
        {"sub": str(owner.owner_id), "role": "owner"}
    )

    return {
        "access_token": access_token,
        "token_type": "bearer",
    }
