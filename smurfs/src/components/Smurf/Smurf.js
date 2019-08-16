import React from 'react';

function Smurf({ smurf }) {
    const { name, age, height } = smurf;

    return (
        <div className="smurf">
            <h3>Name: {name}</h3>
            <p>Age: {age}</p>
            <p>Height: {height}</p>
        </div>
    );
}

export default Smurf;
