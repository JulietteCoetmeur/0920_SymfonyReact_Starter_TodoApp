import React, { useState, useEffect } from "react";
import moment from "moment";
import axios from "axios";

const Todo = props => {
  const [todo, setTodo] = useState("");

  const setIsDoneTodo = () => {
    axios
      .patch("/todo/is-done/" + todo.id)
      .then(() => window.location.reload());
  };

  const deleteTodo = () => {
    axios
      .delete("/todo/delete/" + todo.id)
      .then(() => props.history.push("/"));
  };

  const fetchTodo = () => {
    axios
      .get(`/todo/show/${props.match.params.id}`)
      .then(response => setTodo(response.data));
  };

  useEffect(() => {
    fetchTodo();
  }, []);

  return (
    <div className="container mt-5">
      <div className="alert border">
        <p className="text-end">
          <i className="far fa-calendar-check"></i>
          <span className="m-2">
            {moment(todo.todoBefore).format("Do MMMM YYYY - hh:mm")}
          </span>
        </p>
        <h5>{todo.title}</h5>
        <p>{todo.description}</p>
        <div className="text-center">
          <a href={"/todo/edit/" + todo.id} className="mx-2">
            <i className="fas fa-pencil-alt"></i>
          </a>
          <a href="#" className="mx-2" onClick={setIsDoneTodo}>
            {todo.isDone ? (
              <i className="fas fa-check-square text-success"></i>
            ) : (
              <i className="far fa-check-square"></i>
            )}
          </a>
          <a href="/" className="mx-2" onClick={deleteTodo}>
            <i className="fas fa-trash"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Todo;
