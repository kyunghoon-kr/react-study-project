import React from 'react';
import styled from 'styled-components';

const ProductTemplate = styled.div`
    width: 200px;
    display: flex;
    flex-direction: column;
    border: 2px solid;
    margin-top: 10px;
    &:hover {
        border: 3px solid;
        border-color: red;

    }
    img {
        width: 200px;
        height: 100px;
    }
    button {
        border: 1px solid;
        border-color: aquamarine;
        color: aquamarine;
        font-size: 1.4rem;
        &:hover {
            font-weight: bold;
            color: red;
            border: 0px;
        }
    }
    p {
        font-size: 1rem;
    }

`;


const Product = ({product, onSelect, isBasket}) => {
    const imageSrc = require(`../assets/cat${product.id}.jpg`);
    return (
        <ProductTemplate>
            <img src={imageSrc} alt="product"/>
            <p>{product.name}</p>
            <p>{product.age}살입니다.</p>
            {isBasket ? 
            <div>
                <p>{product.amount}마리</p>
                <button>+</button>
                <button>-</button>
            </div>
            : <button onClick={()=>onSelect(product)}>장바구니에 추가</button>}
        </ProductTemplate>
    );
};

export default Product;