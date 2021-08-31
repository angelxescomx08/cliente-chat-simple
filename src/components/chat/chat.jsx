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
    const [ultimoMensaje,setUltimoMensaje] = useState('')
    useEffect(() => {
        socket = io(ENDPOINT)
        const { usuario } = queryString.parse(location.search)
        setUsuario(usuario)
        socket.emit('usuario', { "usuario": usuario })
        socket.on('conectados', (usuarios) => {
            const arrDestinos = usuarios.filter(item => item !== usuario)
            setConectados(arrDestinos)
            if (arrDestinos.length > 0) { setDestino(arrDestinos[0]) }
        })
        socket.on('recibir', ({ sender, msg }) => {
            setMensajes(oldArray => [...oldArray, {
                "sender": sender,
                "receiver": usuario,
                "text": msg
            }])
            setUltimoMensaje(`Nuevo mensaje de ${sender}`)
        })
        return () => {
            socket.off()
        }
    }, [location])
    return (
        <div className="container-chat">
            <h2 className="tittle">Chat {usuario}</h2>
            <div>
                <span className="notificacion">Usuarios conectados:</span>
                {
                    conectados.length > 0 ?
                        <select name="select" value={destino} onChange={event => {
                            setDestino(event.target.value)
                        }
                        }>
                            {
                                conectados.map((user) => {
                                    return <option key={user} value={user}>{user}</option>
                                })
                            }
                        </select>
                        : null
                }
                <br/><span className="notificacion">{ultimoMensaje!==''?`${ultimoMensaje}`:null}</span>
                <div className="container-mensajes">
                    {
                        mensajes.map(({ sender, receiver, text }, index) => {
                            if (destino === sender || destino === receiver) {
                                return <span className="mensaje" key={`${index}${sender}`}>
                                    {sender === usuario ? `Tú: ${text}` : `${sender}: ${text}`}</span>
                            }else{
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
                                "sender": usuario,
                                "receiver": destino,
                                "text": msg
                            }])
                            enviarMensage(socket, usuario, destino, msg)
                        }
                    }} />
                    <button className="button" onClick={() => {
                        setMensajes(oldArray => [...oldArray, {
                            "sender": usuario,
                            "receiver": destino,
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