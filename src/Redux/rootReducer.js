import { combineReducers } from 'redux'

import {
  SET_PLAYERS,
  FANTASY_SCORE,
  AVERAGES
} from './actionTypes'

const state = {
  playerData: [],
  playerAverages: [],
  fantasyScores: []
}

function playerDataReducer(prevState = state.playerData, action) {
  switch (action.type) {
    case SET_PLAYERS:
      return action.payload
    default:
      return prevState
  }
}

function fantasyScoresReducer(prevState = state.fantasyScores, action) {
  switch (action.type) {
    case FANTASY_SCORE:
      return action.payload
    default:
      return prevState
  }
}

function playerAveragesReducer(prevState = state.playerAverages, action) {
  switch (action.type) {
    case AVERAGES:
      return action.payload
    default:
      return prevState
  }
}

const rootReducer = combineReducers({
  playerData: playerDataReducer,
  fantasyScores: fantasyScoresReducer,
  playerAverages: playerAveragesReducer
})

export default rootReducer