import React, { useState } from 'react';

const LoginModal = props => {
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
                <button onClick={e => handleCancel(e)}>Cancel</button>
            </form>
        </div>
    )
}

export default LoginModal