import React, { useState } from 'react';

const LoginModal = () => {
    const [instructorChecked, setInstructorChecked] = useState(false);
    const handleInstructorCheck = e => {
        setInstructorChecked(!instructorChecked);
    }

    return (
        <div>
            <form>
                <label>
                    <input type="checkbox" name="" id="" checked={instructorChecked} onChange={e => handleInstructorCheck(e)}/>
                    Check if you are an instructor
                </label><br />
                <label>
                    User Name
                    <input type="text" name="" id="" placeholder="Type in your user name"/>
                </label><br />
                <label>
                    Password
                    <input type="password" name="" id="" placeholder="Type in your user name"/>
                </label>
                <br />
                {instructorChecked && <label>
                    Instructor Authorization
                    <input type="password" name="" id="" placeholder="Type in your user name"/>
                </label>}
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default LoginModal