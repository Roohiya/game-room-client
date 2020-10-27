import React, { useEffect, useState } from 'react'
import Grid from './components/ticTacToeGrid/grid'
import {
  Title,
  Status,
  Overlay,
  GameInput,
  GameDetails,
  CreateGame,
  CreateGameLabel,
  CreateGameDetails,
  JoinGame,
  JoinGameLabel,
  JoinGameDetails,
  OverlayInput,
  StartGame,
  GameRoodID,
} from './assets/styles'
import socket from './webSocket/socket'

const App = () => {
  const [visibility, setVisibility] = useState(true)
  const [playerOneName, setPlayerOneName] = useState('')
  const [playerTwoName, setPlayerTwoName] = useState('')
  const [room, createGameRoom] = useState('')

  useEffect(() => {
    if (room) initiateSocket(room)

    socket.connectSocket()
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
        Hello {playerOneName}! Waiting for another player to join the room...
      </Status>
      {visibility && (
        <Overlay>
          <GameInput>
            <GameDetails>
              <CreateGame>
                <CreateGameDetails>
                  <CreateGameLabel> Start a new Game! </CreateGameLabel>
                  <p>Name: </p>
                  <OverlayInput
                    onInput={(e) => setPlayerOneName(e.target.value)}
                  />
                  <StartGame
                    onClick={() => {
                      socket.createGame(playerOneName)

                      setVisibility(false)
                    }}
                  >
                    Start Game
                  </StartGame>
                </CreateGameDetails>
              </CreateGame>
              <JoinGame>
                <JoinGameDetails>
                  <JoinGameLabel> Join a Game!</JoinGameLabel>
                  <p>Name: </p>
                  <OverlayInput
                    onInput={(e) => setPlayerOneName(e.target.value)}
                  />
                  <p>Room ID: </p>
                  <OverlayInput
                    onInput={(e) => setPlayerOneName(e.target.value)}
                  />
                </JoinGameDetails>
                <StartGame
                  onClick={() => {
                    socket.createGame(playerOneName)

                    setVisibility(false)
                  }}
                >
                  Join Game
                </StartGame>
              </JoinGame>
            </GameDetails>
          </GameInput>
        </Overlay>
      )}
    </div>
  )
}

export default App
