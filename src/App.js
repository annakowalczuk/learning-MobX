import React, { Component } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import { observer } from 'mobx-react';


const App = observer(class App extends Component {
  
  deleteTodo = (id) => this.props.Store.deleteTodo(id);

  addTodo = (content) => this.props.Store.addTodo(content);


  render() {
    const { todos } = this.props.Store;
    return (
      <div className="container">
        <header className="teal-text">
          <h1 className="center">Todo App (again!)</h1>
        </header>
        <TodoList todos={todos} deleteTodo={this.deleteTodo}/>
        <TodoForm addTodo={this.addTodo} />
      </div>
    );
  }
});

export default App;
