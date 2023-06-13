import axios from "axios";
import React, { useState } from "react";

const UpdateTodo = ({ _id, handleClose, handleUpdate }) => {
  const [data, setData] = useState({ title: "", description: "" });

  const handleChange = (e) => {
    console.log("e", e.target.name);
    setData((data) => ({ ...data, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // console.log();
    axios
      .put(`http://localhost:8000/api/todo/${_id}`, data)
      .then((response) => {
        setData({ title: "", description: "" });
        console.log(response);
      })
      .catch((err) => {
        console.log("failed to update todo");
        console.error(err.message);
      });
  };

  return (
    <form
      className="form-container"
      onSubmit={(e) => {
        handleSubmit(e);
        handleUpdate();
        handleClose();
      }}
    >
      <label htmlFor="title" className="label">
        Title
      </label>
      <input
        type="text"
        className="input"
        name="title"
        onChange={handleChange}
      />
      <label htmlFor="description" className="label">
        Description
      </label>
      <input
        type="text"
        name="description"
        className="input"
        onchange={handleChange}
      />
      <button type="submit" className="button">
        Submit
      </button>
    </form>
  );
};

export default UpdateTodo;
