import "./App.css";
import Register from "./components/Register";
import Todo from "./components/Todo"
import Login from "./components/Login";
import { Routes,Route,BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register/>}/>
        <Route path="/todos" element={<div className="container"><Todo/></div>}/>
        <Route path="/login" element={<div className="container"><Login/></div>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
