/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

export default function UseEffect() {
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState([]);

  const fetchTodos = () => {
    fetch(`http://localhost:3000/todos`)
      .then((response) => response.json())
      .then((data) => {
        setTodos(data);
      });
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const handleTodoSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3000/todos`, {
      method: "POST",
      body: JSON.stringify({ title: title, isComplete: false }),
      headers: {
        "content-type": "application/json",
      },
    }).then(() => {
      fetchTodos();
      setTitle("");
    });
  };

  const handleRemoveTodo = (todoID) => {
    fetch(`http://localhost:3000/todos/${todoID}`, {
      method: "DELETE",
    }).then(() => {
      fetchTodos();
    });
  };

  return (
    <div>
      <form onSubmit={handleTodoSubmit}>
        <input
          type="text"
          placeholder="Add Todo..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit">Add Todo</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span>{todo.title}</span>
            <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
