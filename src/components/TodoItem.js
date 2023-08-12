// TodoItem.js
import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { Checkbox, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const TodoItem = ({ title, completed, onDelete, onToggle }) => {
  const [hovered, setHovered] = useState(false);

  const slideAnimation = useSpring({
    from: { transform: 'translateX(-100%)' },
    to: { transform: 'translateX(0)' },
    config: { tension: 300, friction: 20 },
  });

  const hoverAnimation = useSpring({
    transform: `scale(${hovered ? 1.05 : 1})`,
  });

  return (
    <animated.div style={slideAnimation}>
      <ListItem
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        sx={{
          borderRadius: 10,
          boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
          margin: '10px 0',
          transition: 'background-color 0.3s, box-shadow 0.3s',
          backgroundColor: hovered ? '#f5f5f5' : 'white',
          '&:hover': {
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            backgroundColor: '#f5f5f5',
          },
        }}
      >
        <Checkbox
          checked={completed}
          onChange={onToggle}
          color="primary"
          sx={{
            '& .MuiSvgIcon-root': {
              fontSize: '1.5rem',
            },
          }}
        />
        <ListItemText primary={title} sx={{ flex: 1 }} />
        <ListItemSecondaryAction>
          <animated.div style={hoverAnimation}>
            <IconButton
              edge="end"
              aria-label="delete"
              onClick={onDelete}
              sx={{
                '& .MuiSvgIcon-root': {
                  fontSize: '1.5rem',
                },
              }}
            >
              <DeleteIcon />
            </IconButton>
          </animated.div>
        </ListItemSecondaryAction>
      </ListItem>
    </animated.div>
  );
};

export default TodoItem;
