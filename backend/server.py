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
# from psycopg.errors import SerializationFailure, Error
# from psycopg.rows import namedtuple_row
from psycopg.rows import dict_row
from cockroachdb.sqlalchemy import run_transaction
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

app = Flask(__name__)
ALLOWED_EXTENSIONS = {'pdf', 'docx'}
db_uri = os.environ['DATABASE_URL'].replace("postgresql://", "cockroachdb://")
# conn_string = os.environ.get("DB_URI")


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
        # print(request)
        # print(request.files)
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
    return redirect("/")


    
# GET request to all the available applicant data in cockroachDB 
@app.route('/applicant_data', methods=['GET'])
def getApplicantData():
    applicants = []
    opt = parse_cmdline()
    logging.basicConfig(level=logging.DEBUG if opt.verbose else logging.INFO)
    try:
        # Attempt to connect to cluster with connection string provided to
        # script. By default, this script uses the value saved to the
        # DATABASE_URL environment variable.
        # For information on supported connection string formats, see
        # https://www.cockroachlabs.com/docs/stable/connect-to-the-database.html.
        db_url = opt.dsn
        conn = psycopg.connect(db_url, 
                               application_name="$ docs_simplecrud_psycopg3", 
                               row_factory=dict_row)
        with conn.cursor() as cur:
            applicantsJSON = cur.execute("SELECT * FROM public.applicant1").fetchall()
            for row in applicantsJSON:
                # if row is not None:
                id = row["applicant_id"]
                # 
                experiences = cur.execute(f"SELECT * FROM public.experience WHERE public.experience.applicant_id = {id}").fetchall()
                if experiences is not None:
                    for exp in experiences:
                        row.update(exp)
                # 
                educations = cur.execute(f"SELECT * FROM public.education WHERE public.education.applicant_id = {id}").fetchall()
                if educations is not None:
                    for edu in educations:
                        row.update(edu)
                # 
                skills = cur.execute(f"SELECT * FROM public.skills WHERE public.skills.applicant_id = {id}").fetchall()
                if skills is not None: 
                    for skill in skills:
                        row.update(skill)
                
                # Only create dict obj with project_text if it returns non-empty from the DB
                project_text_lst = cur.execute(f"SELECT * FROM public.project WHERE public.project.applicant_id = {id}").fetchall()
                if len(project_text_lst) > 0:
                    text = project_text_lst[0]['project_text']
                    d={'project_text': text}
                    row.update(d)

                applicants.append(row)
                print(applicants)
            print(json.dumps(applicants))
        return json.dumps(applicants)
                
    except Exception as e:
        logging.fatal("database connection failed or other error")
        logging.fatal(e)
        return
  
# parses command line to get the DATABASE_URL env variable
def parse_cmdline():
    parser = ArgumentParser(description=__doc__,
                            formatter_class=RawTextHelpFormatter)

    parser.add_argument("-v", "--verbose",
                        action="store_true", help="print debug info")

    parser.add_argument(
        "dsn",
        default=os.environ.get("DATABASE_URL"),
        nargs="?",
        help="""\
database connection string\
 (default: value of the DATABASE_URL environment variable)
            """,
    )

    opt = parser.parse_args()
    if opt.dsn is None:
        parser.error("database connection string not set")
    return opt      

# getApplicantData()
# upload_file()