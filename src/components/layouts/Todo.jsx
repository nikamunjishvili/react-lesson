import React, { useState } from "react";

const Todo = () => {
  const [todo, setTodo] = useState("");
  const [task, setTask] = useState([]);

  const handleAddTodo = () => {
    if (todo === "") {
      alert("plz write somethig...");
    }
    setTask((prev) => [...prev, todo]);
    setTodo("");
  };

  const handleDeleteItem = (itemDelete) => {
    setTask((prev) => prev.filter((item, index) => item !== itemDelete));
  };

  return (
    <div>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="write something..."
      />
      <button onClick={handleAddTodo}>Add</button>

      <div>
        {task.map((item) => {
          return (
            <div style={{ display: "flex", gap: 10, marginTop: 20 }}>
              <li>{item}</li>
              <button onClick={() => handleDeleteItem(item)}>Delete</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Todo;
