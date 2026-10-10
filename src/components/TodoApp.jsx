import React, { useState } from "react";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodo = { id: Date.now(), text, completed: false };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <h1>Todo App</h1>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          width: "15rem",
        }}
      >
        <input id="todo-input" placeholder="Enter a new Todo Task"></input>
        <button>  Add Todo</button>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          width: "40rem",
        }}
      >
        {todos.length === 0 ? (
          <span>No Todos Yet</span>
        ) : (
          todos?.map((todo) => {
            return (
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                  border: "1px solid black",
                  padding: "10px",
                  borderRadius: "5px",
                }}
                key={todo.id}
              >
                <span>{todo.text}</span>
                <div style={{ display: "flex", gap: "10px" }}>
                  <button>Edit</button>
                  <button>Delete</button>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default TodoApp;
