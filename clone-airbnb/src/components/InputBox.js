import React from 'react';
import './InputBox.css'
const InputBox = ({align, text, ph}) => {
    return (
        <div className="text-item">
            <p>{text}</p>
            <input className={align} placeholder={ph}/>
        </div>
    );
};

export default InputBox;