import React, { useContext, useState } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'
import { LoggedUserContext } from '../context/loggedUserContext'
import { useNavigate } from 'react-router-dom'



const Landing = (props) => {
    const {loggedUser, setLoggedUser} = useContext(LoggedUserContext);
    const [logEmail, setLogEmail] = useState("");
    const [logPassword, setLogPassword] = useState("");
    const [errors, setErrors] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmEmail, setConfirmEmail] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [createdAt] = useState(Date());
    const [updatedAt] = useState(Date());
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault()
        console.log('Login')
        axios.post('http://localhost:8000/api/login',{ 
            email: logEmail,
            password: logPassword
        }, { withCredentials: true })
            .then ( res => {
                console.log('user', res.data.user);
                setLoggedUser(res.data.user)//sets the user globally so other sites will have information of your account 
                navigate("/Dash");//sends you back to the restaurant site
            })
            .catch( err => {console.log(err.response.data); setErrors(err.response.data.errors)} )
    }

    const handleRegister = (e) => {
        e.preventDefault()
        console.log('Register')
        axios.post('http://localhost:8000/api/register', {
            firstName, 
            lastName, 
            email, 
            confirmEmail, 
            password, 
            confirmPassword, 
            createdAt, 
            updatedAt
        }, { withCredentials: true })
            .then ( res => {
                console.log("logged user" + res.data.user)
                setLoggedUser(res.data.user)
                navigate('/Dash')
            } )
            .catch( res => setErrors(res.response.data.errors) )
    }

    return (
        <>
            <nav>
                <h1 className='header-title'>Chores Galore</h1>
            </nav>
            <div className='main-page'>
                <div className='left-side'>
                    <div className='form'>
                        <h2>Register!</h2>
                        <form className="mx-auto col-10 col-md-8 col-lg-6" onSubmit={handleRegister}>
                            <div className="form-group ">
                                {/* first name */}

                                {
                                    errors.firstName?
                                    <p className='text-danger'>{errors.firstName.message}</p>
                                    :
                                    null
                                }
                                <br/>
                                <label>First Name:</label>
                                <input className="form-control" type='text' onChange={e=>setFirstName(e.target.value)}/>

                            </div>

                            <div className="form-group">
                                {/* last name */}
                                {
                                    errors.lastName?
                                    <p className='text-danger'>{errors.lastName.message}</p>
                                    :
                                    null
                                }
                                <br/>
                                <label>Last Name:</label>
                                <input className="form-control" type='text' onChange={e=>setLastName(e.target.value)}/>

                            </div>
                            <div className="form-group">
                                {/* email */}
                                {
                                    errors.email?
                                    <p className='text-danger'>{errors.email.message}</p>
                                    :
                                    null
                                }
                                {errors.email && <span className="text-danger">{errors.email.message}</span>}
                                <br/>
                                <label>Email:</label>
                                <input className="form-control" type='text' onChange={e=>setEmail(e.target.value)}/>
                            </div>


                            <div className="form-group">
                                {/* confirm email */}
                                
                                {/* {errors.email && <span className="text-danger">{errors.email.message}</span>} */}
                                <br/>
                                <label> Confirm Email:</label>
                                <input  className="form-control" type='text' onChange={e=>setConfirmEmail(e.target.value)}/>
                            </div>

                            <div className="form-group">
                                {/* password */}
                                {
                                    errors.password?
                                    <p className='text-danger'>{errors.password.message}</p>
                                    :
                                    null
                                }
                                <br/>
                                <label>Password:</label>
                                <input className="form-control" type='password' onChange={e=>setPassword(e.target.value)}/>
                                
                            </div>
                            <div className="form-group">
                                {/* confirm email */}
                                {/* {errors.password && <span className="text-danger">{errors.password.message}</span>} */}
                                <br/>
                                <label>Confirm Password:</label>
                                <input className="form-control" type='password' onChange={e=>setConfirmPassword(e.target.value)}/>

                            </div>
                                <input type='submit' value='Register!'/>
                        </form>
                    </div>
                </div>
                <div className='right-side'>
                    <div className='form'>
                        <h2>Login!</h2>
                        <form className="mx-auto col-10 col-md-8 col-lg-6" onSubmit = {handleLogin}>
                            <div className="form-group ">
                                {/* email */}
                                <label >Email:</label>
                                <input className="form-control" type='text' onChange={ e => setLogEmail(e.target.value) }/>
                                
                            </div>
                            <div className="form-group ">
                                {/* password */}
                                <label>Password:</label>
                                <input className="form-control" type='password' onChange={ e => setLogPassword(e.target.value) } />
                            </div>
                            <input className= 'glow-on-hover' type='submit' value='Login'/>
                        </form>
                    </div>
                </div>
            </div>
        </>
)}

export default Landing; 