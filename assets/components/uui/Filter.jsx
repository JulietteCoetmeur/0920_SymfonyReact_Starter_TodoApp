import React from "react";

const Filter = ({todos, done, all}) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="/">
          <h1>{`<TodoApp />`}</h1>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={todos}>
                <span className="text-orange">➜</span> TodoList
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={done}>
                <span className="text-orange">➜</span> DoneList
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={all}>
                <span className="text-orange">➜</span> All
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Filter;
