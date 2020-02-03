import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Typography from '@material-ui/core/Typography';
import './styles.css';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const App = () => {
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <Typography component="h1" variant="h2">
        Todos
      </Typography>

      <TodoForm
        saveTodo={(todoText) => {
          const trimmedText = todoText.trim();

          if (trimmedText.length > 0) {
            setTodos([...todos, trimmedText]);
          }
        }}
      />
      <TodoList todos={todos}/>
    </div>

    
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
