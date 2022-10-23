from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, ForeignKey, String
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.sql.sqltypes import INT

Base = declarative_base()

class Applicant(Base):
    __tablename__ = 'applicant1'
    applicant_id = Column(INT, primary_key=True)
    first_name = Column(String)
    last_name = Column(String)
    phone_number = Column(String)
    email = Column(String)
    website = Column(String)
    state = Column(String)
    country = Column(String)
    city = Column(String)
    
class Education(Base):
    __tablename__ = 'education'
    education_id = Column(INT, primary_key=True)
    applicant_id = Column(INT, ForeignKey("applicant1.applicant_id"))
    education = Column(String)
    gpa = Column(String)
    location = Column(String)
    university = Column(String)
 
class Experience(Base):
    __tablename__ = 'experience'
    experience_id = Column(INT, primary_key=True)
    applicant_id = Column(INT, ForeignKey("applicant1.applicant_id"))
    company = Column(String)
    job_title = Column(String)
    location = Column(String)
    job_description = Column(String)
    end_date = Column(String)

class Skills(Base):
    __tablename__ = 'skills'
    skill_id = Column(INT, primary_key=True)
    applicant_id = Column(INT, ForeignKey("applicant1.applicant_id"))
    skill_info = Column(String)
    
class Project(Base):
    __tablename__ = 'project'
    project_id = Column(INT, primary_key=True)
    applicant_id = Column(INT, ForeignKey("applicant1.applicant_id"))
    project_text = Column(String)