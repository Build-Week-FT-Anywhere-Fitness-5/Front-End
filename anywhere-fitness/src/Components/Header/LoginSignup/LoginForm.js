import React from 'react'
import { useParams, useHistory } from 'react-router-dom';

import useForm from '../../../Hooks/useForm';

const initialValues = {
  Username: '',
  Password: '',
}

export default function LoginForm(props) {

  const [myCredentials, handleChanges ] = useForm(initialValues);

  const onSubmit = event => {
        event.preventDefault()
        console.log();
        props.history.push(`/InstructorDash`);
  }

  return (
        <div className='login-form'>
            <form className='login-form-section' onSubmit={onSubmit}>
                <label>Username:
                    <input
                        text=''
                        onChange={handleChanges}
                        value={myCredentials.username}
                        name='username'
                        maxLength='20'
                    />
                </label>
                
                <label>Password:
                    <input
                        text=''
                        onChange={handleChanges}
                        value={myCredentials.password}
                        name='password'
                    />
                </label>

                <div className='loginSubmit'>
                    <button disabled={!myCredentials.username || !myCredentials.password}>Submit</button>
                </div>
            </form>
        </div>
    )
}