import React, { useContext } from 'react'
import {
  JoinGameWrapper,
  JoinGameLabel,
  JoinGameDetails,
  OverlayInput,
  Play,
  Error,
} from '../../assets/styles'
import { AppContext } from '../../context/AppContext'

const JoinGame = () => {
  const {
    setPlayerTwoNameInput,
    setPlayerTwoRoomId,
    roomIdError,
    joinGameFn,
  } = useContext(AppContext)

  return (
    <JoinGameWrapper>
      <JoinGameDetails>
        <JoinGameLabel> Join a Game!</JoinGameLabel>
        <p>Name: </p>
        <OverlayInput onInput={(e) => setPlayerTwoNameInput(e.target.value)} />
        <p>Room ID: </p>
        <OverlayInput onInput={(e) => setPlayerTwoRoomId(e.target.value)} />
      </JoinGameDetails>
      {roomIdError && (
        <Error> Room is full or room ID is incorrect. Please try again. </Error>
      )}
      <Play
        onClick={() => {
          joinGameFn()
        }}
      >
        Join Game
      </Play>
    </JoinGameWrapper>
  )
}

export default JoinGame
