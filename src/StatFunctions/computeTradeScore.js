//Calculates final trade score between team A and team B
export default function ComputeTradeScore(teamAPlayers, teamBPlayers, statCategoriesObj) {
  const teamAScore = initialAggregate(teamAPlayers, statCategoriesObj)
  const teamBScore = initialAggregate(teamBPlayers, statCategoriesObj)
  const finalScores = [[teamAPlayers, teamAScore],[teamBPlayers, teamBScore]]
  return finalScores
}

//Calculates total fantasy score for each teams' players before the trade
function initialAggregate(players, statCategoriesObj) {
  const ia = {}
  Object.entries(statCategoriesObj).forEach(category => {
    if (category[1]) {
      const tempStatsArray = []
      players.forEach(player => tempStatsArray.push(player[category[0]]))
      ia[category[0]] = parseFloat(((tempStatsArray.reduce((tot, val) => tot + val))).toFixed(2))
    }
  })
  ia.fNba_score = fantasyAggregate(ia, statCategoriesObj)
  return ia
}

//Calculates final trade scores
function fantasyAggregate(player, statCategoriesObj) {
  const aggregateValue = []
  for (const category in statCategoriesObj) {
    if (statCategoriesObj[category]) {
      aggregateValue.push(player[category])
    }
  }
  return parseFloat((aggregateValue.reduce((sum, val) => sum + val) / aggregateValue.length).toFixed(2))
}

