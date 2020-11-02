import React from 'react'
import { GameInput, GameDetails, OverlayWrapper } from '../../assets/styles'
import CreateGame from './CreateGame'
import JoinGame from './JoinGame'

const Overlay = () => {
  return (
    <OverlayWrapper>
      <GameInput>
        <GameDetails>
          <CreateGame />
          <JoinGame />
        </GameDetails>
      </GameInput>
    </OverlayWrapper>
  )
}

export default Overlay
