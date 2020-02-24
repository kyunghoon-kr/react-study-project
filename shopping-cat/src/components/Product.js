import React from 'react';
import styled from 'styled-components';


// Breakpoing pc: 1024, tablet: 768, mobile: 320

const ProductTemplate = styled.div`
    display: flex;
    flex-direction: column;
    border: 2px solid;
    margin-top: 10px;

    @media only screen and (min-width: 320px) {
        width: 45%;
        margin-left: 10px;
        margin-bottom: 30px;
    }
    @media only screen and (min-width: 768px) {
        width: 25%;
        margin-left: 30px;
    }
    @media only screen and (min-width: 1024px) {
        width: 23%;
        margin-left: 10px;
        margin-bottom: 5px;
    }
    &:hover {
        border: 3px solid;
        border-color: red;
    }
`;

const Button = styled.button`
    border: 1px solid;
    border-color: aquamarine;
    color: aquamarine;
    &:hover {
        font-weight: bold;
        color: red;
        border: 0px;
    }
    @media only screen and (min-width: 320px) {
        font-size: 1.0rem;
    }
    @media only screen and (min-width: 768px) {
        font-size: 1.4rem;    
    }
    @media only screen and (min-width: 1024px) {
        font-size: 1.6rem;
    }
`;

const Text = styled.p`
    @media only screen and (min-width: 320px) {
        font-size: 0.7rem;
    }
    @media only screen and (min-width: 768px) {
        font-size: 1.0rem;    
    }
    @media only screen and (min-width: 1024px) {
        font-size: 1.1rem;
    }
`;

const CatImage = styled.img`
    @media only screen and (min-width: 320px) {
        height: 100px;
    }
    @media only screen and (min-width: 1024px) {
        height: 200px;
    }
`;


const Product = ({product, onAdd, onInsert, onRemove}) => {
    const imageSrc = require(`../assets/cat${product.id}.jpg`);
    return (
        <ProductTemplate>
            <CatImage src={imageSrc} alt="product"/>
            <Text>{product.name}</Text>
            <Text>{product.age}살입니다.</Text>
            {onInsert ? // 장바구니인 경우
            <>
                <Text>{product.amount}마리</Text>
                <Button onClick={()=>onInsert(product)}>+</Button>
                <Button onClick={()=>onRemove(product)}>-</Button>
            </>
            : <Button onClick={()=> onAdd(product)}>장바구니에 추가</Button>}
        </ProductTemplate>
    );
};

export default Product;