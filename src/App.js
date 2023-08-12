// App.js
import React from 'react';
import { Container, Typography } from '@mui/material';
import TodoList from './components/TodoList';
import './App.css';

const App = () => {
  return (
    <Container maxWidth="md" className="container">

      <TodoList className="todo-list" />
    </Container>
  );
};

export default App;
