import React, { useState, useEffect } from 'react';
import axios from 'axios';

import SearchBar from './SearchBar';
import ClassList from '../Classes/ClassList';

const Search = () => {
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
        <div className="search-container">
            <SearchBar 
                input={input}
                onChange={updateInput}
            />
            <div className="classes-list">
                <ClassList classList={classList} />
            </div>
        </div>
    )
}

export default Search;