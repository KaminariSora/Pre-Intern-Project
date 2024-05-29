import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

function Profile() {
    const navigate = useNavigate()
    const [isLoaded, setIsLoaded] = useState(true);
    const [user, setUser] = useState([]);

    const MySwal = withReactContent(Swal)

    useEffect(() => {
        const token = localStorage.getItem('token')
        const myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + token);

        const requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow"
        };

        fetch("https://www.melivecode.com/api/auth/user", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                if(result.status === 'ok') {
                    setUser(result.user)
                    setIsLoaded(false)
                } else if(result.status === 'forbidden') {
                    MySwal.fire({
                        title: <i>{result.message}</i>,
                        icon: 'error'
                      }).then((value) => {
                          navigate('/')
                      })
                }
                console.log(result)
            })
            .catch((error) => console.error(error));
    }, [])

    const LogOut = () => {
        localStorage.removeItem('token')
        navigate('/')
    }

    if(isLoaded) return (<div>Loading</div>)
        else {
            return (
                <div>
                    <div>{user.fname}</div>
                    <div>{user.lname}</div>
                    <div>{user.email}</div>
                    <img src={user.avatar} alt={user.id}></img>
                    <div><button onClick={LogOut}>Log out</button></div>
                </div>
            )
        }
}

export default Profile