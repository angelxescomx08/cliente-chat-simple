import { useEffect, useState } from 'react'
import queryString from 'query-string';
import io from "socket.io-client";
import './chat.css'

let socket;

const enviarMensage = (socket, usuario, destino, msg) => {
    socket.emit('enviar', {
        "usuario": usuario,
        "destino": destino,
        "msg": msg
    })
}

const Chat = ({ location }) => {
    //const ENDPOINT = 'http://localhost:5000'
    const ENDPOINT = 'https://servidor-chat-simple.herokuapp.com/'
    const [usuario, setUsuario] = useState()
    const [destino, setDestino] = useState()
    const [msg, setMsg] = useState()
    const [mensajes, setMensajes] = useState([])
    const [conectados, setConectados] = useState([])
    useEffect(() => {
        socket = io(ENDPOINT)
        const { usuario } = queryString.parse(location.search)
        setUsuario(usuario)
        socket.emit('usuario', { "usuario": usuario })
        socket.on('conectados', (usuarios) => {
            const arrDestinos = usuarios.filter(item => item !== usuario)
            setConectados(arrDestinos)
            if(arrDestinos.length>0){setDestino(arrDestinos[0])}
        })
        socket.on('recibir', ({ usuario, msg }) => {
            setMensajes(oldArray => [...oldArray, {
                "user": usuario,
                "text": msg
            }])
        })
        return () => {
            socket.off()
        }
    }, [ENDPOINT, location])
    return (
        <div className="container-chat">
            <h2 className="tittle">Chat {usuario}</h2>
            <div>
                <span className="">Usuarios conectados: </span>
                {
                    conectados.length > 0 ?
                        <select name="select" value={destino} onChange={event => {
                            setDestino(event.target.value)
                        }
                        }>
                            {
                                conectados.map((user) => {
                                    return (
                                        <option key={user} value={user}>{user}</option>
                                    )
                                })
                            }
                        </select>
                        : null
                }
                <div className="container-mensajes">
                    {
                        mensajes.map(({ user, text }, index) => {
                            if (text.length > 0) {
                                if (user !== undefined) {
                                    return <span className="mensaje" key={`${index}`}>{user}: {text}</span>
                                } else {
                                    return <span className="mensaje" key={`${index}`}>Tú: {text}</span>
                                }
                            } else {
                                return null
                            }
                        })
                    }
                </div>
                <div className="container-input">
                    <input className="input-mensaje" type="text" onChange={(event) => {
                        setMsg(event.target.value)
                    }} onKeyDown={(event) => {
                        if (event.key === 'Enter') {
                            setMensajes(oldArray => [...oldArray, {
                                "usuario": usuario,
                                "text": msg
                            }])
                            enviarMensage(socket, usuario, destino, msg)
                        }
                    }} />
                    <button className="button" onClick={() => {
                        setMensajes(oldArray => [...oldArray, {
                            "usuario": usuario,
                            "text": msg
                        }])
                        enviarMensage(socket, usuario, destino, msg)
                    }}>Enter</button>
                </div>
            </div>
        </div>
    )
}

export default Chat