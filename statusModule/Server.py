from flask import Flask, request
from flask_cors import CORS
import pandas as pd
from datetime import datetime
import re
import os
from pathlib import Path

app = Flask(__name__)
CORS(app)

Morning_cutoff = datetime.strptime('9:15', '%H:%M')
Afternoon_cutoff = datetime.strptime('12:15', '%H:%M')

def check_time(all_times):
    results = []
    status = []
    late_Count = 0
    
    for time in all_times:
        # ถ้าไม่มี time
        if not time: 
            continue
        # วัดเวลาตัวแรก
        time_obj = datetime.strptime(time[0], '%H:%M')
        if Morning_cutoff < time_obj:
            results.append(f"{time[0]} is late")
            status.append("Not OK")
            late_Count += 1
        else:
            results.append(f"{time[0]} is okay")
            status.append("OK")
    
    return results, status, late_Count

@app.route('/upload', methods=['POST'])
def upload_csv():
    if 'csvFile' not in request.files:
        return "No file uploaded", 400
    
    file = request.files['csvFile']
    
    try:
        df = pd.read_csv(file)
        
        # ป้องกันค่า NaN 
        df.fillna('', inplace=True)
        
        late_counts_per_row = []
        
        # ดึงข้อมูลเฉพาะหลัก
        attendance_data = df.iloc[:, 22:]
        
        for index, row in attendance_data.iterrows():
            all_times = []
            for cell in row:
                times = re.findall(r'\b\d{2}:\d{2}\b', str(cell))
                if times:
                    all_times.append(times) 
            _, _, late_Count = check_time(all_times)
            late_counts_per_row.append(late_Count)

        df['Late Count'] = late_counts_per_row
        
        downloads_path = str(Path.home() / "Downloads")
        save_path = os.path.join(downloads_path, 'This is your new file.csv')
        
        df.to_csv(save_path, index=False)

        return "File processed and saved successfully!", 200
    
    except Exception as e:
        return str(e), 500

if __name__ == '__main__':
    app.run(debug=True)
