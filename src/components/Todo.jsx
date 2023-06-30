import { useEffect, useState } from "react";
import {
  getTodos,
  createTodo,
  getPendingsTodos,
} from "./functions/api";

import { credentials } from "./functions/apiUser";
import Filters from "./Filters";
import TodoList from "./TodoList";
import Input from "./Input";

const Todo = () => {
  const [todos, setTodo] = useState([]);
  const [count, setCount] = useState([]);
  const [title, setTitle] = useState("");
  const [filter, setFilter] = useState([]);


  const fn = (a) => {
    setFilter(a)
  }

  const token = localStorage.getItem("token")

  const getAllTodos = async () => {
    const body = {
      token:token
    }
    const userData = await credentials(body)
    const resp = await getTodos(userData._id);
    setTodo(resp);
  };

  const handleEvent = async() => {
    await getAllTodos()
  }

  const handleTiltle = async(text) => {
    setTitle(text)
  }

  const countPendingTodos = async () => {
    const body = {
      token:token
    }
    const userData = await credentials(body)
    const resp = await getPendingsTodos(userData._id);
    setCount(resp);
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
        <Input evt={handleEvent} evtTitle={handleTiltle} title={title}/>
        <TodoList filter={filter} evt={handleEvent}/>
        <Filters todos={todos} count={count} filt={fn}/>
      </section>
    </div>
  );
};

export default Todo;
