import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

const BasketNumber = styled.button
`
    font-size: 1.2rem;
    background-color: black;
    color: white;
    border-radius: 100%;
`;
const NavBar = ({baskets}) => {
    return (
        <NavBarTemplate>
            <Link to="/">
                <Button>제품목록</Button>
            </Link>
            <Link to="/baskets">
                <Button>장바구니</Button>
                {baskets.length !== 0 ? <BasketNumber>{baskets.length}</BasketNumber> : <></>}
            </Link>
        </NavBarTemplate>
    );
};

export default NavBar;