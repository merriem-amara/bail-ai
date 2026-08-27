from sqlalchemy import Column, Integer, String, Text, DateTime
from sqlalchemy.sql import func

from app.database import Base


class Case(Base):
    __tablename__ = "cases"

    id = Column(
        Integer,
        primary_key=True,
        index=True
    )

    lawyer_id = Column(
        Integer,
        nullable=False
    )

    client_name = Column(
        String,
        nullable=False
    )

    cnic = Column(
        String,
        nullable=True
    )

    fir_number = Column(
        String,
        nullable=True
    )

    police_station = Column(
        String,
        nullable=True
    )

    sections = Column(
        String,
        nullable=True
    )

    court = Column(
        String,
        nullable=True
    )

    status = Column(
        String,
        default="active"
    )

    summary = Column(
        Text,
        nullable=True
    )

    created_at = Column(
        DateTime(timezone=True),
        server_default=func.now()
    )
