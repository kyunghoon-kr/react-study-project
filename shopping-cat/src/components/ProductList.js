import React from 'react';
import Product from './Product';

const ProductList = ({products}) => {
    return (
        <div>
            {products.map(product => (
                <Product product={product} key={product.id}/>
            ))}
        </div>
    );
};

export default ProductList;