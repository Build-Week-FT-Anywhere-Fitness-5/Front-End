import React from 'react'
import { useParams, useHistory } from 'react-router-dom';

import axios from 'axios';

import useForm from '../../../Hooks/useForm';

const initialValues = {
    Role: '',
    Username: '',
    Password: '',
}

export default function LoginForm(props) {

  const [myCredentials, handleChanges ] = useForm(initialValues);

    const onSubmit = event => {
        event.preventDefault();
        axios.post(`https://anywherefitnessclasses.herokuapp.com/api/login`, myCredentials.Username, myCredentials.Password,
                    {headers: 
                        {Authorization: 'token'}
                    })
            .then((res) => {
                handleChanges(initialValues);
                localStorage.setItem('token');
                myCredentials.role === 'Instructor' ? props.history.push('/InstructorDash') : props.history.push('/ClientDash')

            })
            .catch((err) => {
                handleChanges(initialValues);
            });
    }

  return (
        <div className='login-form'>
            <form className='login-form-section'>
                <label>Role:
                    <select value={myCredentials.role} name='role' onChange={handleChanges} placeholder='--select--'>
                        <option value=''>--Select Position--</option>
                        <option value='Instructor'>Instructor</option>
                        <option value='Client'>Client</option>
                    </select>
                </label>

                <label>Username:
                    <input
                        text=''
                        onChange={handleChanges}
                        value={myCredentials.Username}
                        name='username'
                        maxLength='20'
                    />
                </label>
                
                <label>Password:
                    <input
                        text=''
                        onChange={handleChanges}
                        value={myCredentials.Password}
                        name='password'
                    />
                </label>

                <div className='loginSubmit'>
                    <button onClick={onSubmit} disabled={!myCredentials.Username || !myCredentials.Password || !myCredentials.Role}>Submit</button>
                </div>
            </form>
        </div>
    )
}