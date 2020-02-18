import React from 'react';
import Product from './Product';
import styled from 'styled-components';

// Breakpoint pc: 1024, tablet: 768, mobile: 320

const ProductListTemplate = styled.div
`
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;

    @media only screen and (min-width: 320px) {
        padding: 10px;
    }
    @media only screen and (min-width: 768px) {
        padding: 30px;
    }
    @media only screen and (min-width: 1024px) {
        padding: 10px;
    }

    button {
        align-items: flex-end;
        justify-content: center;
        height: 50px;
    }
`;
const ProductList = ({products, onSelect, isBasket, onAdd, onSub, onSubmit}) => {
    return (
        <ProductListTemplate>
            {products.map(product => (
                <Product product={product} key={product.id} onSelect={onSelect} isBasket={isBasket} onAdd={onAdd} onSub={onSub}/>
            ))}
            {onSubmit ? <button onClick={onSubmit}>제출하기</button> : <></>}
        </ProductListTemplate>
    );
};

export default ProductList;