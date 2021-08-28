import {useState} from 'react'
import { Link } from 'react-router-dom'
import './login.css'

const Login = () => {
    const [usuario,setUsuario] = useState('')
    return (
        <div className="container-login">
            <h2 className="tittle">Login</h2>
            <input className="input" type="text" placeholder="usuario" onChange={(event)=>{
                setUsuario(event.target.value)
            }}/>
            <Link to={`/chat?usuario=${usuario}`}>
                <button className="button" type="submit">Aceptar</button>
            </Link>
        </div>
    )
}

export default Login