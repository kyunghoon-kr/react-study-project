import React, {useState, useCallback} from 'react';
import GithubInfo from './GithubInfo';
import './LogInInsert.scss';

const LogInInsert = ( {dateLoad} ) => {
    const [id, setId] = useState('');
    const [date, setDate] = useState('');
    const [isSubmmited, setSubmitted] = useState(false);
    const onChange = (e) => {
        setId(e.target.value);
    }
    const onSubmit = useCallback(e => {
        setDate(dateLoad);
        setSubmitted(true);
        e.preventDefault();
    }, 
    [dateLoad]
    );

    if(isSubmmited) {
        return <GithubInfo id={id} date={date}/>
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input 
                    placeholder="Github id를 입력하세요"
                    value={id}
                    onChange={onChange}/>
            </form>
        </div>
    );
    
};

export default LogInInsert;