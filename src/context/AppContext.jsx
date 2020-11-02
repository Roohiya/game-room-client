import React, { useState, createContext } from 'react'
import PropTypes from 'prop-types'
import socket from '../webSocket/socket'

const AppContext = createContext()

function AppContextProvider({ children }) {
  const [visibility, setVisibility] = useState(true)
  const [playerOneNameInput, setPlayerOneNameInput] = useState('')
  const [playerTwoNameInput, setPlayerTwoNameInput] = useState('')
  const [playerOneName, setPlayerOneName] = useState('')
  const [playerTwoName, setPlayerTwoName] = useState('')
  const [roomId, setGameRoomId] = useState('')
  const [playerTwoRoomId, setPlayerTwoRoomId] = useState('')
  const [roomIdError, setRoomIdError] = useState(false)

  const createGameFn = () => {
    socket.createGame(playerOneNameInput)
  }

  const onCreateGameFn = () => {
    socket.onCreateGame(setGameRoomId, setPlayerOneName)
  }

  const joinGameFn = () => {
    socket.joinGame(playerTwoNameInput, playerTwoRoomId)
  }

  const onJoinGameFn = () => {
    socket.onJoinGame(
      setGameRoomId,
      setPlayerOneName,
      setPlayerTwoName,
      setVisibility,
      setRoomIdError
    )
  }

  const defaultContext = {
    setPlayerOneNameInput,
    setPlayerTwoNameInput,
    setPlayerTwoRoomId,
    visibility,
    playerOneName,
    playerTwoName,
    playerOneNameInput,
    playerTwoNameInput,
    playerTwoRoomId,
    roomIdError,
    createGameFn,
    onCreateGameFn,
    joinGameFn,
    onJoinGameFn,
    roomId,
  }

  return (
    <AppContext.Provider value={defaultContext}>{children}</AppContext.Provider>
  )
}

AppContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export { AppContext, AppContextProvider }
