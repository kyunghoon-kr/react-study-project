import React from 'react';

const Product = ({product}) => {
    console.dir(product);
    const imageSrc = require(`../assets/cat${product.id}.jpg`);
    return (
        <div>
            {product.name}
            <img src={imageSrc} alt="product"/>
        </div>
    );
};

export default Product;