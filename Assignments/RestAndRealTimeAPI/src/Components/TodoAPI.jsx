import React from 'react';
import { useState, useEffect } from 'react';

function TodoAPI() {
  const url = "https://dummyjson.com/todos?limit=10";

  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setTodos(data.todos))
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="container my-5">
      <style>{`
        .todo-table thead {
          background-color: #2563eb;
          color: #fff;
        }

        .todo-table tbody tr {
          transition: background-color 0.15s ease;
        }

        .todo-table tbody tr:hover {
          background-color: #f1f5f9;
        }

        .todo-done {
          text-decoration: line-through;
          color: #6c757d;
        }

        .todo-card {
          border-radius: 14px;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
        }
      `}</style>

      <h2 className="text-center fw-bold mb-2">Todo List</h2>
      <p className="text-center text-muted mb-4">
        Live todo data fetched from dummyjson.com
      </p>

      {loading && (
        <div className="text-center my-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}

      {error && <p className="text-danger text-center">Error: {error}</p>}

      {!loading && !error && (
        <div className="todo-card">
          <table className="table todo-table mb-0 align-middle">
            <thead>
              <tr>
                <th style={{ width: "60px" }}>#</th>
                <th>Task</th>
                <th className="text-center" style={{ width: "120px" }}>Done</th>
                <th className="text-center" style={{ width: "140px" }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {todos.map((todo, index) => (
                <tr key={todo.id}>
                  <td>{index + 1}</td>
                  <td className={todo.completed ? "todo-done" : ""}>
                    {todo.todo}
                  </td>
                  <td className="text-center">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      checked={todo.completed}
                      readOnly
                    />
                  </td>
                  <td className="text-center">
                    <span
                      className={`badge rounded-pill ${
                        todo.completed ? "bg-success" : "bg-warning text-dark"
                      }`}
                    >
                      {todo.completed ? "Completed" : "Pending"}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default TodoAPI;