import React, {useEffect} from "react";

let ws = new WebSocket("ws://localhost:8080/ws")
ws.onopen = () => {
    alert('on open')
}
ws.onmessage = () => {
    alert('on message')
}

ws.onclose = () => {
    alert('on close')
}
ws.onerror = () => {
    alert('on error')
}

function MyWebSocket() {

    useEffect(function () {

    }, [])
    return (
        <p>this is my websocket</p>
    )
}

export default MyWebSocket
