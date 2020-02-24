// import { createAction, handleAction } from "redux-actions";
import dataSet from "./dataset";

// 장바구니 담기 액션 타입 정의
const ADD = 'products/ADD';
const INSERT = 'products/INSERT';
const REMOVE = 'products/REMOVE';
const SUBMIT = 'products/SUBMIT';

export const add = product => ({type: ADD, product});
export const insert = product => ({type: INSERT, product});
export const remove = product => ({type: REMOVE, product});
export const submit = () => ({type:SUBMIT})

const initialState = {
    products: dataSet(),
    baskets: []
};

// 리듀서 함수 생성

// redux-action 라이브러리 없이 작성할 때
function products(state = initialState, action) {
    switch (action.type) {
        case ADD:
            if(!action.product.isSelected)
                return {
                    products: state.products.map(product =>
                        action.product.id === product.id ? {...product, isSelected: true}
                    : product),
                    baskets: state.baskets.concat({...action.product, isSelected: true, amount: action.product.amount+1})
                }
            else return state

        case INSERT: // 주문 개수 추가
            return {
                products: state.products.map(product =>
                    action.product.id === product.id ? {...product, amount: action.product.amount+1}
                : product),
                baskets: state.baskets.map(basket =>
                    action.product.id === basket.id ? {...basket, amount: action.product.amount+1}
                : basket)
            }
        case REMOVE:
            if(action.product.amount > 1) // 주문 개수를 줄임
                return {
                    products: state.products.map(product =>
                        action.product.id === product.id ? {...product, amount: action.product.amount-1}
                    : product),
                    baskets: state.baskets.map(basket =>
                        action.product.id === basket.id ? {...basket, amount: action.product.amount-1}
                    : basket)
                }
            else { // 장바구니에서 삭제
                return {
                    baskets: state.baskets.filter(basket => basket.id !== action.product.id),
                    products: state.products.map(product =>
                        action.product.id === product.id ? {...product, amount: 0, isSelected: false}
                    : product)
                }
            }
        case SUBMIT: // 제출하기
            alert("구매 완료");
            return {
                products: initialState.products,
                baskets: initialState.baskets
            }
        
        
        default:
            return state;
    }
}


export default products;