import os

from dotenv import load_dotenv


load_dotenv()


JWT_SECRET = os.getenv(
    "JWT_SECRET",
    "change-this-secret-in-production"
)

JWT_ALGORITHM = "HS256"

ACCESS_TOKEN_EXPIRE_MINUTES = 60
