import React from 'react';
import InstructorProfileNav from '../Header/InstructorProfileNav';
import Nav from '../Header/Nav';

import ClassesList from '../Classes/ClassesList';

const InstructorDash = (props) => {
    const routeToAddClassForm = (e, ClassId) => {
        e.preventDefault();
        props.history.push(`/addClassForm`);
    }
    return (
        <div>
             <nav>
                <Nav />
            </nav>
            <h2>Welcome back!</h2>
            <InstructorProfileNav />
            <button onClick={routeToAddClassForm} className="md-button shop-button">
                Add New Class
            </button>
            <ClassesList {...props} />
        </div>
        
    )
}

export default InstructorDash;