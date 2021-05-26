import React from 'react';

const ClassList = ( { classList=[] } ) => {
    return (
        <div>
            {classList.map((classes) => {
                if (classes) {
                    return (
                        <div key={classes.Id}>
                            <h2>{classes.Name}</h2>
                            <h3>{classes.Location}</h3>
                            <p>{classes.StartTime}</p>
                        </div>
                    )
                }
                return null;
            }) }
        </div>
    )
}

export default ClassList;