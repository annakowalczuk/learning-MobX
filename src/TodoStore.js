import { observable, decorate } from  'mobx';

class TodoStore {
  todos = [
    {id: 1, content: 'Buy sweets',},
    {id: 2, content: 'Clean floor',},
    {id: 3, content: 'Send email'},
  ];
  filter = "";

  addTodo(content) {
    const newTodo = {id: Math.random(), content: content};
    this.todos = [...this.todos, newTodo];
  }

  deleteTodo = (id) => {
    const newState = this.todos.filter(todo => todo.id !== id);
    this.todos = newState;
  }
}

decorate(TodoStore, {
  todos: observable,
  filter: observable,    
});

var Store = window.Store = new TodoStore();

export default Store;
