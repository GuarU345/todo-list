import { useState } from "react";
import "./Register.css";
import { register } from "./functions/apiUser";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Register = () => {

    const [username,setUsername] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const navigate = useNavigate()

    const registerAccount = async() => {
        const body = {
            username:username,
            email:email,
            password:password
        }
        try{
            Swal.fire({
                icon: 'success',
                title: 'User created successfully'
            })
            await register(body)
            setUsername("")
            setEmail("")
            setPassword("")
            navigate('/')
        }catch{
            Swal.fire({
                icon: 'error',
                title: 'Something Wrong'
            })
        }
        
       
    }
   
    const handleClick = (event) => {
        event.preventDefault()
        registerAccount()
    }


  return (
    <div className='container' style={{paddingTop: "15vh"}}>
        <form>
        <h3>Register your account</h3>
        <div className="input-group mb-3">
            <span className="input-group-text" ><i className="bi bi-person"></i></span>
            <input type="text" className="form-control" placeholder="Username" value={username} onChange={() => setUsername(event.target.value)} aria-label="Username" aria-describedby="basic-addon1"/>
        </div>
        <div className="input-group mb-3">
            <span className="input-group-text"><i className="bi bi-envelope"></i></span>
            <input type="text" className="form-control" placeholder="Email" value={email} onChange={() => setEmail(event.target.value)} aria-label="Email" aria-describedby="basic-addon1"/>
        </div>
        <div className="input-group mb-3">
            <span className="input-group-text"><i className="bi bi-unlock"></i></span>
            <input type="password" className="form-control" placeholder="Password" value={password} onChange={() => setPassword(event.target.value)} aria-label="Password" aria-describedby="basic-addon1"/>
        </div>
        <input type="submit" onClick={handleClick} className="btn btn-success" />
        </form>
    </div>
  )
}

export default Register