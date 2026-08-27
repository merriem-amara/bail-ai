from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.auth.dependencies import get_current_user, get_db
from app.models.case import Case
from app.models.user import User
from app.schemas.case import CaseCreate, CaseResponse


router = APIRouter(
    prefix="/cases",
    tags=["Cases"]
)


@router.post("/", response_model=CaseResponse)
def create_case(
    case: CaseCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
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
    current_user: User = Depends(get_current_user)
):

    return (
        db.query(Case)
        .filter(Case.lawyer_id == current_user.id)
        .all()
    )


@router.get("/{case_id}", response_model=CaseResponse)
def get_case(
    case_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):

    case = (
        db.query(Case)
        .filter(
            Case.id == case_id,
            Case.lawyer_id == current_user.id
        )
        .first()
    )

    if not case:
        raise HTTPException(
            status_code=404,
            detail="Case not found"
        )

    return case


@router.put("/{case_id}", response_model=CaseResponse)
def update_case(
    case_id: int,
    case_data: CaseCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):

    case = (
        db.query(Case)
        .filter(
            Case.id == case_id,
            Case.lawyer_id == current_user.id
        )
        .first()
    )

    if not case:
        raise HTTPException(
            status_code=404,
            detail="Case not found"
        )

    case.client_name = case_data.client_name
    case.cnic = case_data.cnic
    case.fir_number = case_data.fir_number
    case.police_station = case_data.police_station
    case.sections = case_data.sections
    case.court = case_data.court
    case.summary = case_data.summary

    db.commit()
    db.refresh(case)

    return case


@router.delete("/{case_id}")
def delete_case(
    case_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):

    case = (
        db.query(Case)
        .filter(
            Case.id == case_id,
            Case.lawyer_id == current_user.id
        )
        .first()
    )

    if not case:
        raise HTTPException(
            status_code=404,
            detail="Case not found"
        )

    db.delete(case)
    db.commit()

    return {
        "message": "Case deleted successfully"
    }
