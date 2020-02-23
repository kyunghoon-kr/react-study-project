import React from 'react';
import Product from '../components/Product';
import SubmitButton from '../components/SubmitButton';
import styled from 'styled-components';
import { insert, remove, submit } from '../moduels/products';
import { connect } from 'react-redux';
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

const BasketConatiner = ({baskets, insert, remove, submit}) => {
    return (
        <>
            <ProductListTemplate>
                {baskets.map(basket => (
                    <Product product={basket} key={basket.id} onInsert={insert} onRemove={remove}/>
                ))}
            </ProductListTemplate>
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