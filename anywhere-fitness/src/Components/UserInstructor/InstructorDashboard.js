import React from 'react';

import UserHeader from '../Header/UserHeader';
import ClassesList from '../UserToolClasses/ClassesList';

const InstructorDash = (props) => {
    const routeToAddClassForm = (e, ClassId) => {
        e.preventDefault();
        props.history.push(`/addClassForm`);
    }
    return (
        <div>
            <UserHeader />
            <button onClick={routeToAddClassForm} className="md-button shop-button">
                Add New Class
            </button>
            <ClassesList {...props} />
        </div>
    )
}

export default InstructorDash;