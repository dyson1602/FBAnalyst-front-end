import {
  SET_PLAYERS,
  FANTASY_SCORE,
  AVERAGES
} from './actionTypes'

export function setPlayers(value) {
  return { type: SET_PLAYERS, payload: value }
}

export function setPlayerAverages(value) {
  return { type: AVERAGES, payload: value}
}

export function setFantasyScore(value) {
  return { type: FANTASY_SCORE, payload: value }
}