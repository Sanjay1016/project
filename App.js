import React, { useState } from "react";
import "./App.css";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue) {
      setTodoList([...todoList, inputValue]);
      setInputValue("");
    } else {
      alert("Please type something to add.");
    }
  };

  const handleDelete = (index) => {
    setTodoList(todoList.filter((_, i) => i !== index));
  };

  return (
    <div className="todo-list-app">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          placeholder="Add Todo"
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todoList.map((todo, index) => (
          <li key={index}>
            {todo}{" "}
            <button type="button" onClick={() => handleDelete(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
