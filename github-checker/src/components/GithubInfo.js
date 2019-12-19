import React from 'react';
import './GithubInfo.scss';
const GithubInfo = ({id, date}) => {
    return (
        <div className="GithubInfo">
            <p className="parsing-info">{id}의 {date} 커밋 내용입니다.</p>
        </div>
    );
};

export default GithubInfo;