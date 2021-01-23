import {
  SET_PLAYERS,
  FANTASY_VALUE,
  AVERAGES,
  CATEGORIES
} from './actionTypes'

export function setPlayers(value) {
  return { type: SET_PLAYERS, payload: value }
}

export function setPlayerAverages(value) {
  return { type: AVERAGES, payload: value}
}

export function setFantasyValues(value) {
  return { type: FANTASY_VALUE, payload: value }
}

export function setCategories(value) {
  return { type: CATEGORIES, payload: value}
}