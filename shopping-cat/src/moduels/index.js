// 루트 리듀서에서 comebine한다.
// 이 프로젝트는 리듀서 함수가 하나이기 때문에 굳이 이렇게 묶을 필요는 없으나 확장성을 고려하여 index.js에 함께 작성

import { combineReducers } from "redux";
import products from './products'
const rootReducer = combineReducers({
    products,
});

export default rootReducer;