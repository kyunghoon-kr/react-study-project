import React from 'react';
import Product from './Product';
import styled from 'styled-components';

const ProductListTemplate = styled.div
`
    padding: 50px;
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
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
            {onSubmit ? <button onClick={onSubmit}>제출하기d</button> : <></>}
        </ProductListTemplate>
    );
};

export default ProductList;