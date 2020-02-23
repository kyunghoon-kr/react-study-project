import { createAction, handleAction } from "redux-actions";
import dataSet from "./dataset";

// 장바구니 액션 타입 정의
const ADD = 'products/ADD';

export const add = createAction(ADD);

const initialState = dataSet(); // 데이터 셋 불러오기

// 리듀서 함수 생성

// redux-action 라이브러리 없이 작성할 때
// function products(state = initialState, action) {
//     switch (action.type) {
//         case ADD:
//             return {
//                 ...state, isSelected: true, amount: state.amount+1
//             }
//         default:
//             return state;
//     }
// }

// handleAction을 적용
const products = handleAction(
    {
        [ADD]: (state, action) => ({
            ...state, isSelected: true, amount: state.amount+1
        })
    },
    initialState,
)

export default products;