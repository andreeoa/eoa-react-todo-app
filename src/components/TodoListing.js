import React from "react";

const TodoListing = ({ todos, completeTodo, deleteTodo }) => {
  return todos.length ? (
    <ul className="collection">
      {todos.map(todo => (
        <li className="collection-item" key={todo.id}>
          <div>
            <label htmlFor={todo.id}>
              <input
                type="checkbox"
                id={todo.id}
                className="filled-in"
                onChange={() => completeTodo(todo.id)}
              />
              <span
                style={{ textDecoration: todo.complete ? "line-through" : "" }}
              >
                {todo.title}
              </span>
            </label>
            <a
              href="!#"
              onClick={() => deleteTodo(todo.id)}
              className="secondary-content"
            >
              X
            </a>
          </div>
        </li>
      ))}
    </ul>
  ) : (
    <p className="center-align">No Todos</p>
  );
};

export default TodoListing;
