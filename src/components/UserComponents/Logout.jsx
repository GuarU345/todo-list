import Swal from "sweetalert2"
import { useNavigate } from "react-router-dom"
import { logout } from "../functions/apiUser"

const Logout = () => {

  const navigate = useNavigate()

  const userLogout = async() => {
    try {
      const token = localStorage.getItem('token')
      await logout(token)
      navigate('/')
      Swal.fire({
        icon:"success",
        title:"logout"
      })
      localStorage.removeItem('token')
    } catch (error) {
      Swal.fire({
        icon:"error",
        title:"Something wrong"
      })
    }
    
  }

  const handleClick = (event) => {
    event.preventDefault()
    userLogout()
  }

  return (
    <div className="logout">
      <button onClick={handleClick} className="btn btn-danger">Cerrar sesion</button>
    </div>
  )
}

export default Logout