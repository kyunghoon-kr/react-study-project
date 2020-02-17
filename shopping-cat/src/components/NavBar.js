import React from 'react';
import styled from 'styled-components';

const NavBarTemplate = styled.div`
    background: beige;
    display: flex;
    justify-content: center;
    align-items: center; 
    height: 80px;
`;

const Button = styled.button`
    background: blue;
    color: white;
    font-size: 1.5rem;
    & + & {
        margin-left: 1rem;
    }
`;
const NavBar = (props) => {
    return (
        <NavBarTemplate>
            <Button>제품목록</Button>
            <Button>장바구니</Button>
        </NavBarTemplate>
    );
};

export default NavBar;