import React, { useState } from 'react';
import axios from 'axios';
import LoginForm from './LoginForm';
import { useHistory } from 'react-router-dom';

const initialFormValues = {
  password: '',
  username: '',
};

export default function Login() {
  const [formValues, setFormValues] = useState(initialFormValues)
  const history = useHistory();
  //Functions Input Interactivity:
  const updateForm = (inputName, inputValue) => {
    setFormValues({...formValues, [inputName]: inputValue })
  }
  const submitForm = () => {
    //PREVENT EMPTY SUBMISSIONS:
    if (!formValues.username  || !formValues.password) return

                                //   axios.post(
                                // 			`${baseURL}/login`,
                                // 			`grant_type=password&username=${formValues.username}&password=${formValues.password}`,
                                // 			{
                                // 				headers: { // btoa is converting our client id/client secret into base64
                                // 					Authorization: `Basic ${btoa('lambda-client:lambda-secret')}`,
                                // 					'Content-Type': 'application/x-www-form-urlencoded',
                                // 				}
                                // 			,}
                                // 		,)
                                // 		.then((res) => {
                                //       setFormValues(initialFormValues);
                                // 			localStorage.setItem('token', res.data.access_token);
                                // 		})
                                //     .then(res => {
                                //       axiosWithAuth().get(`${baseURL}/users/getuserinfo`)
                                //         .then(res => {
                                //           console.log(res)
                                //           //ADDING id_first TO CHECK IF USER SHOULD SEE ONBOARDING -- ONLY ON FIRST SIGN UP
                                //           window.localStorage.setItem('id_first', res.data.instructorid ? res.data.instructorid : res.data.userid)
                                //           window.localStorage.setItem('role', res.data.role)
                                //           formValues.role === 'instructor' ? history.push('/manage') : history.push('/dashboard')
                                //         })
                                //     })
                                // 		.catch((err) => {
                                // 			setFormValues(initialFormValues);
                                // 		});
                                // };
  }

  return (
      <div className='login-sectional'>
        <h3>LOGIN Styling.......</h3>
        <LoginForm
          loginValues={formValues}
          loginUpdate={updateForm}
          loginSubmit={submitForm}
        />
      </div>
  )
}