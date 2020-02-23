import React from 'react';
import styled from 'styled-components';


// Breakpoing pc: 1024, tablet: 768, mobile: 320

const ProductTemplate = styled.div`
    display: flex;
    flex-direction: column;
    border: 2px solid;
    margin-top: 10px;

    @media only screen and (min-width: 320px) {
        width: 45%;
        margin-left: 10px;
        margin-bottom: 30px;
        button {
            font-size: 1.0rem;
        }
        p {
            font-size: 0.7rem;
        }
        img {
            height: 150px;
        }
    }
    @media only screen and (min-width: 768px) {
        width: 25%;
        margin-left: 30px;
        p {
            font-size: 1.0rem;
        }
        button {
            font-size: 1.4rem;
        }
        
    }
    @media only screen and (min-width: 1024px) {
        width: 23%;
        margin-left: 10px;
        margin-bottom: 5px;
        p {
            font-size: 1.1rem;
        }
        button {
            font-size: 1.6rem;
        }
        img {
            height: 200px;
        }
    }

    &:hover {
        border: 3px solid;
        border-color: red;
    }
    button {
        border: 1px solid;
        border-color: aquamarine;
        color: aquamarine;
        &:hover {
            font-weight: bold;
            color: red;
            border: 0px;
        }
    }
`;



const Product = ({product, onAdd, onInsert, onRemove}) => {
    const imageSrc = require(`../assets/cat${product.id}.jpg`);
    return (
        <ProductTemplate>
            <img src={imageSrc} alt="product"/>
            <p>{product.name}</p>
            <p>{product.age}살입니다.</p>
            {onInsert ? // 장바구니인 경우
            <div>
                <p>{product.amount}마리</p>
                <button onClick={()=>onInsert(product)}>+</button>
                <button onClick={()=>onRemove(product)}>-</button>
            </div>
            : <button onClick={()=> onAdd(product)}>장바구니에 추가</button>}
        </ProductTemplate>
    );
};

export default Product;