import React, { useState } from 'react';

import ClassesList from '../Classes/ClassesList';

const InstructorDash = (props) => {
    const routeToAddClassForm = (e, ClassId) => {
        e.preventDefault();
        props.history.push(`/addClassForm`);
    }
    return (
        <div>
            <button onClick={routeToAddClassForm} className="md-button shop-button">
                Add New Class
            </button>
            <ClassesList {...props} />
        </div>
        
    )
}

export default InstructorDash;