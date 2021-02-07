import React, { useState, useEffect } from "react";
import axios from "axios";
import DateTimePicker from "react-datetime-picker";

const TodoForm = props => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [before, setBefore] = useState("");
  const [todo, setTodo] = useState("");

  const fetchTodo = () => {
    axios.get(`/todos/show/${props.match.params.id}`).then(response => {
      if (response.data) {
        setTodo(response.data);
        setTitle(response.data.title);
        setDescription(response.data.description);
        setBefore(response.data.todoBefore);
      }
    });
  };

  useEffect(() => {
    if (props.match.params.id) {
      fetchTodo();
    }
  }, []);

  const onSubmit = () => {
    let data = {
      title: title,
      description: description,
      before: before
    };
    if (!props.match.params.id) {
      axios
        .post("/todos/add", JSON.stringify(data))
        .then(() => props.history.push("/"));
    } else {
      axios
        .post("/todos/edit/" + todo.id, JSON.stringify(data))
        .then(() => props.history.push("/"));
    }
  };

  const deleteTodo = () => {
    axios
      .delete("/todos/delete/" + todo.id)
      .then(() => props.history.push("/"));
  };

  return (
    <div className="container mt-5">
      {todo ? (
        <>
          <div className="text-white text-bold bg-dark one-edge-shadow mb-3">
            <h1 className="text-white">
              <span className="text-orange">➜</span> {`Edit Task #`} {todo.id}{" "}
              {`/>`}
            </h1>
          </div>
        </>
      ) : (
        <div className="text-white text-bold bg-dark one-edge-shadow mb-3">
          <h1 className="text-white">
            <span className="text-orange">➜</span> {`Create Task />`}
          </h1>
        </div>
      )}
      <div className="text-center">
        <div className="mb-3">
          <DateTimePicker
            format="dd-MM-y h:mm a"
            aria-label
            value={todo ? new Date(todo.todoBefore) : new Date()}
            name="before"
            required
            onChange={before => setBefore(before)}
            className="form-control picker"
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            required
            onChange={e => setTitle(e.target.value)}
            value={title}
            placeholder="Title"
          />
        </div>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="description"
            rows="3"
            name="description"
            onChange={e => setDescription(e.target.value)}
            value={description}
            placeholder="La JAVA Paris 10"
          ></textarea>
        </div>

        <div className="col-12 mt-3 text-center">
          {todo ? (
            <button
              className="btn btn-sm btn-main one-edge-shadow"
              onClick={onSubmit}
            >
              <span className="text-orange">➜ </span>Edit
            </button>
          ) : (
            <button
              className="btn btn-sm btn-main one-edge-shadow"
              onClick={onSubmit}
            >
              <span className="text-orange">➜ </span>Create
            </button>
          )}
        </div>
        <div className="text-center mt-5">
          {todo ? (
            <a href="/" onClick={deleteTodo} className="mx-2">
              <i className="fas fa-trash"></i> Delete
            </a>
          ) : (
            ""
          )}
          <a href="/" className="mx-2">
            <i className="fas fa-times"></i> Return
          </a>
        </div>
      </div>
    </div>
  );
};

export default TodoForm;
