import os
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from dotenv import load_dotenv
import logging

load_dotenv()

DATABASE_URL = os.getenv("DATABASE_URL")

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

engine = None
SessionLocal = None
Base = declarative_base()

def init_db():
    global engine, SessionLocal
    if not DATABASE_URL:
        logger.warning("DATABASE_URL not set. Database operations will be unavailable.")
        return

    try:
        # Construct synchronous postgresql URL if it starts with postgres:// (Supabase style)
        url = DATABASE_URL
        if url.startswith("postgres://"):
            url = url.replace("postgres://", "postgresql://", 1)
        
        engine = create_engine(url)
        SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
        logger.info("Database engine initialized successfully.")
    except Exception as e:
        logger.error(f"Failed to initialize database engine: {e}")
        engine = None
        SessionLocal = None

def get_db():
    if SessionLocal is None:
        logger.warning("Database session requested but SessionLocal is not initialized.")
        yield None
        return
        
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# Initialize on module load
init_db()
