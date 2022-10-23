from cockroachdb.sqlalchemy import run_transaction
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
import transactions

class applicant_mapper:
    def __init__(self, conn_string):
        self.engine = create_engine(conn_string, convert_unicode=True)
        self.sessionmaker = sessionmaker(bind=self.engine)
        
    def add_applicant(self, data):
        applicant = run_transaction(self.sessionmaker, 
                        lambda session: transactions.add_applicant(
                fName=data['first_name'], 
                lName=data['last_name'], 
                num=data['phone_number'], 
                e=data['email'], 
                web=data['website'], 
                s=data['state'], 
                countryAdd=data['country'], 
                cityAdd=data['city'],
                session=session
                )
        )
        applicantId = applicant.getattr("applicant_id")
        
        for i in range(data['education_count']):
            run_transaction(self.sessionmaker,
                    lambda session: transactions.add_education(
                aId=applicantId,
                uni=data[f"university_{i+1}"],
                eduType=data[f"education_{i+1}"],
                grade=data[f"gpa_{i+1}"],
                loc=data[f"location_{i+1}"],
                session=session
                )
            )
            
        for i in range(data['work_count']):
            run_transaction(self.sessionmaker, lambda session:
                transactions.add_experience(
                aId=applicantId,
                title=data[f"job_{i+1}"],
                loc=data[f"location_{i+1}"],
                descrip=data[f"description_{i+1}"],
                comp=data[f"company_{i+1}"],
                date=data[f"endDate_{i+1}"],
                session=session
                )
            )
            
        for i in range(data['skill_count']):
            run_transaction(self.sessionmaker, 
                    lambda session: transactions.add_skills(
                                        aId=applicantId,
                                        info=data[f"skill_{i+1}"],
                                        session=session
                                    )
            )
        
        run_transaction(self.sessionmaker, 
                         lambda session: transactions.add_projects(
            aId=applicantId,
            info=data[f"projects"],
            session=session
            )
        )