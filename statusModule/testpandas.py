import pandas as pd
from datetime import datetime
import re

# csv = 'statusModule/Data/TestData.csv'

# df = pd.read_csv(csv)
# print(df)
# new_value = ['Testing1', 'Testing2', 'row3', 'test', 'row5','row6']
# df['new'] = new_value
# df.to_csv(csv, index=False)
# print(df)

Morning_cutoff = datetime.strptime('9:15', '%H:%M')
Afternoon_cutoff = datetime.strptime('12:15', '%H:%M')

def check_time(all_times):
    results = []
    status = []
    late_Count = 0
    
    for time in all_times:
        if not time:  # Handle empty lists
            continue
        
        time_obj = datetime.strptime(time[0], '%H:%M')  # Take the first time if multiple
        if Morning_cutoff < time_obj:  # Count as late
            results.append(f"{time[0]} is late")
            status.append("Not OK")
            late_Count += 1
        else:
            results.append(f"{time[0]} is okay")
            status.append("OK")
    
    return results, status, late_Count

def read_file():
    df = pd.read_csv('statusModule/Data/AttendanceRecord-รวม260567.csv', header=[0, 1])
    data = df.iloc[:, 22:]  # Adjust column range as needed
    # print(data)
    late_counts_per_row = []  # To store late counts for each column

    for index, row in data.iterrows():
        all_times = []
        for cell in row:
            times = re.findall(r'\b\d{2}:\d{2}\b', str(cell))
            if times:
                all_times.append(times) 
        results, status, late_Count = check_time(all_times)  # Get late count for this row
        late_counts_per_row.append(late_Count)

        # Optional: Print results for each column
        print(f"Results for {index}:")
        print("\n".join(results))
        print(f"Late Count for {index}: {late_Count}\n")

    # Save the modified DataFrame back to CSV with a new name
    df['Late Count'] = late_counts_per_row
    df.to_csv('statusModule/Data/Record.csv', index=False)

    return results, status, late_counts_per_row

if __name__ == '__main__':  
    result_df, status, late_Count = read_file()
    output_df = pd.DataFrame({'Result': result_df, 'Status': status})
    
    print(output_df)
    print(f"Total late counts: {late_Count}")