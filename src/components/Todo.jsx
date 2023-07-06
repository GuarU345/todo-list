import { useEffect, useState } from "react";
import {
  getTodos,
  getPendingsTodos,
} from "./functions/api";

import Filters from "./Filters";
import TodoList from "./TodoList";
import Input from "./Input";
import Logout from "./UserComponents/Logout";

const Todo = () => {
  const [todos, setTodo] = useState([]);
  const [count, setCount] = useState([]);
  const [title, setTitle] = useState("");
  const [filter, setFilter] = useState([]);


  const fn = (a) => {
    setFilter(a)
  }

  const getAllTodos = async () => {
    const token = localStorage.getItem('token')
    const resp = await getTodos(token);
    setTodo(resp);
  };

  const handleEvent = async() => {
    await getAllTodos()
  }

  const handleTiltle = async(text) => {
    setTitle(text)
  }

  const countPendingTodos = async () => {
    const token = localStorage.getItem("token")
    const resp = await getPendingsTodos(token);
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
    <div style={{display:'flex',flexDirection:'column'}}>
    <Logout/>
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
    </div>
  );
};

export default Todo;
