from sqlalchemy import Column, Integer, String, Text
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

    fir_number = Column(
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

    summary = Column(
        Text,
        nullable=True
    )
