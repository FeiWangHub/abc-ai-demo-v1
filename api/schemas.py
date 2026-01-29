from pydantic import BaseModel, EmailStr
from typing import Optional
from datetime import datetime
from uuid import UUID

class FeedbackCreate(BaseModel):
    name: Optional[str] = None
    email: Optional[str] = None
    requirement: str
    category: Optional[str] = "Other"

class FeedbackResponse(BaseModel):
    id: UUID
    success: bool
    message: str

    class Config:
        from_attributes = True
