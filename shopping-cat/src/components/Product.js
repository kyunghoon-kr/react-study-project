import React from 'react';
import styled from 'styled-components';

const ProductTemplate = styled.div`
    width: 200px;
    display: flex;
    flex-direction: column;
    img {
        width: 200px;
        height: 100px;
    }
    button {
        border: 1px solid;
        border-color: aquamarine;
        color: aquamarine;
    }
`;
const Product = ({product}) => {
    const imageSrc = require(`../assets/cat${product.id}.jpg`);
    return (
        <ProductTemplate>
            <img src={imageSrc} alt="product"/>
            <h2>{product.name}</h2>
            <h5>{product.age}살입니다.</h5>
            <button>장바구니에 추가</button>
        </ProductTemplate>
    );
};

export default Product;