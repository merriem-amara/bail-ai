from pydantic import BaseModel, EmailStr


class UserCreate(BaseModel):
    name: str
    email: EmailStr
    bar_number: str | None = None


class UserResponse(BaseModel):
    id: int
    name: str
    email: EmailStr
    bar_number: str | None = None

    class Config:
        from_attributes = True
