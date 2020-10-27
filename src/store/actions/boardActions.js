const setCell = (index, crossOrZero) => {
  console.log('ind ', index, crossOrZero)
  return {
    type: 'SET_CELL',
    payload: {
      index,
      crossOrZero
    }
  }
}

export default {
  setCell
}
