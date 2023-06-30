import { useEffect, useState } from "react";
import {
  getTodos,
  createTodo,
  deleteTodo,
  getPendingsTodos,
  checkTodo,
} from "./functions/api";

import { credentials } from "./functions/apiUser";

const Todo = () => {
  const [todos, setTodo] = useState([]);
  const [count, setCount] = useState([]);
  const [title, setTitle] = useState("");
  const [filter, setFilter] = useState([]);

  const token = localStorage.getItem("token")

  const getAllTodos = async () => {
    const body = {
      token:token
    }
    const userData = await credentials(body)
    const resp = await getTodos(userData._id);
    setTodo(resp);
  };

  const countPendingTodos = async () => {
    const body = {
      token:token
    }
    const userData = await credentials(body)
    const resp = await getPendingsTodos(userData._id);
    setCount(resp);
  };

  const deleteOneTodo = async (id) => {
    await deleteTodo(id);
  };

  const handleClick = async (event) => {
    event.preventDefault();
    const todoId = event.target.value;
    await deleteOneTodo(todoId);
    getAllTodos();
  };

  const handleClickAll = async (event) => {
    event.preventDefault();
    setFilter(todos);
  };

  const handleClickActive = async (event) => {
    event.preventDefault();
    const filteredTodos = todos.filter((todofil) => !todofil.completed);
    setFilter(filteredTodos);
  };

  const handleClickCompleted = async (event) => {
    event.preventDefault();
    const filteredTodos = todos.filter((todofil) => todofil.completed);
    setFilter(filteredTodos);
  };

  const handleKeyDown = async () => {
    
    if (event.key === "Enter") {
      const body = {
        token:token
      }
      const userData = await credentials(body)
      const titleObj = {
        title: title,
        user: userData._id
      };
      await createTodo(titleObj);
      setTitle("");
      getAllTodos();
    }
  };

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleChangeCheck = async (event) => {
    const checked = event.target.checked;

    const todoId = event.target.value;
    const body = {
      completed: checked,
    };
    await checkTodo(todoId, body);
    getAllTodos();
  };

  useEffect(() => {
    getAllTodos();
  }, []);

  useEffect(() => {
    countPendingTodos();
  }, [todos]);

  useEffect(() => {
    setFilter(todos);
  }, [todos]);

  return (
    <div style={{paddingTop: "15vh"}}>
      <h1 style={{ textAlign: "center" }}>
        <span style={{ color: "red", fontSize: "3rem" }}>
          TODO <span style={{ color: "black" }}>-List</span>
        </span>
      </h1>
      <section
        style={{
          backgroundColor: "white",
          borderRadius: "0.2rem",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        }}
      >
        <input
          style={{ width: "100%" }}
          type="text"
          className="create-todo"
          placeholder="¿Que quieres hacer?"
          autoFocus
          value={title}
          onChange={handleChange}
          onKeyDownCapture={handleKeyDown}
        />
        {filter.map((todo) => {
          return (
            <div key={todo._id} className="todo-item">
              <input
                className="check-todo"
                type="checkbox"
                onChange={handleChangeCheck}
                value={todo._id}
                checked={todo.completed}
              />
              <p>{todo.title}</p>
              <button
                className="btn btn-danger"
                onClick={handleClick}
                value={todo._id}
              >
                Eliminar
              </button>
            </div>
          );
        })}
        <footer
          style={{
            display: "flex",
            padding: "0.5rem",
            justifyContent: "space-between",
          }}
        >
          <span>
            {count} {count === 1 ? "work" : "works"}
          </span>
          <div style={{ display: "flex", gap: "1rem" }}>
            <button onClick={handleClickAll} className="filters">
              All
            </button>
            <button onClick={handleClickActive} className="filters">
              Active
            </button>
            <button onClick={handleClickCompleted} className="filters">
              Completed
            </button>
          </div>
        </footer>
      </section>
    </div>
  );
};

export default Todo;
