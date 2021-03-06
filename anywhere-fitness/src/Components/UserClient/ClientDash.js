import React, { useEffect, useState } from 'react';
import axios from 'axios';

import UserHeader from '../Header/UserHeader'
import ClassesList from '../UserToolClasses/ClassesList';
import SearchBar from '../UserToolSearchBar/SearchBar';
import Search from '../UserToolSearchBar/Search';

import Styled from '../../Styles/ClientStyles';

const ClientDashboard = (props) => {
    const [ input, setInput ] = useState('');
    const [ classListDefault, setClassListDefault ] = useState(); 
    const [ classList, setClassList ] = useState([]);

    useEffect(() => {
        axios.get("https://anywherefitnessclasses.herokuapp.com/api/classes")
            .then(res => {
                setClassList(res.data)
                setClassListDefault(res.data)
            })
            .catch(err => {
                console.log("Error: ", err);
            })
    }, []);

    const updateInput = async (input) => {
        const filteredClasses = classListDefault.filter(classes => {
            return classes.Name.toLowerCase().includes(input.toLowerCase())
        })
        setInput(input);
        setClassList(filteredClasses);
    }
  
    return (
        <Styled className='client-container'>
            <UserHeader />
            <SearchBar 
                input={input}
                onChange={updateInput}
            />

            <div className="classes">
                <ClassesList {...props} />
            </div>    
        </Styled>
    )
}

export default ClientDashboard;