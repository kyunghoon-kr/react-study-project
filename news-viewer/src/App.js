import React, { useState } from 'react';
import axios from 'axios';
import NewsList from './components/NewsList';

const App = (props) => {
  // const [data, setData] = useState(null);
  // const onClick = () => {
  //   axios.get('https://newsapi.org/v2/top-headlines?country=kr&apiKey=4bfb8b1da90a497b97f5ee81cb843c37').then(resposne => {
  //     setData(resposne.data);
  //   });
  // };
  return (
    <NewsList/>
  );
};

export default App;