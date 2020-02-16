import React from 'react';
import Product from './Product';

const ProductList = ({products}) => {
    return (
        <div>
            {products.map(product => (
                <Product product={product} id={product.id}/>
            ))}
        </div>
    );
};

export default ProductList;