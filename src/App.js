import React from "react";
import TodoApp from "./components/TodoApp";

function App() {
  return (
    <div>
      <nav>
        <div className="nav-wrapper">
          <a href="!#" className="brand-logo" style={{ marginLeft: "20px" }}>
            EOA App
          </a>
          <ul
            id="nav-mobile"
            className="right hide-on-med-and-down"
            style={{ marginRight: "20px" }}
          >
            <li>
              <a href="!#">Item 1</a>
            </li>
            <li>
              <a href="!#">Item 2</a>
            </li>
            <li>
              <a href="!#">Item 3</a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container">
        <TodoApp />
      </div>
    </div>
  );
}

export default App;
