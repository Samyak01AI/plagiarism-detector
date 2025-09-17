# backend/main.py
from fastapi import FastAPI, HTTPException, Depends
from pydantic import BaseModel
from sqlalchemy.orm import Session
from models import User, SessionLocal, init_db
from fastapi.middleware.cors import CORSMiddleware

# Initialize FastAPI
app = FastAPI()

# CORS for frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Replace "*" with your frontend URL in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Initialize DB
init_db()

# Dependency to get DB session
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# Request body
class SignupRequest(BaseModel):
    name: str
    email: str
    password: str

@app.post("/signup")
def signup(data: SignupRequest, db: Session = Depends(get_db)):
    # Check if user exists
    existing_user = db.query(User).filter(User.username == data.email).first()
    if existing_user:
        raise HTTPException(status_code=400, detail="Email already registered")

    # Create user with hashed password
    new_user = User(username=data.email)
    new_user.set_password(data.password)
    db.add(new_user)
    db.commit()
    db.refresh(new_user)

    return {"success": True, "message": f"User {data.name} created successfully"}
