import React, { useState } from 'react';
import CourseDetail from './CourseDetail';

const Course = () => {
    const [openDetail, setOpenDetail] = useState(false); 
    const handleOpenDetail = e => {
        setOpenDetail(!openDetail);
    }

    return(
        <>
        <div>Course</div>
        <button onClick={e => handleOpenDetail(e)}>Details</button>
        {openDetail && <CourseDetail />}
        </>
    )
}

export default Course