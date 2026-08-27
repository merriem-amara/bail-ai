from sqlalchemy import Column, Integer, String, Text
from app.database import Base


class Document(Base):
    __tablename__ = "documents"

    id = Column(
        Integer,
        primary_key=True,
        index=True
    )

    case_id = Column(
        Integer,
        nullable=False
    )

    filename = Column(
        String,
        nullable=False
    )

    document_type = Column(
        String,
        nullable=True
    )

    extracted_text = Column(
        Text,
        nullable=True
    )
