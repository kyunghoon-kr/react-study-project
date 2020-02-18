import React from 'react';
import styled from 'styled-components';
const SubmitButtonTemplate = styled.div`
    background: beige;
    display: flex;
    justify-content: center;
    align-items: flex-center; 
    height: 80px;
    button {
        font-size: 2rem;
        background: blue;
        color: white;
        &:hover {
            color: red;
        }
    }
`;
const SubmitButton = ({onSubmit}) => {
    return (
        <SubmitButtonTemplate>
            <button onClick={onSubmit}>제출하기</button>
        </SubmitButtonTemplate>
    );
};

export default SubmitButton;