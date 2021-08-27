from flask import Flask
from run_finetuned import calculate_target

app = Flask(__name__)

def start_server(host_ip, debug_mode):
    app.run(host=host_ip, debug=debug_mode)

@app.route("/api/uploads", methods = ['POST'])
def hello_world():
    return calculate_target('Apples are red.')