import React, { useState } from "react";
import moment from "moment";
import axios from "axios";

const TodoAlert = ({ todo }) => {
  const setIsDoneTodo = () => {
    axios
      .patch("/todo/is-done/" + todo.id)
      .then(() => window.location.reload());
  };

  return (
    <div className="alert bg-light one-edge-shadow" role="alert">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <p className="text-xl">
            <i className="far fa-calendar-check fa-2x text-orange"></i> &nbsp;
            <span className="text-orange text-bold">{moment(todo.todoBefore).format("Do MMMM YYYY - hh:mm a")}</span>
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

      <div className="float-end">
        <ul className="nav">
          <li className="nav-item">
            <a href={"/todo/edit/" + todo.id} className="btn btn-sm btn-mint">
              <i className="fas fa-pencil-alt fa-2x"></i>
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="btn btn-sm btn-blue" onClick={setIsDoneTodo}>
              {todo.isDone ? (
                <i className="fas fa-check-square fa-2x text-blue-dark"></i>
              ) : (
                <i className="far fa-check-square fa-2x"></i>
              )}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TodoAlert;
