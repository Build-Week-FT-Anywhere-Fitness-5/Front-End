import React, { useState } from 'react';
import styled from 'styled-components';

const LoginModal = props => {
    const ButtonStyled = styled.button`
        background-color: #d3d6c8;
        border: 1px solid #d3d6c8;

        &:hover {
            background-color: #201f29;
            border: 1px solid red;
            letter-spacing: 0.09rem;
            transition: all 0.3s ease-in-out;
        }
    `;

    const { loginData, setLoginData, handleLoginModal } = props
    {/* Instructor Authorization Handler and State */}
    const [instructorChecked, setInstructorChecked] = useState(false);


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

    const handleCancel = e => {
        handleLoginModal(e);
        setLoginData({
            userName: '',
            password: '',
            instructorAuthorization: ''
        });
    }

    return (
        <div>
            <form onSubmit={handleSubmitLogin}>
                <label className="instructor-checkbox">
                    <span>Are you an instructor?</span>
                    <input type="checkbox" name="" id="" checked={instructorChecked} onChange={e => handleInstructorCheck(e)}/>
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
                <ButtonStyled onClick={e => handleCancel(e)}>Cancel</ButtonStyled>
            </form>
        </div>
    )
}

export default LoginModal