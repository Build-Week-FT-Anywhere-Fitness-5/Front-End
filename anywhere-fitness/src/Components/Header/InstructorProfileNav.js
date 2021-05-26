import React from 'react';
import styled from 'styled-components';

const InstructorProfileNav = props => {
    const { loginData } = props;

    const Section = styled.section`
        background-color: pink;
    `;

    return (
        <Section>
            <div className="instructorProfileImg"></div>
            <h3>{loginData.userName}</h3>
        </Section>
    )
}

export default InstructorProfileNav