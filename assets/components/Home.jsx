
// In this component we use Hook
// When the page is call, useEffect call fetchTodo method to get Todos[] to do
// When data is loaded, we map on todos to display one todo at the time by the component TodoAlert
// TodoAlert receive props object todo
// In filter component I pass some props then It can call the methods : 
// fetchDone fetchAll & fetchTodo to refresh the contains of my state todos (L:19)
// There is some displaying condition as you can see, like for example we display 
// "Everything is update, nothing to do !" if todos state is empty L:54 
// Use the console on your browser to see console.log of the page

import React, { useState, useEffect } from "react";
import axios from "axios";

import Filter from "./uui/Filter";
import TodoAlert from "./TodoAlert";

const Home = () => {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchTodos = async () => {
    const result = await axios(`/todo/`);
    console.log('Home.jsx : L24 Result data from axios.get on url /todo/', result.data)
    setTodos(result.data);
    setIsLoading(false);
  };

  const fetchDone = async () => {
    const result = await axios(`/todo/done`);
    console.log('Home.jsx : L31 Result data from axios.get on url /todo/done', result.data)
    setTodos(result.data);
    setIsLoading(false);
  };

  const fetchAll = async () => {
    const result = await axios(`/todo/all`);
    console.log('Home.jsx : L38 Result data from axios.get on url /todo/all', result.data)
    setTodos(result.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchTodos();
    console.log('Home.jsx : L45 => useEffect has been used')
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
