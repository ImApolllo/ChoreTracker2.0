import React, {useState, useContext} from 'react';
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'


import { LoggedUserContext } from '../context/loggedUserContext'

const Dash = (props) => {
    const {loggedUser, setLoggedUser} = useContext(LoggedUserContext)
    const navigate = useNavigate();

    const logout = () =>{
        axios.post('http://localhost:8000/api/logout', {}, {withCredentials:true})
        .then((res) => {
            console.log(res)
            navigate('/')
        })
        .catch((err) => {
            console.log(err);
        })
    }

    return (
        <div>
            <nav>
                <h1>Chores Galore</h1>
                <div className='nav-btn'>
                    {!loggedUser._id ? <button><Link to={'/login'}>Login</Link></button> : <button onClick={logout}>Logout</button>}
                </div>
            </nav>
            <div>
                <button><Link to={'/CreateChore'}>Create A Chore</Link></button>
            </div>
        </div>
)}

export default Dash;