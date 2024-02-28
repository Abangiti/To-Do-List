import React from 'react';

const TodoItem = ({ todo, index, completeTodo, removeTodo }) => {
  return (
    <div className="todo-item">
      <span className={todo.isCompleted ? 'completed' : ''}>{todo.text}</span>
      <div>
        <button onClick={() => completeTodo(index)}>Complete</button>
        <button onClick={() => removeTodo(index)}>Remove</button>
      </div>
    </div>
  );
};

export default TodoItem;