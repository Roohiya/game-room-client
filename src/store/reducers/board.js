const initialState = {
  ticTacToeBoard: {
    row0col0: '',
    row0col1: '',
    row0col2: '',
    row1col0: '',
    row1col1: '',
    row1col2: '',
    row2col0: '',
    row2col1: '',
    row2col2: ''
  },
  counter: 0
}

const board = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CELL':
      const cell = action.payload.index
      const crossOrZero = action.payload.crossOrZero ? 'X' : 'O'

      return {
        ...state,
        ticTacToeBoard: {
          ...state.ticTacToeBoard,
          [cell]: crossOrZero
        }
      }
    default:
      return state
  }
}

export default board
