import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";

import useForm from '../../Hooks/useForm';

const initialValues = {
    ClassId: '',
    Name: '',
    Type: '',
    StartTime: '',
    Duration: '',
    IntensityLevel: '',
    Location: '',
    Attendees: '',
    MaxClassSize: '',
};

const UpdateForm = props => {
    const [ myClass, handleChanges ] = useForm( initialValues);
  
    const { ClassId } = useParams();
    const { push } = useHistory();

    useEffect(()=>{
        axios.get(`https://anywherefitnessclasses.herokuapp.com/api/classes/ClassId/${ClassId}`)
            .then(res=>{
                setMyClass(res.data);
        })
            .catch(err=>{
                console.log(err);
                alert(`Class Not Recieved From API!`);
        })
    }, []);

    const handleSubmit = e => {
        e.preventDefault();
        console.log(myClass);
        axios.put(`https://anywherefitnessclasses.herokuapp.com/api/classes/ClassId/${ClassId}`, myClass)
            .then(res=>{
                props.setMyClass(res.data);
                push(`/item-list/${ClassId}`);
        })
            .catch(err=>{
                console.log(err);
                alert(`Class Not Updated!`);
        })
    };

    return (
        <div>
            <h2>Update Item</h2>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input
                    text=''
                    name="name"
                    value={myClass.name}
                    onChange={handleChanges}
                />
                <label>Type:</label>
                <input             
                    text=''
                    name="type"
                    value={myClass.type}
                    onChange={handleChanges}
                />
                <label>Start Time:</label>
                <input              
                    text=''
                    name="starttime"
                    value={myClass.start}
                    onChange={handleChanges}
                />
                <label>Duration:</label>
                <input              
                    text=''
                    name="duration"
                    value={myClass.duration}
                    onChange={handleChanges}
                />
                <label>Intensity Level:</label>
                <input              
                    text=''
                    name="intensity"
                    value={myClass.intensity}
                    onChange={handleChanges}
                />
                <label>Location:</label>
                <input              
                    text=''
                    name="location"
                    value={myClass.location}
                    onChange={handleChanges}
                />
                {//Should Currently Registered be a add-class-form-input-value, or just requested and displayed??...
                }
                <label>Currently Registered:</label>
                <input              
                    text=''
                    name="registered"
                    value={myClass.registered}
                    onChange={handleChanges}
                />
                <label>Max Class Size:</label>
                <input              
                    text=''
                    name="maxclass"
                    value={myClass.maxclass}
                    onChange={handleChanges}
                />
                <button className="update-form-button">Update</button>
            </form>
        </div>
    );
};

export default UpdateForm;