import React from 'react';
import styled from 'styled-components';
const SubmitButtonTemplate = styled.div`
    background: beige;
    display: flex;
    justify-content: center;
    align-items: flex-center; 
    height: 80px;
`;

const Button = styled.button`
    font-size: 2rem;
    background: blue;
    color: white;
    &:hover {
        color: red;
    }
`;

const SubmitButton = ({onSubmit}) => {
    return (
        <SubmitButtonTemplate>
            <Button onClick={onSubmit}>제출하기</Button>
        </SubmitButtonTemplate>
    );
};

export default SubmitButton;