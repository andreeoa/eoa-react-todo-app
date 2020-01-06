import React, { Component } from "react";

export class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = { title: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = e => {
    this.setState({ title: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (!this.state.title.length) return;

    const todo = {
      id: Date.now(),
      title: this.state.title,
      completed: false
    };
    this.props.addTodo(todo);
    this.setState({ title: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Todo"
          value={this.state.title}
          onChange={this.handleChange}
        />
        <button type="submit" className="waves-effect waves-light btn">
          Add
        </button>
      </form>
    );
  }
}

export default TodoForm;
