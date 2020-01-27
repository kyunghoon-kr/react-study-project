import React from 'react';
import './Country.css'
const Country = ({country}) => {
    return (
        <div className="country">
            <img className="country-img" src= {country.src} alt="country"/>
            <p>{country.name}</p>
        </div>
    );
};

export default Country;