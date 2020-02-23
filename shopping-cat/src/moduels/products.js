import { createAction, handleAction } from "redux-actions";
import dataSet from "./dataset";

// 장바구니 담기 액션 타입 정의
const ADD = 'products/ADD';

export const add = product => ({type: ADD, product})


const initialState = {
    products: dataSet()
};
// 리듀서 함수 생성

// redux-action 라이브러리 없이 작성할 때
function products(state = initialState, action) {
    switch (action.type) {
        case ADD:
            return {
                products: state.products.map(product =>
                    action.product.id === product.id ? {...product, isSelected: true, amount: action.product.amount+1}
                : product)
            }
        default:
            return state;
    }
}

// handleAction을 적용
// const products = handleAction(
//     {
//         [ADD]: (state, action) => ({
//             // ...state, isSelected: true, amount: state.amount+1
//         }),
//     },
//     initialState,
// )

export default products;