import React from 'react';
import ClassItem from './ClassItem';

const ClassList = ({ classList=[] }) => {
    return (
        <div>
            {classList.map((classes) => {
                if(classes) {
                    return (
                        <div key={classes.Id}>
                        <ClassItem 
                            Name={classes.Name} 
                            Type={classes.Type}
                            IntensityLevel={classes.IntensityLevel}
                            Location={classes.Location}
                            StartTime={classes.StartTime}
                            Duration={classes.Duration}
                        />
                     </div>
                    )
                }
                return null;
            })}
        </div>
    )
}

export default ClassList;