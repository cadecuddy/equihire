import os
import logging
from pdf2json import parse
from flask import Flask, Response, flash, redirect, request, url_for
from argparse import ArgumentParser, RawTextHelpFormatter
import psycopg
from psycopg.errors import SerializationFailure, Error
from psycopg.rows import namedtuple_row

app = Flask(__name__)
ALLOWED_EXTENSIONS = {'pdf', 'docx'}

@app.route("/")
def index():
    return "<p>Hello, World!</p>"

def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

# @app.route('/upload', methods=['POST'])
@app.route('/upload', methods=['POST'])
def upload_file():
    print("hello")
    if request.method == 'POST':
        print(request)
        print(request.files)
        if 'file' not in request.files:
            flash('No file part')
            return redirect('/')
        file = request.files['file']
        if file and allowed_file(file.filename):
            filename = file.filename
            file.save(os.path.join(filename))
        return Response(parse(filename))
    
@app.route('/applicant_data', methods=['GET'])
def getApplicantData():
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
                               row_factory=namedtuple_row)
        with conn.cursor() as cur:
            cur.execute("SELECT * FROM public.applicant1")

    except Exception as e:
        logging.fatal("database connection failed")
        logging.fatal(e)
        return
    #select * from APPLICANTS
    # for every id:
    # get all 5 tables 
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

# if __name__ == "__main__":
#     main()