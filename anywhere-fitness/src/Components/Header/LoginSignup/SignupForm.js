import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';

import useForm from '../../../Hooks/useForm';

const initialValues = {
        Role: '',
        Username: '',
        Password: '',
}

export default function SignupForm(props) {

    const [myNewCredentials, handleChanges ] = useForm(initialValues);

    const onSubmit = event => {
        event.preventDefault();
        const newUser = {
            Role: myNewCredentials.Role,
            Username: myNewCredentials.Username,
            Password: myNewCredentials.Password,
        }
        axios.post(`https://anywherefitnessclasses.herokuapp.com/api/register`, newUser)
            .then((res) => {
                handleChanges(initialValues);
                localStorage.setItem('token', res.data.token );
                myNewCredentials.newUser.Role === 'Instructor' ? props.history.push('/InstructorDashOnboarding') : props.history.push('/ClientDashOnboarding')

            })
            .catch((err) => {
                handleChanges(initialValues);
            });
    }

  return (
        <div className='login-form'>
            <form className='login-form-section' onSubmit={onSubmit}>
                <label>Role:
                    <select value={myNewCredentials.Role} name='role' onChange={handleChanges} placeholder='--select--'>
                        <option value=''>--Select Position--</option>
                        <option value='Instructor'>Instructor</option>
                        <option value='Client'>Client</option>
                    </select>
                </label>

                <label>Username:
                    <input
                        text=''
                        onChange={handleChanges}
                        value={myNewCredentials.Username}
                        name='username'
                        maxLength='20'
                    />
                </label>
                
                <label>Password:
                    <input
                        text=''
                        onChange={handleChanges}
                        value={myNewCredentials.Password}
                        name='password'
                    />
                </label>

                <div className='loginSubmit'>
                    <button disabled={!myNewCredentials.Username || !myNewCredentials.Password || !myNewCredentials.Role}>Submit</button>
                </div>
            </form>
        </div>
    )
}