import React, { useState } from 'react';
import styled from 'styled-components';

const LoginModal = props => {
    const { loginData, setLoginData, handleLoginModal } = props
    {/* Instructor Authorization Handler and State */}
    const [instructorChecked, setInstructorChecked] = useState(false);

    const Background = styled.div`
        position: fixed;
        z-index: 100;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: auto;
        background-color: rgb(0,0,0);
        background-color: rgba(0,0,0,0.4);
    `;

    const ModalForm = styled.form`
        background-color: #fefefe;
        margin: 15% auto;
        padding: 20px;
        border: 1px solid #888;
        width: 80%;
    `;


    const handleInstructorCheck = e => {
        setInstructorChecked(!instructorChecked);
    }

    {/* Form Payload */}
    const handleLoginInput = e => {
        setLoginData({
            ... loginData, [e.target.name]:e.target.value
        })
    }

    const handleSubmitLogin = e => {
        e.preventDefault();
        handleLoginModal(e);
        setLoginData({
            userName: '',
            password: '',
            instructorAuthorization: ''
        });
        console.log(loginData);
    }

    return (
        <Background>
            <ModalForm onSubmit={handleSubmitLogin}>
                <label>
                    <input type="checkbox" name="" id="" checked={instructorChecked} onChange={e => handleInstructorCheck(e)}/>
                    **Check if you are an instructor
                </label><br />
                <label>
                    User Name
                    <input type="text" name="userName" id="userName" value={loginData.userName}  placeholder="Type in your user name" onChange={handleLoginInput}/>
                </label><br />
                <label>
                    Password
                    <input type="password" name="password" id="password" placeholder="Type in your password" value={loginData.password} onChange={handleLoginInput}/>
                </label>
                <br />
                {instructorChecked && <label>
                    Instructor Authorization
                    <input type="password" name="instructorAuthorization" id="instructorAuthorization" placeholder="Type in your instructor authorization code" value={loginData.instructorAuthorization} onChange={handleLoginInput}/>
                </label>}
                <br />
                <button type="submit">Submit</button>
                <button onClick={e => handleLoginModal(e)}>Cancel</button>
            </ModalForm>
        </Background>
    )
}

export default LoginModal