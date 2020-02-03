import React from 'react';
import ReactDOM from 'react-dom';
import Typography from '@material-ui/core/Typography';
import './styles.css';
import TodoForm from './TodoForm';

const App = () => {
  return (
    <div className="App">
      <Typography component="h1" variant="h2">
        Todos
      </Typography>

      <TodoForm saveTodo={console.warn}/>
    </div>

    
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
