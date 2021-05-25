import React, { useState } from 'react';

const LoginModal = () => {
    {/* Instructor Authorization Handler and State */}
    const [instructorChecked, setInstructorChecked] = useState(false);
    const handleInstructorCheck = e => {
        setInstructorChecked(!instructorChecked);
    }

    {/* Form Payload */}
    const [loginData, setLoginData] = useState({
        userName: '',
        password: '',
        instructorAuthorization: ''
    });

    const handleLoginInput = e => {
        setLoginData({
            ... loginData, [e.target.name]:e.target.value
        })
    }

    const handleSubmitLogin = e => {
        e.preventDefault();
        console.log(loginData);
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
            </form>
        </div>
    )
}

export default LoginModal