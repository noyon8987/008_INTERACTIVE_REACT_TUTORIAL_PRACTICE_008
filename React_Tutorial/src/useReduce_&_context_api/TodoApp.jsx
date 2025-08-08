import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

import { useState } from "react";
import initialTodo from "./Data/initialTodo";
import getNextTodoId from "./utils/getNextTodoId";

export default function TodoApp() {
  const [todos, setTodos] = useState(initialTodo);

  const handleAddTodo = (title) => {
    setTodos([
        ...todos,
        {
            id: getNextTodoId(todos),
            title,
            done: false,
        }
    ]);
  };

  const handleChangeTodo = (todo) => {
    const changeTodo = todos.map((t) => {
      if (t.id === todo.id) {
        return {
          ...t,
          id: todo.id,
          title: todo.title,
          done: todo.done,
        };
      }
      return t;
    });
    setTodos(changeTodo);
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <AddTodo onAddTodo={handleAddTodo} />
      <TodoList
        todos={todos}
        onChangeTodo={handleChangeTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </>
  );
}
