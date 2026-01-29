from sqlalchemy import Column, String, Text, DateTime, text
from sqlalchemy.dialects.postgresql import UUID
from .database import Base
import datetime

class Feedback(Base):
    __tablename__ = "feedback"

    id = Column(UUID(as_uuid=True), primary_key=True, server_default=text("gen_random_uuid()"))
    name = Column(String(255), nullable=True)
    email = Column(String(255), nullable=True)
    requirement = Column(Text, nullable=False)
    category = Column(String(50), default="Other")
    created_at = Column(DateTime(timezone=True), server_default=text("now()"))
