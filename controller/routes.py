from flask import Flask, request
from run_finetuned import calculate_target
from run_finetuned import clean_file

app = Flask(__name__)

def start_server(host_ip, debug_mode):
    app.run(host=host_ip, debug=debug_mode)

@app.route("/api/uploads", methods = ['POST'])
def return_result():
    text_to_send = None
    if request.is_json:
        text_to_send = request.json['text']
    else:
        file_content = request.files['file'].read()  
        text_to_send = file_content.decode("utf-8")

    try:
        return str(calculate_target(text_to_send))
    except:
        clean_file('excerpt')
        return '/:'