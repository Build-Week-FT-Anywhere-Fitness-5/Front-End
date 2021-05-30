import React from 'react';

//import { axiosWithAuth } from '../Utils/axiosWithAuth';

function ClassesList(props) {
    function handleClick(e, myClass) {
      e.preventDefault();
      props.history.push(`/class-list/${myClass.ClassId}`);
    }
    
    return (
        <div className="class-list-wrapper">
            <h2>Class Table</h2>
            {props.myClasses.map(myClass => (
                <div
                    onClick={e => handleClick(e, myClass)}
                    className="class-card"
                    key={myClass.ClassId}
                >
                    <div className='card-text'>
                            <h3>{myClass.Name}</h3>
                            <h4>{myClass.Location}</h4>
                            <h4>{myClass.StartTime}</h4>
                    </div>
                </div>
            ))}
        </div>
    );
  }
  
  export default ClassesList;