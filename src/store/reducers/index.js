import board from './board'
import player from './player'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  board,
  player
})

export default rootReducer
