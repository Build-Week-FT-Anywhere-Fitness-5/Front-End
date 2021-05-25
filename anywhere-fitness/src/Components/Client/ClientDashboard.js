import React from 'react';
import SearchBar from './SearchBar';
import ClassList from './ClassList';

const ClientDashboard = () => {

    return (
        <div>
            <nav>
                <SearchBar  />
            </nav>
            <ClassList />
        </div>
    )
}

export default ClientDashboard;