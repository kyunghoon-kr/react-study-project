import React from 'react';

const Product = ({product}) => {
    return (
        <div>
            {product.name}
            <img src={product.src} alt="product"/>
        </div>
    );
};

export default Product;