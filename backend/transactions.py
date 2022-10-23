from models import Applicant, Education, Experience, Skills, Project
import uuid
from sqlalchemy.orm import sessionmaker




def add_applicant(session, fName, lName, num, e, web, s, countryAdd, cityAdd):
    applicant = Applicant(
        applicant_id=str(
            uuid.uuid4()),
        first_name=fName,
        last_name=lName,
        phone_number=num,
        email=e,
        website=web,
        state=s,
        country=countryAdd,
        city=cityAdd,
        
    )
    session.add(applicant)
    return applicant

def add_education(session, aId, uni, eduType, grade, loc):
    edu = Education(
        education_id=uuid.uuid4(),
        applicant_id=aId,
        education=eduType,
        gpa=grade,
        location=loc,
        university=uni,
    )
    session.add(edu)
    return edu

def add_experience(session, aId, title, loc, descrip, date, comp):
    exp = Experience(
        experience_id=uuid.uuid4(),
        applicant_id=aId,
        job_title=title,
        location=loc,
        job_description=descrip,
        end_date=date,
        company=comp,
    )
    session.add(exp)
    return exp

def add_skills(session, aId, info):
    skills = Skills(
        skill_id=uuid.uuid4(),
        applicant_id=aId,
        skill_info=info,
    )
    session.add(skills)
    return skills
    
def add_projects(session, aId, info):
    proj = Project(
        project_id=uuid.uuid4(),
        applicant_id=aId,
        project_text=info,
    )
    session.add(proj)
    return proj