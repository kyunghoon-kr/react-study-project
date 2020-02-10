import React from 'react';
import NewsPage from './components/NewsPage';
import { Route } from 'react-router-dom';
const App = (props) => {
  return <Route path="/:category?" component={NewsPage} />
};

export default App;