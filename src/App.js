import "./styles.css";
import React from "react";

export default function App() {
  const [todos, setTodos] = React.useState([]);
  const [todoText, setTodoText] = React.useState("");

  const addTodo = () => {
    const newTodo = {
      name: todoText,
      completed: false,
      id: new Date().toUTCString()
    };
    const updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);
    setTodoText("");
  };

  console.log("todos", todos);
  return (
    <div className="App" style={{ width: 500, margin: "0 auto" }}>
      <input
        value={todoText}
        onChange={(e) => {
          setTodoText(e.target.value);
        }}
        type="text"
      />
      <button onClick={addTodo}>add</button>
      <ul>
        {todos.map((todo) => {
          return (
            <li
              style={{
                textDecoration: todo.completed ? "line-through" : "none"
              }}
              onClick={() => {
                const updatedTodos = todos.map((todoA) => {
                  if (todoA.id === todo.id) {
                    return {
                      ...todoA,
                      completed: !todoA.completed
                    };
                  } else {
                    return todoA;
                  }
                });
                setTodos(updatedTodos);
              }}
            >
              {todo.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
