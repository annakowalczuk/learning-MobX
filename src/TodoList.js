import React from 'react';

const TodoList = ({todos, deleteTodo}) => {
  const todosColection = todos.length ?
    todos.map(todo => <li key={todo.id} className="collection-item" onClick={() => deleteTodo(todo.id)}>{todo.content}</li>) :
    <li className="collection-item">You have no todos</li>;
    
  return (
    <ul className="collection teal-text text-lighten-1">
      {todosColection}
    </ul>
  );
}

export default TodoList;
