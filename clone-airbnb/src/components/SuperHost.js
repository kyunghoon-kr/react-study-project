import React from 'react';
import './SuperHost.css';
const SuperHost = ({isSuper, where, score}) => {
    if(isSuper){
        return (
            <div className="centry-container">
                <a className="label">슈퍼 호스트</a>
                <div>{where}</div>
                <div>★{score}</div>
            </div>
        );
    }
    else return (
        <div className="centry-container">
            <a/>
            <div>{where}</div>
            <div>★{score}</div>
        </div>
    );

};

export default SuperHost;