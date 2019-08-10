import React, {Component} from 'react';

class TodoForm extends Component {
  state = {
    value: '',
  }
  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.value) {
      this.props.addTodo(this.state.value);
    };
    this.setState({value: ''});
  }
  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <input className="text-teal" placeholder="Add todo" type="text" onChange={this.handleChange} value={this.state.value}/>
        <button className="btn waves-effect waves-light teal" type="submit">Submit</button>
      </form>
    );
  }
}

export default TodoForm;
