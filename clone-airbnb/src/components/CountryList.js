import React from 'react';
import Country from './Country';
import './FlexContainer.css'

const CountryList = ({countries}) => {
    return (
        <div className="flex-container">
            {countries.map(country => (
                <Country country={country} key={country.id}/>
            ))}
        </div>
    );
};

export default CountryList;