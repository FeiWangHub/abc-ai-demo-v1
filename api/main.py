from fastapi import FastAPI, Depends, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
import os
from datetime import datetime
import logging

from . import models, schemas
from .database import engine, get_db, DATABASE_URL

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = FastAPI(title="ABC AI Community API")

# Configure CORS
origins = os.getenv("CORS_ORIGINS", "*").split(",")
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/api/health")
def health_check(db: Session = Depends(get_db)):
    db_status = "connected" if db is not None else "disconnected"
    return {
        "status": "online",
        "database": db_status,
        "timestamp": datetime.now().isoformat()
    }

@app.post("/api/feedback", response_model=schemas.FeedbackResponse)
def create_feedback(feedback: schemas.FeedbackCreate, db: Session = Depends(get_db)):
    if db is None:
        logger.warning(f"Database unavailable. Logging feedback locally: {feedback}")
        # In a real scenario, we might queue this or log it to a file
        # For demonstration, we'll return a 503 or a mock success if allowed
        raise HTTPException(
            status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
            detail="Database connection is currently unavailable. Please try again later."
        )

    try:
        db_feedback = models.Feedback(
            name=feedback.name,
            email=feedback.email,
            requirement=feedback.requirement,
            category=feedback.category
        )
        db.add(db_feedback)
        db.commit()
        db.refresh(db_feedback)
        
        return {
            "id": db_feedback.id,
            "success": True,
            "message": "Feedback submitted successfully."
        }
    except Exception as e:
        logger.error(f"Error saving feedback: {e}")
        db.rollback()
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="An error occurred while saving your feedback."
        )

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
