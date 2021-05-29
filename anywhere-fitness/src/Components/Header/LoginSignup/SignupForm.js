import React from 'react'
import { useParams, useHistory } from 'react-router-dom';

import useForm from '../../../Hooks/useForm';

const initialValues = {
    Role: '',
    Username: '',
    Password: '',
}

export default function SignupForm(props) {

  const [myNewCredentials, handleChanges ] = useForm(initialValues);

  const onSubmit = event => {
        event.preventDefault()
        console.log();
        props.history.push(`/InstructorDash`);
  }

  return (
        <div className='login-form'>
            <form className='login-form-section' onSubmit={onSubmit}>
                <label>Role:
                    <select value={myNewCredentials.role} name='role' onChange={handleChanges} placeholder='--select--'>
                        <option value=''>--Select Position--</option>
                        <option value='Instructor'>Instructor</option>
                        <option value='Client'>Client</option>
                    </select>
                </label>

                <label>Username:
                    <input
                        text=''
                        onChange={handleChanges}
                        value={myNewCredentials.username}
                        name='username'
                        maxLength='20'
                    />
                </label>
                
                <label>Password:
                    <input
                        text=''
                        onChange={handleChanges}
                        value={myNewCredentials.password}
                        name='password'
                    />
                </label>

                <div className='loginSubmit'>
                    <button disabled={!myNewCredentials.username || !myNewCredentials.password || !myNewCredentials.role}>Submit</button>
                </div>
            </form>
        </div>
    )
}