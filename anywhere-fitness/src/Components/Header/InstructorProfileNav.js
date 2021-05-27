import React, { useState } from 'react';
import styled from 'styled-components';
import OfferedCourses from '../Courses/OfferedCourses';
import EnrolledCourses from '../Courses/EnrolledCourses';
import FullCourseList from '../Courses/FullCourseList';

const InstructorProfileNav = props => {
    const { loginData } = props;

    const [offered, setOffered] = useState(false);
    const [enrolled, setEnrolled] = useState(false);
    const [full, setFull] = useState(false);

    const handleOpenOffered = e => {
        setOffered(true);
        setEnrolled(false);
        setFull(false);
    }

    const handleOpenEnrolled = e => {
        setOffered(false);
        setEnrolled(true);
        setFull(false);
    }

    const handleOpenFull = e => {
        setOffered(false);
        setEnrolled(false);
        setFull(true);
    }

    const Section = styled.section`
        background-color: pink;
    `;

    return (
        <>
            <Section>
                <div className="instructorProfileImg"></div>
                <h3>{loginData.userName}</h3>
                <button onClick={e=> handleOpenOffered(e)}>My Offered Courses</button>
                <button onClick={e=> handleOpenEnrolled(e)}>My Enrolled Courses</button>
                <button onClick={e=> handleOpenFull(e)}>Full Course Catalog</button>
            </Section>
            {offered && <OfferedCourses />}
            {enrolled && <EnrolledCourses />}
            {full && <FullCourseList />}
        </>
    )
}

export default InstructorProfileNav