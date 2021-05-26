import React, { useState } from 'react';
import Course from './Course';
import CreateCourse from './CreateCourse';

const OfferedCourses = () => {
    const [openCreate, setOpenCreate] = useState(false);
    const handleOpenCreate = e => {
        setOpenCreate(!openCreate);
    }

    return(        
        <>
            <div>Offered Courses</div>
            <Course />
            <button onClick={e=> handleOpenCreate(e)}>Create New Course</button>
            {openCreate && <CreateCourse />}
        </>
    )
}

export default OfferedCourses;