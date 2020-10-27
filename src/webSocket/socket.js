import socketIOClient from 'socket.io-client'
let socket

const ENDPOINT = 'http://127.0.0.1:4242'
const connectSocket = () => {
  socket = socketIOClient(ENDPOINT)
  console.log('Connecting socket to server...')
}

const disconnectSocket = () => {
  console.log('Disconnecting socket...')
  if (socket) socket.disconnect()
}

const createGame = (playerOneName) => {
  if (socket) socket.emit('createGame', { playerOneName })
}

const joinGame = (playerTwoName, roomId) => {
  if (socket) socket.emit('joinGame', { playerTwoName, roomId })
}

const onJoinGame = (dispatch, setGameStatus) => {
  if (socket) {
    socket.on('StartGame', (data) => {
      console.log('data', data)
      dispatch(setGameStatus(data.startGame))
    })
  }
}

const onCreateGame = (dispatch, setRoomId) => {
  if (socket) {
    socket.on('roomID', (data) => {
      console.log('data', data)
      dispatch(setRoomId(data.roomId))
    })
  }
}

export default {
  connectSocket,
  disconnectSocket,
  createGame,
  onCreateGame,
  joinGame,
  onJoinGame
}
