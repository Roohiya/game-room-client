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
  Play,
  GameRoodID,
  Error,
} from './assets/styles'
import socket from './webSocket/socket'

const App = () => {
  const [visibility, setVisibility] = useState(true)
  const [playerOneNameLocal, setPlayerOneNameLocal] = useState('')
  const [playerTwoNameLocal, setPlayerTwoNameLocal] = useState('')
  const [playerOneName, setPlayerOneName] = useState('')
  const [playerTwoName, setPlayerTwoName] = useState('')
  const [roomId, setGameRoomId] = useState('')
  const [playerTwoRoomId, setPlayerTwoRoomId] = useState('')
  const [roomIdError, setRoomIdError] = useState(false)

  useEffect(() => {
    socket.connectSocket()

    socket.onCreateGame(setGameRoomId, setPlayerOneName)
    socket.onJoinGame(
      setGameRoomId,
      setPlayerOneName,
      setPlayerTwoName,
      setVisibility,
      setRoomIdError
    )
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
      {visibility && (
        <Overlay>
          <GameInput>
            <GameDetails>
              <CreateGame>
                {roomId ? (
                  <div>
                    Hello {playerOneNameLocal}! Waiting for another player to
                    join the room... Please use {roomId} to invite another
                    player!
                  </div>
                ) : (
                  <CreateGameDetails>
                    <CreateGameLabel> Start a new Game! </CreateGameLabel>
                    <p>Name: </p>
                    <OverlayInput
                      onInput={(e) => setPlayerOneNameLocal(e.target.value)}
                    />
                    <Play
                      onClick={() => {
                        socket.createGame(playerOneNameLocal)
                      }}
                    >
                      Start Game
                    </Play>
                  </CreateGameDetails>
                )}
              </CreateGame>
              <JoinGame>
                <JoinGameDetails>
                  <JoinGameLabel> Join a Game!</JoinGameLabel>
                  <p>Name: </p>
                  <OverlayInput
                    onInput={(e) => setPlayerTwoNameLocal(e.target.value)}
                  />
                  <p>Room ID: </p>
                  <OverlayInput
                    onInput={(e) => setPlayerTwoRoomId(e.target.value)}
                  />
                </JoinGameDetails>
                {roomIdError && (
                  <Error>
                    Room is full or room ID is incorrect. Please try again.
                  </Error>
                )}
                <Play
                  onClick={() => {
                    // send player 1 details to server
                    socket.joinGame(playerTwoNameLocal, playerTwoRoomId)
                  }}
                >
                  Join Game
                </Play>
              </JoinGame>
            </GameDetails>
          </GameInput>
        </Overlay>
      )}
    </div>
  )
}

export default App
