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
# def upload_file():
#     if request.method == 'POST':
#         # check if the post request has the file part
        # if 'file' not in request.files:
        #     flash('No file part')
        #     return redirect('/')
#         file = request.files['file']
#         # If the user does not select a file, the browser submits an
#         # empty file without a filename.
#         if file.filename == '':
#             flash('No selected file')
#             return redirect("/")
#         if file and allowed_file(file.filename):
#             file.save(os.path.join(app.config['UPLOAD_FOLDER'], file.filename))
#             return redirect(url_for('download_file', name=file.filename))
#     return '''
#     <!doctype html>
#     <title>Upload new File</title>
#     <h1>Upload new File</h1>
#     <form method=post enctype=multipart/form-data>
#       <input type=file name=file>
#       <input type=submit value=Upload>
#     </form>
#     '''