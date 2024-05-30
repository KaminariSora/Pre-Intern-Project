import { useState, useEffect } from "react";
import axios from 'axios';

function TestMongo() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/getUsers')
        .then(response => {
            if (Array.isArray(response.data)) {
                setUsers(response.data);
                console.log("data is ", response.data);
                console.log(users)
            } else {
                console.log("Response is not an array:", response.data);
            }
        })
        .catch(err => console.log(err));
    }, []);

    return (
        <div>
            <div>Hello</div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => (
                                <tr key={index}>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.age}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default TestMongo;
