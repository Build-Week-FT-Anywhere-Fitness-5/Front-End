import React from 'react';
import InstructorProfileNav from '../Header/InstructorProfileNav';
import Nav from '../Header/Nav';

const InstructorDash = () => {
    return (
        <div>
            <nav>
                <Nav />
            </nav>
            <h1>Welcome back!</h1>
            <InstructorProfileNav />
        </div>
        
    )
}

export default InstructorDash;