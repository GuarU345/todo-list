import "./App.css";
import Register from "./components/UserComponents/Register";
import Todo from "./components/Todo"
import Login from "./components/UserComponents/Login";
import { Routes,Route,BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register/>}/>
        <Route path="/todos" element={<div className="container"><Todo/></div>}/>
        <Route path="/" element={<div className="container"><Login/></div>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
