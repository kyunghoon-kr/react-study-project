import React from 'react';
import Product from '../components/Product';
import SubmitButton from '../components/SubmitButton';
import ProductsTemplate from '../styles/ProductsTemplate'
import { insert, remove, submit } from '../moduels/products';
import { connect } from 'react-redux';


const BasketConatiner = ({baskets, insert, remove, submit}) => {
    return (
        <>
            <ProductsTemplate>
                {baskets.map(basket => (
                    <Product product={basket} key={basket.id} onInsert={insert} onRemove={remove}/>
                ))}
            </ProductsTemplate>
            <SubmitButton onSubmit={submit}/>
        </>
    );
};

export default connect(
    state => ({
        baskets: state.products.baskets,
    }),
    {
        insert,
        remove,
        submit
    }
)(BasketConatiner);