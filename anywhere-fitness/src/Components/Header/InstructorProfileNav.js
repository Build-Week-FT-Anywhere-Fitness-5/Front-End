import React, { useState } from 'react';
import styled from 'styled-components';
import OfferedCourses from '../Courses/OfferedCourses';
import EnrolledCourses from '../Courses/EnrolledCourses';
import FullCourseList from '../Courses/FullCourseList';

const InstructorProfileNav = props => {
    const { loginData } = props;

    const [offered, setOffered] = useState(true);
    const [enrolled, setEnrolled] = useState(false);
    const [full, setFull] = useState(false);

    const handleOffered = () => {
        setOffered(true);
        setEnrolled(false);
        setFull(false);
    }
    const handleEnrolled = () => {
        setOffered(false);
        setEnrolled(true);
        setFull(false);
    }
    const handleFull = () => {
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
            <button onCLick={handleOffered}>My Offered Courses</button>
            <button onCLick={handleEnrolled}>My Enrolled Courses</button>
            <button onCLick={handleFull}>Full Course Catalog</button>
        </Section>
        {offered && <OfferedCourses />}
        {enrolled && <EnrolledCourses />}
        {full && <FullCourseList />}
        </>
    )
}

export default InstructorProfileNav