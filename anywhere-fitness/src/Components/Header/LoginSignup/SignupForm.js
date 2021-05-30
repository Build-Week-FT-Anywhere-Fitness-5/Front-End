import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';

import useForm from '../../../Hooks/useForm';

const initialValues = {
    newUser: {
        Role: '',
        Username: '',
        Password: '',
    }
}

export default function SignupForm(props) {

    const [myNewCredentials, handleChanges ] = useForm(initialValues);

    const onSubmit = event => {
        event.preventDefault();
        axios.post(`https://anywherefitnessclasses.herokuapp.com/api/register`, myNewCredentials.newUser.Username, myNewCredentials.newUser.Password, myNewCredentials.newUser.Role,
                    {headers: 
                        {Authorization: 'token'}
                    })
            .then((res) => {
                handleChanges(initialValues);
                localStorage.setItem('token');
                myNewCredentials.newUser.role === 'Instructor' ? props.history.push('/InstructorDashOnboarding') : props.history.push('/ClientDashOnboarding')

            })
            .catch((err) => {
                handleChanges(initialValues);
            });
    }

  return (
        <div className='login-form'>
            <form className='login-form-section' onSubmit={onSubmit}>
                <label>Role:
                    <select value={myNewCredentials.newUser.Role} name='role' onChange={handleChanges} placeholder='--select--'>
                        <option value=''>--Select Position--</option>
                        <option value='Instructor'>Instructor</option>
                        <option value='Client'>Client</option>
                    </select>
                </label>

                <label>Username:
                    <input
                        text=''
                        onChange={handleChanges}
                        value={myNewCredentials.newUser.Username}
                        name='username'
                        maxLength='20'
                    />
                </label>
                
                <label>Password:
                    <input
                        text=''
                        onChange={handleChanges}
                        value={myNewCredentials.newUser.Password}
                        name='password'
                    />
                </label>

                <div className='loginSubmit'>
                    <button disabled={!myNewCredentials.newUser.Username || !myNewCredentials.newUser.Password || !myNewCredentials.newUser.Role}>Submit</button>
                </div>
            </form>
        </div>
    )
}