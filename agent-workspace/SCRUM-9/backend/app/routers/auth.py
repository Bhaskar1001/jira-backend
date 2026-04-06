import logging
from fastapi import APIRouter, HTTPException, status
from fastapi.responses import JSONResponse
from app.models import LoginRequest, LoginResponse, ErrorResponse, ErrorDetail
from app.services.auth import authenticate_user

logger = logging.getLogger(__name__)
router = APIRouter(prefix="/auth", tags=["authentication"])

@router.post("/login", response_model=LoginResponse)
async def login(body: LoginRequest):
    """
    Login endpoint - authenticates user with email and password.
    
    Returns JWT token and user information on success.
    
    Error responses:
    - 400: Invalid credentials or validation error
    - 401: Invalid email/password combination
    - 429: Account locked due to too many failed attempts
    - 500: Server error
    """
    try:
        result = await authenticate_user(body)
        return result
        
    except PermissionError as e:
        logger.warning(f"Account locked: {body.email}")
        error_response = ErrorResponse(
            detail=[ErrorDetail(field="general", msg=str(e))]
        )
        return JSONResponse(
            status_code=status.HTTP_429_TOO_MANY_REQUESTS,
            content=error_response.model_dump()
        )
        
    except ValueError as e:
        logger.warning(f"Failed login attempt: {body.email}")
        error_response = ErrorResponse(
            detail=[ErrorDetail(field="general", msg=str(e))]