import pandas as pd
from datetime import datetime

# csv = 'statusModule/Data/TestData.csv'

# df = pd.read_csv(csv)
# print(df)
# new_value = ['Testing1', 'Testing2', 'row3', 'test', 'row5']
# df['new'] = new_value
# df.to_csv(csv, index=False)
# print(df)

Morning_cutoff = datetime.strptime('9:15', '%H:%M')
Afternoon_cutoff = datetime.strptime('12:15', '%H:%M')

def check_time():
    time = '11:44'
    early_access = '11:45'
    time_obj = datetime.strptime(time, '%H:%M')
    early_obj = datetime.strptime(early_access, '%H:%M')
    if Morning_cutoff >= time_obj:
        return f"{time} is okay for morning"
    elif early_obj <= time_obj <= Afternoon_cutoff:
        return f"{time} is okay for afternoon"
    else:
        return f"you are late"

def read_file():
    df = pd.read_csv('statusModule/Data/AttendanceRecord-รวม260567.csv', header=[0,1])
    return df.head()

if __name__ == '__main__':
    print(check_time())
    # print(read_file())