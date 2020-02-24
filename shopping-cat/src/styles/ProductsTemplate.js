import styled from 'styled-components';

const ProductsTemplate = styled.div
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

export default ProductsTemplate;