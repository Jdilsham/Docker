import { useState } from "react";
import "./App.css";

export default function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() === "") return;
    setTasks([...tasks, { text: newTask, completed: false }]);
    setNewTask("");
  };

  const toggleTask = (index) => {
    setTasks(
      tasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto", padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task"
          style={{ flex: "1", padding: "8px", border: "1px solid #ccc", borderRadius: "4px" }}
        />
        <button onClick={addTask} style={{ padding: "8px 12px", background: "blue", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}>
          Add
        </button>
      </div>
      <ul style={{ listStyle: "none", padding: "0" }}>
        {tasks.map((task, index) => (
          <li key={index} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px", borderBottom: "1px solid #ddd" }}>
            <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
              {task.text}
            </span>
            <div>
              <button onClick={() => toggleTask(index)} style={{ marginRight: "8px", padding: "4px 8px", background: "green", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}>
                {task.completed ? "Undo" : "Complete"}
              </button>
              <button onClick={() => deleteTask(index)} style={{ padding: "4px 8px", background: "red", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
