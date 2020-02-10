import React from 'react';
import NewsList from './components/NewsList';
import Categoires from './components/Categories';

const App = (props) => {
  return (
    <>
      <Categoires/>
      <NewsList/>
    </>
  );
};

export default App;