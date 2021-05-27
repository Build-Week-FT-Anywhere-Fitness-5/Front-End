import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Search from '../SearchBar/Search'
import ClassList from '../Classes/ClassList';

const ClientDashboard = () => {

    return (
        <div className='search-field'>
            <Search />
            
        </div>
    )
}

export default ClientDashboard;