import React, { useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [filter, setFilter] = useState("all");

  const addTodo = () => {
    if (inputValue.trim() === "") return;
    const newTodo = {
      id: Date.now(),
      text: inputValue,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setInputValue("");
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  const totalTodos = todos.length;
  const activeTodos = todos.filter((todo) => !todo.completed).length;

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>📝 Todo List</h2>

        {/* Input tambah todo */}
        <div style={styles.inputSection}>
          <input
            type="text"
            placeholder="Tambah todo..."
            style={styles.input}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button onClick={addTodo} style={styles.addButton}>
            Tambah
          </button>
        </div>

        {/* Filter */}
        <div style={styles.filterButtons}>
          <button
            style={{
              ...styles.filterButton,
              backgroundColor: filter === "all" ? "#4f46e5" : "#f3f4f6",
              color: filter === "all" ? "white" : "#333",
            }}
            onClick={() => setFilter("all")}
          >
            Semua
          </button>
          <button
            style={{
              ...styles.filterButton,
              backgroundColor: filter === "active" ? "#4f46e5" : "#f3f4f6",
              color: filter === "active" ? "white" : "#333",
            }}
            onClick={() => setFilter("active")}
          >
            Aktif
          </button>
          <button
            style={{
              ...styles.filterButton,
              backgroundColor: filter === "completed" ? "#4f46e5" : "#f3f4f6",
              color: filter === "completed" ? "white" : "#333",
            }}
            onClick={() => setFilter("completed")}
          >
            Selesai
          </button>
        </div>

        {/* Daftar Todo */}
        <ul style={styles.todoList}>
          {filteredTodos.map((todo) => (
            <li key={todo.id} style={styles.todoItem}>
              <label style={styles.todoLabel}>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleComplete(todo.id)}
                />
                <span
                  style={{
                    marginLeft: "8px",
                    textDecoration: todo.completed ? "line-through" : "none",
                    color: todo.completed ? "#9ca3af" : "#111827",
                  }}
                >
                  {todo.text}
                </span>
              </label>
              <button
                onClick={() => deleteTodo(todo.id)}
                style={styles.deleteButton}
              >
                ✕
              </button>
            </li>
          ))}
        </ul>

        {/* Statistik */}
        <p style={styles.stats}>
          Total: <b>{totalTodos}</b> | Aktif: <b>{activeTodos}</b>
        </p>
      </div>
    </div>
  );
};

// ✨ Styling sederhana biar rapi dan elegan
const styles = {
  container: {
    backgroundColor: "#f3f4f6",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
  },
  card: {
    backgroundColor: "white",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    padding: "20px 30px",
    width: "400px",
  },
  title: {
    textAlign: "center",
    marginBottom: "15px",
    color: "#1f2937",
  },
  inputSection: {
    display: "flex",
    gap: "8px",
    marginBottom: "12px",
  },
  input: {
    flex: 1,
    padding: "8px",
    borderRadius: "6px",
    border: "1px solid #d1d5db",
  },
  addButton: {
    backgroundColor: "#4f46e5",
    color: "white",
    border: "none",
    padding: "8px 14px",
    borderRadius: "6px",
    cursor: "pointer",
  },
  filterButtons: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "12px",
  },
  filterButton: {
    flex: 1,
    border: "none",
    borderRadius: "6px",
    margin: "0 3px",
    padding: "6px 0",
    cursor: "pointer",
    transition: "0.2s",
  },
  todoList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  todoItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "8px 10px",
    backgroundColor: "#f9fafb",
    borderRadius: "6px",
    marginBottom: "6px",
  },
  todoLabel: {
    display: "flex",
    alignItems: "center",
  },
  deleteButton: {
    backgroundColor: "#ef4444",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    padding: "4px 8px",
  },
  stats: {
    textAlign: "center",
    marginTop: "10px",
    color: "#4b5563",
  },
};

export default TodoList;
