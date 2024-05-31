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
                        if (a.time > b.time) {
                            return 1;
                        }
                        if (a.time < b.time) {
                            return -1;
                        }
                        return 0;
                    });

                    // Mark records as 'late' if time > 9:15
                    const updatedData = sortedData.map(data => ({
                        ...data,
                        status: data.time > '9:15' ? 'late' : ''
                    }));

                    setData(updatedData);

                    if (response.data.length > 0) {
                        setColumns(Object.keys(response.data[0]));
                    }
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
