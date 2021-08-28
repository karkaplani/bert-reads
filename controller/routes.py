from flask import Flask, request
from run_finetuned import calculate_target

app = Flask(__name__)

def start_server(host_ip, debug_mode):
    app.run(host=host_ip, debug=debug_mode)

@app.route("/api/uploads", methods = ['POST'])
def hello_world():
    file_content = request.files['file'].read()
    file_content = file_content.decode("utf-8")
    return str(calculate_target(file_content))