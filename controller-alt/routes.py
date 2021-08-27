from flask import Flask
from run_finetuned import calculate_target

app = Flask(__name__)

def start_server(host_ip, debug_mode):
    """
    This function starts flask server to run the back-end
    """
    app.run(host=host_ip, debug=debug_mode)

@app.route("/")
def hello_world():
    """
    This function if for test purpose only to create a route to test a basic form
    """
    return calculate_target('Apples are red.')