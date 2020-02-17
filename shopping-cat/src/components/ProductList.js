import React from 'react';
import Product from './Product';
import styled from 'styled-components';

const ProductListTemplate = styled.div
`
    padding: 50px;
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
  
`;
const ProductList = ({products, onSelect, isBasket, onAdd, onSub}) => {
    return (
        <ProductListTemplate>
            {products.map(product => (
                <Product product={product} key={product.id} onSelect={onSelect} isBasket={isBasket} onAdd={onAdd} onSub={onSub}/>
            ))}
        </ProductListTemplate>
    );
};

export default ProductList;