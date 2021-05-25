import React from 'react';

const Nav = props => {
    const { openLogin } = props;

    return (
        <>
            <h2>Nav Bar</h2>
            <p>import Client and Instructor Search Components and render them conditionaly</p>
            <button onClick={openLogin}>Login/ Sign-UP</button>
        </>
    )
}

export default Nav