from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.auth.dependencies import get_current_user, get_db
from app.models.case import Case
from app.schemas.case import CaseCreate, CaseResponse


router = APIRouter(
    prefix="/cases",
    tags=["Cases"]
)
def create_case(
    case: CaseCreate,
    db: Session = Depends(get_db)
):


@router.post("/", response_model=CaseResponse)
def create_case(
    case: CaseCreate,
    db: Session = Depends(get_db),
    current_user = Depends(get_current_user)
):

    new_case = Case(
        lawyer_id=current_user.id,
        client_name=case.client_name,
        cnic=case.cnic,
        fir_number=case.fir_number,
        police_station=case.police_station,
        sections=case.sections,
        court=case.court,
        summary=case.summary
    )

    db.add(new_case)
    db.commit()
    db.refresh(new_case)

    return new_case


@router.get("/", response_model=list[CaseResponse])
def get_cases(
    db: Session = Depends(get_db),
    current_user = Depends(get_current_user)
):
    return (
        db.query(Case)
        .filter(Case.lawyer_id == current_user.id)
        .all()
    )


@router.get("/{case_id}", response_model=CaseResponse)
def get_case(
    case_id: int,
    db: Session = Depends(get_db)
):

    case = (
        db.query(Case)
        .filter(Case.id == case_id)
        .first()
    )

    if not case:
        raise HTTPException(
            status_code=404,
            detail="Case not found"
        )

    return case
