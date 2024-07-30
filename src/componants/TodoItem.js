import React, { useState } from 'react';

const TodoItem = ({ todo, toggleTodo, deleteTodo, editTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleEdit = () => {
    if (newText.trim()) {
      editTodo(todo.id, newText);
      setIsEditing(false);
    }
  };

  return (
    <li>
      <input 
        type="checkbox" 
        checked={todo.isCompleted} 
        onChange={() => toggleTodo(todo.id)} 
      />
      {isEditing ? (
        <>
          <input 
            type="text" 
            value={newText} 
            onChange={(e) => setNewText(e.target.value)} 
          />
          <button onClick={handleEdit}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </>
      ) : (
        <>
          <span style={{ textDecoration: todo.isCompleted ? 'line-through' : 'none' }}>
            {todo.text}
          </span>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </>
      )}
    </li>
  );
};

export default TodoItem;
