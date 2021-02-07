import React, { useState, useEffect } from "react";
import axios from "axios";

import TodoAlert from "./TodoAlert";

const Home = () => {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchTodos = async () => {
    const result = await axios(`/todo/`);
    setTodos(result.data);
    setIsLoading(false);
  };

  const fetchDone = async () => {
    const result = await axios(`/todo/done`);
    setTodos(result.data);
    setIsLoading(false);
  };

  const fetchAll = async () => {
    const result = await axios(`/todo/all`);
    setTodos(result.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <section id="home">
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
                <a className="nav-link" href="#" onClick={fetchTodos}>
                  <span className="text-orange">➜</span> TodoList
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={fetchDone}>
                  <span className="text-orange">➜</span> DoneList
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={fetchAll}>
                  <span className="text-orange">➜</span> All
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container mt-5">
        {isLoading ? (
          "Wait for a second..."
        ) : todos.length > 0 ? (
          <section id="totos_list">
            <div className="row p-2">
              {todos.map(todo => {
                return <TodoAlert key={todo.id} todo={todo} />;
              })}
            </div>
          </section>
        ) : (
          <div className="text-white text-bold bg-dark p-2 one-edge-shadow"><span className="text-orange">➜</span> Everything is update, nothing to do !</div>
        )}
      </div>
      <div className="space150"></div>
    </section>
  );
};

export default Home;
