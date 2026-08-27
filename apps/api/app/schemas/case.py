from pydantic import BaseModel
from datetime import datetime


class CaseCreate(BaseModel):
    client_name: str
    cnic: str | None = None
    fir_number: str | None = None
    police_station: str | None = None
    sections: str | None = None
    court: str | None = None
    summary: str | None = None


class CaseResponse(BaseModel):
    id: int
    lawyer_id: int
    client_name: str
    cnic: str | None
    fir_number: str | None
    police_station: str | None
    sections: str | None
    court: str | None
    status: str
    summary: str | None
    created_at: datetime

    class Config:
        from_attributes = True
