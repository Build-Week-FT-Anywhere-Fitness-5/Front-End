import React, { useEffect, useState } from 'react';
import axios from 'axios';

import ClassList from '../Classes/ClassList';
import SearchBar from '../SearchBar/SearchBar';
import Styled from '../../Styles/ClientStyles';

const ClientDashboard = () => {
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
            <nav>
                <h6>AnywhereFitness</h6>
                <SearchBar 
                input={input}
                onChange={updateInput}
            />
                <div className="logout">
                    <button>logout</button>
                </div>
            </nav>
            <div className="classes">
                <ClassList classList={classList} />
            </div>    
        </Styled>
    )
}

export default ClientDashboard;