from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS to allow requests from the frontend

@app.route('/submit', methods=['POST'])
def submit():
    data = request.get_json()
    # Process the data here
    print(data)
    return jsonify({"status": "success"})

if __name__ == '__main__':
    app.run(debug=True)
