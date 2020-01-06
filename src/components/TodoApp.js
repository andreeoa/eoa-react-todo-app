import React, { Component } from "react";
import TodoListing from "./TodoListing";
import TodoForm from "./TodoForm";

export class TodoApp extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Learn react js.",
        complete: false
      },
      {
        id: 2,
        title: "Learn ionic react.",
        complete: false
      }
    ]
  };

  addTodo = todo => {
    this.setState({
      todos: [...this.state.todos, todo]
    });
  };

  completeTodo = id => {
    const todos = this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.complete = !todo.complete;
      }
      return todo;
    });

    this.setState({ todos });
  };

  deleteTodo = id => {
    const updateTodos = this.state.todos.filter(todo => todo.id !== id);
    this.setState({
      todos: updateTodos
    });
  };
  render() {
    return (
      <div>
        <h3 className="center-align">Todo App</h3>
        <TodoForm addTodo={this.addTodo} />
        <TodoListing
          todos={this.state.todos}
          completeTodo={this.completeTodo}
          deleteTodo={this.deleteTodo}
        />
      </div>
    );
  }
}

export default TodoApp;
