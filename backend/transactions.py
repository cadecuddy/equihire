import random
from models import Applicant, Education, Experience, Skills, Project
import uuid
from sqlalchemy.orm import sessionmaker
import time

def getID():
    return int(time.time() % 10000)

def add_applicant(session, fName, lName, num, e, web, s, countryAdd, cityAdd):
    applicant = Applicant(
        applicant_id=getID(),
        first_name=fName,
        last_name=lName,
        phone_number=num,
        email=e,
        website=web,
        # state=s,
        country=countryAdd,
        city=cityAdd,
        
    )
    session.add(applicant)
    return applicant

def add_education(session, uni, eduType, grade, loc):
    edu = Education(
        education_id=random.randint(1,10000000),
        applicant_id=getID(),
        education=eduType,
        gpa=grade,
        location=loc,
        university=uni,
    )
    session.add(edu)
    return edu

def add_experience(session, title, loc, descrip, date, comp):
    exp = Experience(
        experience_id=random.randint(1,10000000),
        applicant_id=getID(),
        job_title=title,
        location=loc,
        job_description=descrip,
        end_date=date,
        company=comp,
    )
    session.add(exp)
    return exp

def add_skills(session, info):
    skills = Skills(
        skill_id=random.randint(1,10000000),
        applicant_id=getID(),
        skill_info=info,
    )
    session.add(skills)
    return skills
    
def add_projects(session, info):
    proj = Project(
        project_id=random.randint(1,100000000),
        applicant_id=getID(),
        project_text=info,
    )
    session.add(proj)
    return proj