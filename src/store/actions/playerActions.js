const setPlayer = () => {
  return {
    type: 'SET_PLAYER'
  }
}

const setPlayerOneName = (name) => {
  return {
    type: 'SET_PLAYER_ONE_NAME',
    payload: {
      name
    }
  }
}

const setPlayerTwoName = (name) => {
  return {
    type: 'SET_PLAYER_TWO_NAME',
    payload: {
      name
    }
  }
}

const setRoomId = (roomId) => {
  return {
    type: 'SET_ROOM_ID',
    payload: {
      roomId
    }
  }
}

const setPlayerRoomId = (roomId) => {
  return {
    type: 'SET_PLAYER_ROOM_ID',
    payload: {
      roomId
    }
  }
}

const setGameStatus = (gameStatus) => {
  return {
    type: 'SET_GAME_STATUS',
    payload: {
      gameStatus
    }
  }
}

export default {
  setPlayer,
  setPlayerOneName,
  setPlayerTwoName,
  setRoomId,
  setPlayerRoomId,
  setGameStatus
}
