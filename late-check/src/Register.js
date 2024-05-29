import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

function Register() {
    const navigate = useNavigate()
    const [inputs, setInputs] = useState({});

    const MySwal = withReactContent(Swal)

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "fname": inputs.fname,
            "lname": inputs.lname,
            "username": inputs.username,
            "password": inputs.password,
            "email": inputs.email,
            "avatar": inputs.avatar
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch("https://www.melivecode.com/api/users/create", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                console.log(result)
                if(result.status === 'ok') {
                    MySwal.fire({
                        title: <i>{result.message}</i>,
                        icon: 'success'
                      }).then((value) => {
                          navigate('/')
                      })
                } else {
                    MySwal.fire({
                        title: <i>{result.message}</i>,
                        icon: 'error'
                      })
                }
            })
            .catch((error) => console.error(error));
        console.log(inputs);
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>FirstName:
                <input
                    type="text"
                    name="fname"
                    value={inputs.fname || ""}
                    onChange={handleChange}
                />
            </label>
            <label>LastName:
                <input
                    type="text"
                    name="lname"
                    value={inputs.lname || ""}
                    onChange={handleChange}
                />
            </label>
            <label>username:
                <input
                    type="text"
                    name="username"
                    value={inputs.username || ""}
                    onChange={handleChange}
                />
            </label>
            <label>Password:
                <input
                    type="password"
                    name="password"
                    value={inputs.password || ""}
                    onChange={handleChange}
                />
            </label>
            <label>Email:
                <input
                    type="Email"
                    name="email"
                    value={inputs.email || ""}
                    onChange={handleChange}
                />
            </label>
            <label>Avatar:
                <input
                    type="password"
                    name="avatar"
                    value={inputs.avatar || ""}
                    onChange={handleChange}
                />
            </label>
            <input type="submit" />
        </form>
    )
}

export default Register