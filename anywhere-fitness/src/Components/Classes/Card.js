import React, { useEffect, useState } from 'react';
import axios from 'axios';


function Card (props) {
  const [myClass, setMyClass] = useState({});
  const { ClassId } = props.match.params;

  useEffect(()=>{
    axios.get(`https://anywherefitnessclasses.herokuapp.com/api/classes/ClassId/${ClassId}`)
      .then(res=>{
        setMyClass(res.data);
      });
  }, []);

  if (!myClass) {
    return <h2>Loading Class Data...</h2>;
  }

  const handleUpdateClick = ()=> {
    props.history.push(`....../update-item/${ClassId}`);
  }

  const handleDeleteClick = ()=> {
    axios.delete(`https://anywherefitnessclasses.herokuapp.com/api/classes/ClassId/${ClassId}`)
      .then(res=> {
        props.setMyClass(res.data);
        props.history.push('....../item-list');
      })
      .catch(err=>{
        console.log(err);
        alert(`Class Not Deleted!`);
      })
  }

  return (
    <div className="card-wrapper">
      <div className="card-header">
        <div className="item-title-wrapper">
           <h2>{myClass.Name}</h2>
           <h3>{myClass.Type}</h3>
        </div>
        <h4>{myClass.StartTime}</h4>
        <h4>{myClass.Duration}</h4>
        <h4>{myClass.IntensityLevel}</h4>
        <h4>{myClass.Location}</h4>
        <h4>{myClass.Attendees}</h4>
        <h4>{myClass.MaxClassSize}</h4>
      </div>
     
      <button onClick={handleUpdateClick} className="md-button">Edit</button>
      <button onClick={handleDeleteClick} className="md-button">Delete</button>
    </div>
  );
}

export default Card;