import { useState, useEffect } from "react";
import axios from "axios";
import './ShowFileUpload.css';

function ShowFileUpload() {
    const [rawData, setData] = useState([]);
    const [columns, setColumns] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/getData')
            .then(response => {
                if (Array.isArray(response.data)) {
                    // Sort the data based on the 'time' column
                    const sortedData = response.data.sort((a, b) => {
                        // if (a.time > b.time) {
                        //     return 1;
                        // }
                        // if (a.time < b.time) {
                        //     return -1;
                        // }
                        // return 0;
                    });

                    let lateCount = 0;

                    const parseTime = (timeString) => {
                        const parseHourMinute = (time) => {
                            const [hour, minute] = time.split(':').map(Number);
                            return hour + minute / 60;
                        };

                        const [inTime, outTime] = timeString.split(' ').map(parseHourMinute);
                        return { In: inTime, Out: outTime };
                    };

                    const isLate = (time) => {
                        const { In, Out } = parseTime(time);
                    
                        // Check the first time range: 9:00 - 9:15
                        const lateStart = (In >= 9 && In <= 9.25);
                    
                        // Check the second time range: 18:00 - 18:15
                        const lateEnd = (Out >= 18 && Out <= 18.25);
                    
                        return lateStart || lateEnd;
                    };
                    

                    // Group the data by Name and LastName
                    const groupedData = {};
                    sortedData.forEach(data => {
                        const key = `${data.Name} ${data.LastName}`;
                        // console.log(groupedData)
                        if (!groupedData[key]) {
                            groupedData[key] = {
                                lateCount: 0,
                                entries: []
                            };
                        }
                        groupedData[key].entries.push(data);
                    });

                    // Calculate late count for each person
                    Object.keys(groupedData).forEach(key => {
                        const group = groupedData[key];
                        group.lateCount = group.entries.reduce((count, entry) => {
                            if (isLate(entry.Day1)) {
                                count++;
                            }
                            return count;
                        }, 0);
                    });

                    // Update the original data with the late count
                    const updatedData = sortedData.map(data => {
                        const key = `${data.Name} ${data.LastName}`;
                        const late = isLate(data.Day1);
                        const status = groupedData[key].lateCount === 0 ? 'onTime' : `late (${groupedData[key].lateCount})`;
                        return {
                            ...data,
                            status
                        };
                    });

                    console.log(updatedData);
                    setData(updatedData);


                    setColumns(Object.keys(response.data[0]));

                } else {
                    console.log("Response is not an array:", response.data);
                }
            })
            .catch(err => console.log(err));
    }, []);

    const filteredColumns = columns.filter((column) => column !== '__v' && column !== '_id'); // Filter out the second column
    const columnWidth = filteredColumns.length > 0 ? 100 / (filteredColumns.length + 1) + "%" : "auto"; // +1 for the "No." column

    return (
        <div className="Data-list">
            <table className="Data-table">
                <thead>
                    <tr>
                        <th style={{ width: columnWidth }}>No.</th>
                        {filteredColumns.map((column, index) => (
                            <th key={index} style={{ width: columnWidth }}>{column}</th>
                        ))}
                        <th style={{ width: columnWidth }}>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {rawData.map((data, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            {filteredColumns.map((column, colIndex) => (
                                <td key={colIndex}>{data[column]}</td>
                            ))}
                            <td>{data.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ShowFileUpload;
