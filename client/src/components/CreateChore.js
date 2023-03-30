import React, {useState} from 'react';
import axios from 'axios';

import { useNavigate } from 'react-router-dom'

const CreateChore = (props) => {
    const [errors, setErrors] = useState([]);
    const [choreName, setChoreName] = useState("");
    const [choreDesc, setChoreDesc] = useState("");
    const [choreLoc, setChoreLoc] = useState("");
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Create Chore')
        axios.post('http://localhost:8000/api/createChore', {
            choreName,
            choreDesc,
            choreLoc
        }, {withCredentials: true})
            .then ( res => {
                console.log(res.data);
                //Navigate back to the restaurant review section or main not sure which yet
                navigate('/Dash');
            } )
            .catch( (res) => {
                console.log(res);
                setErrors(res);
            })
    }

    return (
        <div>
            <form className="mx-auto col-10 col-md-8 col-lg-6" onSubmit={handleSubmit}>
                <div className='form-outline'>
                    {errors.message ?<span className='danger'>{errors.message.choreName}</span> :null}
                    <label>Chore Name:</label>
                    <input className="form-control" type='text' onChange={e=>setChoreName(e.target.value)}/>
                </div>
                <div className='form-outline'>
                    {errors.message ?<span className='danger'>{errors.message.choreDesc}</span> :null}
                    <label>Chore Desc:</label>
                    <textarea className="form-control" type='text' onChange={e=>setChoreDesc(e.target.value)}/>
                </div>
                <div className='form-outline'>
                    {errors.message ?<span className='danger'>{errors.message.choreLoc}</span> :null}
                    <label>Chore Location:</label>
                    <input className="form-control" type='text' onChange={e=>setChoreLoc(e.target.value)}/>
                </div>
                <input className='submit-button' type='submit' value='Create your Chore'/>
            </form>
        </div>
)}

export default CreateChore;