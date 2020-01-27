import React from 'react';
import './Hotel.css'
import SuperHost from './SuperHost';
const Hotel = ({hotel}) => {
    return (
        <div className="hotel">
            <img className="hotel-img" src= {hotel.src} alt="country"/>
            <SuperHost isSuper={hotel.isSuper} where={hotel.where} score={hotel.score}/>
            <p>{hotel.name}</p>
        </div>
    );
};

export default Hotel;