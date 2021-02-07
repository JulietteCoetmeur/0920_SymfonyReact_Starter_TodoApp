import React, { useState, useEffect } from "react";
import axios from "axios";

import Filter from "./uui/Filter";
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
      <Filter todos={fetchTodos} done={fetchDone} all={fetchAll} />
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
