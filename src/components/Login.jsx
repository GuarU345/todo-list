import { useState } from "react";
import { login } from "./functions/apiUser";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate()

  const loginAccount = async () => {
    const body = {
      email: email,
      password: password,
    };
    try {
      const token = await login(body);
      localStorage.setItem("token", token);
      setEmail("");
      setPassword("");
      navigate('/todos')
    } catch (error) {
        console.error(error)
    }
  };

  const handleClick = (event) => {
    event.preventDefault();
    loginAccount();
  };
  return (
    <div>
      <form>
        <h3>Login</h3>
        <div className="input-group mb-3">
          <span className="input-group-text">
            <i className="bi bi-person"></i>
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Email"
            value={email}
            onChange={() => setEmail(event.target.value)}
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text">
            <i className="bi bi-unlock"></i>
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Password"
            value={password}
            onChange={() => setPassword(event.target.value)}
            aria-label="Password"
            aria-describedby="basic-addon1"
          />
        </div>
        <input
          type="submit"
          onClick={handleClick}
          className="btn btn-success"
        />
      </form>
    </div>
  );
};

export default Login;
