import React, { Component } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {id: 1, content: 'Buy milk',},
        {id: 2, content: 'Clean floor',},
        {id: 3, content: 'Send email'},
      ],
    }
  }

  deleteTodo = (id) => {
    const newState = this.state.todos.filter(todo => todo.id !== id);
    this.setState({
      todos: newState,
    });
  }

  addTodo = (content) => {
    const newTodo = {id: Math.random(), content: content};
    this.setState({todos: [...this.state.todos, newTodo]});
  }

  render() {
    return (
      <div className="container">
        <header className="teal-text">
          <h1 className="center">Todo App (again!)</h1>
        </header>
        <TodoList todos={this.state.todos} deleteTodo={this.deleteTodo}/>
        <TodoForm addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
