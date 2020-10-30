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

const onCreateGame = (setRoom, setName) => {
  if (socket) {
    socket.on('newGame', (data) => {
      setRoom(data.room)
      setName(data.playerOne)
    })
  }
}

const joinGame = (playerTwoName, roomId) => {
  if (socket) socket.emit('joinGame', { playerTwoName, roomId })
}

const onJoinGame = (
  setRoom,
  setNameOne,
  setNameTwo,
  setVisibility,
  setRoomIdError
) => {
  if (socket) {
    socket.on('connectToRoom', (data) => {
      if (data.startGame) {
        setRoom(data.room)
        setNameOne(data.playerOne)
        setNameTwo(data.playerTwo)
        setVisibility(false)
      } else {
        setRoomIdError(true)
      }
    })
  }
}

export default {
  connectSocket,
  disconnectSocket,
  createGame,
  onCreateGame,
  joinGame,
  onJoinGame,
}
