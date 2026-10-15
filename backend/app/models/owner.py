from sqlalchemy import Boolean, Column, DateTime, Integer, String

from app.core.database import Base


class Owner(Base):
    __tablename__ = "owners"

    owner_id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    full_name = Column(String(150), nullable=True)
    phone_number = Column(String(15), unique=True, nullable=False)
    email = Column(String(255), unique=True, nullable=True)
    password_hash = Column(String(255), nullable=False)
    is_active = Column(Boolean, nullable=False)
    created_at = Column(DateTime(timezone=True), nullable=True)
    updated_at = Column(DateTime(timezone=True), nullable=True)
