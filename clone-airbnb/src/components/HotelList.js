import React from 'react';
import Hotel from './Hotel';
import './FlexContainer.css'

const HotelList = ({hotels}) => {
    return (
        <div className="flex-container">
            {hotels.map(hotel => (
                <Hotel hotel={hotel} key={hotel.id}/>
            ))}
        </div>
    );
};

export default HotelList;