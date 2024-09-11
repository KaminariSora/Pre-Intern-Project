from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd

app = Flask(__name__)
CORS(app)

@app.route('/upload', methods=['POST'])
def upload_csv():
    if 'csvFile' not in request.files:
        return jsonify({"error": "No file uploaded"}), 400
    
    file = request.files['csvFile']
    
    try:
        df = pd.read_csv(file)
        headers = list(df.columns)
        data = df.to_dict(orient='records')
        print("using jsonify")
        print(data)
        return jsonify({"data": data})
    except Exception as e:
        return jsonify({"error": str(e)}), 500  # Return error as JSON

if __name__ == '__main__':
    app.run(debug=True)