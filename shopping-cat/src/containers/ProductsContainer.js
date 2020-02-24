import React from 'react';
import Product from '../components/Product';
import { add, insert } from '../moduels/products';
import { connect } from 'react-redux';
import ProductsTemplate from '../styles/ProductsTemplate';
// Breakpoint pc: 1024, tablet: 768, mobile: 320

const ProductsContainer = ({products, add, insert}) => {
    return (
        <ProductsTemplate>
            {products.map(product => (
                <Product product={product} key={product.id} onAdd={()=> {add(product); insert(product);}}/>
            ))}
        </ProductsTemplate>
    );
};

export default connect(
    state => ({
        products: state.products.products
    }),
    {
        add,
        insert
    }
)(ProductsContainer);