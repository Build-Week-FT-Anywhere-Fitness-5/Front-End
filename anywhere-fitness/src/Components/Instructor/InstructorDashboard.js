import React, { useState } from 'react';

import ClassesList from '../Classes/ClassesList';

const InstructorDash = (props) => {
    return (
        <div>
            <h1>Welcome back!</h1>
            <ClassesList {...props} />
        </div>
        
    )
}

export default InstructorDash;