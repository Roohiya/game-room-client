import React, { useState, useEffect } from 'react'
import socketIOClient from 'socket.io-client'
const ENDPOINT = 'http://127.0.0.1:4242'

function App () {
  const [response, setResponse] = useState('')

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT)
    socket.on('FromAPI', data => {
      setResponse(data)
    })
  }, [])

  return (
    <p>
      It's <time dateTime={response}>{response}</time>
    </p>
  )

  // return (
  //   <div>
  //     <h1>
  //       Hello, world! This is my app!
  //     </h1>
  //     <canvas
  //       useref='canvas'
  //       width={640}
  //       height={425}
  //       style={{ border: '1px solid black' }}
  //       onClick={e => {
  //         console.log(e.clientX)
  //       }}
  //     />
  //   </div>
  // )
}
export default App
