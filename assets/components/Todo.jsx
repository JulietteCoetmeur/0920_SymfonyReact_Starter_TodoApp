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
    axios.delete("/todo/delete/" + todo.id).then(() => props.history.push("/"));
  };

  const fetchTodo = () => {
    axios
      .get(`/todo/data/${props.match.params.id}`)
      .then(response => setTodo(response.data));
  };

  useEffect(() => {
    fetchTodo();
  }, []);

  return (
    <div className="container mt-5">
      <div className="alert bg-light one-edge-shadow" role="alert">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <p className="text-xl">
              <i className="far fa-calendar-check fa-2x text-orange"></i> &nbsp;
              <span className="text-orange text-bold">
                {moment(todo.todoBefore).format("Do MMMM YYYY - hh:mm a")}
              </span>
            </p>
            <h2>
              <a href={"/todo/see/" + todo.id} className="title-link">
                | {todo.title}
              </a>
            </h2>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <h4 className="sub-title">➜ Details :</h4>
            <p>{todo.description}</p>
          </div>
        </div>
        <div className="row mt-4 text-end">
          <ul className="inline-list">
            <li>
              <a href={"/todo/edit/" + todo.id} className="btn btn-sm btn-mint">
                <i className="fas fa-pencil-alt fa-2x"></i>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="btn btn-sm btn-blue"
                onClick={setIsDoneTodo}
              >
                {todo.isDone ? (
                  <i className="fas fa-check-square fa-2x text-blue-dark"></i>
                ) : (
                  <i className="far fa-check-square fa-2x"></i>
                )}
              </a>
            </li>
            <li>
              <a href="/" className="btn btn-sm btn-red" onClick={deleteTodo}>
                <i className="fas fa-trash fa-2x"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
        <div className="text-center">
          <a href="/">
          <i class="fas fa-undo"></i> Return
          </a>
        </div>
    </div>
  );
};

export default Todo;
