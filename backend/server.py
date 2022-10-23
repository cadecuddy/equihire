import os
import json
import logging
import transactions
import applicant
from pdf2json import parse
from cleanOutput import cleanJSON
from flask import Flask, Response, flash, redirect, request, url_for
from argparse import ArgumentParser, RawTextHelpFormatter
import psycopg
from flask_cors import CORS
from psycopg.rows import dict_row
from cockroachdb.sqlalchemy import run_transaction
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

app = Flask(__name__)
ALLOWED_EXTENSIONS = {'pdf', 'docx'}
db_uri = os.environ['DATABASE_URL'].replace("postgresql://", "cockroachdb://")
# conn_string = os.environ.get("DB_URI")
CORS(app)

# NOT NEEDED???
@app.route("/")
def index():
    return "<p>Hello, World!</p>"
# only allow uploads from allowed files
def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS
           
# end that performs a POST request to upload a json file into our system
# @app.route('/upload', methods=['POST'])
@app.route('/upload_resume', methods=['POST'])
def upload_file():
    print("HIT!")
    if request.method == 'POST':
        if 'file' not in request.files:
            flash('No file part')
            return redirect('/')
        file = request.files['file']
        if file and allowed_file(file.filename):
            filename = file.filename
            file.save(os.path.join(filename))
        parse(filename)
        data = cleanJSON()
        a=applicant.applicant_mapper(db_uri)
        a.add_applicant(data)
    return Response("go to sleep", status=201, mimetype='application/json')

# GET request to all the available applicant data in cockroachDB 
@app.route('/applicant_data', methods=['GET'])
def getApplicantData():
    applicants = []
    print("HIT")
    try:
        # Attempt to connect to cluster with connection string provided to
        # script. By default, this script uses the value saved to the
        # DATABASE_URL environment variable.
        # For information on supported connection string formats, see
        # https://www.cockroachlabs.com/docs/stable/connect-to-the-database.html.
        # db_url = opt.dsn
        
        DATABASE_URL="postgresql://mansimran:hzxjyevUv4v-RPyTesPPyA@free-tier14.aws-us-east-1.cockroachlabs.cloud:26257/defaultdb?sslmode=verify-full&options=--cluster%3Dequihire-6057"
        conn = psycopg.connect(DATABASE_URL, 
                               application_name="$ docs_simplecrud_psycopg3", 
                               row_factory=dict_row)
        with conn.cursor() as cur:
            applicantsJSON = cur.execute("SELECT * FROM applicant1").fetchall()
            print(applicantsJSON)
            for row in applicantsJSON:
                id = row["applicant_id"]
                
                row["experiences"] = []
                experiences = cur.execute(f"SELECT * FROM experience WHERE experience.applicant_id = {id}").fetchall()
                if experiences is not None:
                    for exp in experiences:
                        row["experiences"].append(exp)
                #
                row["educations"] = []
                educations = cur.execute(f"SELECT * FROM education WHERE education.applicant_id = {id}").fetchall()
                if educations is not None:
                    for edu in educations:
                        row["educations"].append(edu)
                # 
                row["skills"] = []
                skills = cur.execute(f"SELECT * FROM skills WHERE skills.applicant_id = {id}").fetchall()
                if skills is not None: 
                    for skill in skills:
                        row["skills"].append(skill)
                
                # Only create dict obj with project_text if it returns non-empty from the DB
                project_text_lst = cur.execute(f"SELECT * FROM project WHERE project.applicant_id = {id}").fetchall()
                if len(project_text_lst) > 0:
                    text = project_text_lst[0]['project_text']
                    d={'project_text': text}
                    row.update(d)
                applicants.append(row)
                print(applicants)
            print("HIT")
        return applicants
                
    except Exception as e:
        logging.fatal("database connection failed or other error")
        logging.fatal(e)
        return
     
@app.route("/delete/<applicant_id>", methods=["DELETE"])
def deleteApplicant(applicant_id):
    conn = psycopg.connect(db_uri, 
                               application_name="$ docs_simplecrud_psycopg3", 
                               row_factory=dict_row)
    with conn.cursor() as cur:
        cur.execute(f"DELETE FROM applicant1 where applicant_id = {applicant_id}")
        logging.debug("delete_accounts(): status message: %s",
                      cur.statusmessage)

    with conn.cursor() as cur:
        cur.execute(f"DELETE FROM experience where applicant_id = {applicant_id}")
        logging.debug("delete_accounts(): status message: %s",
                      cur.statusmessage)

    with conn.cursor() as cur:
        cur.execute(f"DELETE FROM education where applicant_id = {applicant_id}")
        logging.debug("delete_accounts(): status message: %s",
                      cur.statusmessage)

    with conn.cursor() as cur:
        cur.execute(f"DELETE FROM skills where applicant_id = {applicant_id}")
        logging.debug("delete_accounts(): status message: %s",
                      cur.statusmessage)

    with conn.cursor() as cur:
        cur.execute(f"DELETE FROM project where applicant_id = {applicant_id}")
        logging.debug("delete_accounts(): status message: %s",
                      cur.statusmessage)
    conn.commit()       
     
# getApplicantData()