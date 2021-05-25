import React from 'react';
import JSONDATA from '../../MockData/mockData.json';
import Styled from '../../Styles/Classlist.styles';

const ClassList = () => {
    return (
        <Styled>
            <div className="container">
            {JSONDATA.map((val, key) => {
                return (
                    <div key={key} className="box-container">
                      <div className="content">  
                        <h2>{val.name}</h2> 
                        <p>Start time: {val.startTime}</p>
                        <p>Location: {val.Location}</p>   
                      </div>  
                    </div>    
                )
            })}
            </div>
        </Styled>
    )
}

export default ClassList;