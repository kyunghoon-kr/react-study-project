import React from 'react';
import InputBox from './InputBox';
import './Form.css';
const Form = (props) => {
    return (
        <div>
            <div className="form">
                <h1>에어비앤비에서 숙소, 호텔 등을 예약하세요</h1>
                <div class="flex-container">
                    <InputBox align="fill" text="목적지" ph="모든 위치"/>
                    <InputBox text="체크인" ph="년/월/일"/>
                    <InputBox text="체크아웃" ph="년/월/일"/>
                    <InputBox text="어른" ph="성인 1명"/>
                    <InputBox text="어린이" ph="어린이 0명"/>
                    <button className="fill" onClick={() => alert("버튼")}>검색</button>
                </div>
            </div>
            <div className="form">
                <div>
                    <div className="text-bottom">
                        <p className="border-line">서울에서 숙소 호스팅을 통해 월간 최대 <br/>##$_0D$##$1,038의 수익을 올려보세요.</p>
                        <p>호스팅 하기 ></p>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Form;
