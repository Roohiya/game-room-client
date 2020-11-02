import React, { useEffect, useContext } from 'react'
import Grid from './components/ticTacToeGrid/grid'
import { Title, Status } from './assets/styles'
import Overlay from './components/Overlay'
import socket from './webSocket/socket'
import { AppContext } from './context/AppContext'

const App = () => {
  const {
    visibility,
    onCreateGameFn,
    onJoinGameFn,
    playerOneName,
    playerTwoName,
    roomId,
  } = useContext(AppContext)

  useEffect(() => {
    socket.connectSocket()

    onCreateGameFn()
    onJoinGameFn()
  }, [])

  return (
    <div
      style={{
        backgroundColor: 'red',
        maxWidth: '500px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: 'auto',
      }}
    >
      <Title> Tic Tac Toe </Title>
      <Grid />
      <Status>
        <div>
          Game Room ID: {roomId} <br />
          {playerOneName} and {playerTwoName}, you can start the game!
        </div>
      </Status>
      {visibility && <Overlay />}
    </div>
  )
}

export default App
