import os
from pdf2json import parse
from flask import Flask, Response, flash, redirect, request, url_for
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
            # filename = "A" + str(uuid.uuid1()) + "." + \
            #     filename.rsplit('.', 1)[1].lower()
            file.save(os.path.join(filename))
        return Response(parse(filename))     

