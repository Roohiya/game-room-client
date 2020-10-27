const initialState = {
  togglePlayer: true,
  namePlayerOne: '',
  namePlayerTwo: '',
  roomId: '',
  playerRoomId: '',
  gameStatus: null
}

const player = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PLAYER':
      return {
        ...state,
        togglePlayer: !state.togglePlayer
      }
    case 'SET_PLAYER_ONE_NAME':
      return {
        ...state,
        namePlayerOne: action.payload.name
      }
    case 'SET_PLAYER_TWO_NAME':
      return {
        ...state,
        namePlayerTwo: action.payload.name
      }
    case 'SET_ROOM_ID':
      return {
        ...state,
        roomId: action.payload.roomId
      }
    case 'SET_PLAYER_ROOM_ID':
      return {
        ...state,
        playerRoomId: action.payload.roomId
      }
    case 'SET_GAME_STATUS':
      return {
        ...state,
        gameStatus: action.payload.gameStatus
      }
    default:
      return state
  }
}

export default player
