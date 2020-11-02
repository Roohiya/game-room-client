import React, { useContext } from 'react'
import {
  CreateGameWrapper,
  CreateGameLabel,
  CreateGameDetails,
  OverlayInput,
  Play,
} from '../../assets/styles'
import { AppContext } from '../../context/AppContext'

const CreateGame = () => {
  const {
    playerOneNameInput,
    roomId,
    createGameFn,
    setPlayerOneNameInput,
  } = useContext(AppContext)

  return (
    <CreateGameWrapper>
      {roomId ? (
        <div>
          Hello {playerOneNameInput}! Waiting for another player to join the
          room... Please use {roomId} to invite another player!
        </div>
      ) : (
        <CreateGameDetails>
          <CreateGameLabel> Start a new Game! </CreateGameLabel>
          <p>Name: </p>
          <OverlayInput
            onInput={(e) => setPlayerOneNameInput(e.target.value)}
          />
          <Play
            onClick={() => {
              createGameFn()
            }}
          >
            Start Game
          </Play>
        </CreateGameDetails>
      )}
    </CreateGameWrapper>
  )
}

export default CreateGame
