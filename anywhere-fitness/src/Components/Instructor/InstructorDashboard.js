import React, { useState } from 'react';

import ClassesList from '../Classes/ClassesList';

const InstructorDash = () => {
    return (
        <div>
            <h1>Welcome back!</h1>
            <ClassesList {...props} myClasses={myClasses}/>
        </div>
        
    )
}

export default InstructorDash;