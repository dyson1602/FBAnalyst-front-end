//Combines each player's player average objects with their fantasy rating
//objects so they can be viewed on a sortable chart

export function combineValues(playerStatAverages, fantasyRatings) {
  return playerStatAverages.map((playerStats, i) => Object.assign(playerStats, fantasyRatings[i]))
}