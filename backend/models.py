from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, ForeignKey, String
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.sql.sqltypes import INT

Base = declarative_base()

class Applicant(Base):
    __tablename__ = 'public.applicant1'
    applicant_id = Column(UUID, primary_key=True)
    first_name = Column(String)
    last_name = Column(String)
    phone_number = Column(String)
    email = Column(String)
    website = Column(String)
    state = Column(String)
    country = Column(String)
    city = Column(String)
    
class Education(Base):
    __tablename__ = 'public.education'
    education_id = Column(UUID, primary_key=True)
    applicant_id = Column(UUID, ForeignKey("public.applicant1.id"))
    organization = Column(String)
    gpa = Column(String)
    location = Column(String)
    university = Column(String)
 
class Experience(Base):
    __tablename__ = 'public.experience'
    experience_id = Column(UUID, primary_key=True)
    applicant_id = Column(UUID, ForeignKey("public.applicant1.id"))
    company = Column(String)
    job_title = Column(String)
    location = Column(String)
    job_description = Column(String)
    end_date = Column(String)

class Skills(Base):
    __tablename__ = 'public.skills'
    skill_id = Column(UUID, primary_key=True)
    applicant_id = Column(UUID, ForeignKey("public.applicant1.id"))
    skill_info = Column(String)
    
class Project(Base):
    __tablename__ = 'public.project'
    project_id = Column(UUID, primary_key=True)
    applicant_id = Column(UUID, ForeignKey("public.applicant1.id"))
    project_text = Column(String)