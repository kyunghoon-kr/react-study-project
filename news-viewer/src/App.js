import React, { useState, useCallback } from 'react';
import NewsList from './components/NewsList';
import Categoires from './components/Categories';

const App = (props) => {
  const [category, setCategory] = useState('all');
  const onSelect = useCallback(category => setCategory(category), []);
  return (
    <>
      <Categoires category={category} onSelect={onSelect}/>
      <NewsList category={category}/>
    </>
  );
};

export default App;