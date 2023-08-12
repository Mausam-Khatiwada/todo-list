// TodoForm.js
import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

const TodoForm = ({ onAddTodo }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      const newTodo = {
        id: Date.now(),
        title,
        completed: false,
      };
      onAddTodo(newTodo);
      setTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Add a new task"
        variant="outlined"
        fullWidth
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Button variant="contained" color="primary" type="submit" style={{ marginTop: '10px' }}>
        Add Todo
      </Button>
    </form>
  );
};

export default TodoForm;
