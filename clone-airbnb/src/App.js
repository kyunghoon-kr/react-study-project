import React, { useState } from 'react';
import sydney from './components/source/sydney.jpg';
import barca from './components/source/barca.jpg';
import buenos from './components/source/buenos.jpg';
import capetown from './components/source/capetown.jpg';
import los from './components/source/los.jpg';
import paris from './components/source/paris.jpg';
import seoul from './components/source/seoul.jpg';
import newyork from './components/source/newyork.jpg';
import CountryList from './components/CountryList';
import HotelList from './components/HotelList';
import Form from './components/Form';
const App = (props) => {
  const [countries, setCountries] = useState([
    {
      id: 0,
      src: paris,
      name: "파리"
    },
    {
      id: 1,
      src: newyork,
      name: "뉴욕"
    },
    {
      id: 2,
      src: sydney,
      name: "시드니"
    },

    {
      id: 3,
      src: capetown,
      name: "케이프타운"
    },
    {
      id: 4,
      src: buenos,
      name: "부에노스 아이레스"
    },
    {
      id: 5,
      src: seoul,
      name: "서울"
    },
    {
      id: 6,
      src: barca,
      name: "바르셀로나"
    },
    {
      id: 7,
      src: los,
      name: "로스앤젤레스"
    }
  ]);
  const [hotels, setHotels] = useState([
    {
      id: 0,
      src: paris,
      name: "I SETTE CONI - TRULLO EDERA",
      where: "오스투니",
      score: 4.93,
      isSuper: true
    },
    {
      id: 1,
      src: newyork,
      name: "The World Famous Seashell House",
      where: "무헤레스 섬",
      score: 4.75,
      isSuper: false
    },
    {
      id: 2,
      src: sydney,
      name: "HIDEOUT BALI - Eco Bamboo Home",
      where: "Bali - Selat",
      score: 4.81,
      isSuper : true
    },

    {
      id: 3,
      src: capetown,
      name: "Romantic Cabana with view",
      where: "아르메니아",
      score: 4.93,
      isSuper : true
    },
    {
      id: 4,
      src: buenos,
      name: "The Josua Tree House",
      where: "조슈아 트리",
      score: 4.87,
      isSuper : true
    }
  ]);

  return (
    <div>
      <Form/>
      <h3>에어비엔비와 함께 전 세계를 여행해 보세요.</h3>
      <CountryList countries={countries}/>
      <h3>최고 평점을 받은 숙소</h3>
      <h4>최고의 평점을 받은 전세계의 숙소를 둘러보세요.</h4>
      <HotelList hotels={hotels}/>
    </div>
  );
};

export default App;