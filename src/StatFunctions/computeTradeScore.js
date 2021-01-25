

export default function ComputeTradeScore(teamAPlayers, teamBPlayers, categories) {

  const teamAScore = initialAggregate(teamAPlayers, categories)
  const teamBScore = initialAggregate(teamBPlayers, categories)
  
  const finalScores = [[teamAPlayers, teamAScore],[teamBPlayers, teamBScore]]
  
  return finalScores
}

function initialAggregate(players, categories) {
  let ia = {}
  for (const category in categories) {
    if (categories[category]) {
      let agg = []
      for (const player of players) {
        agg.push(player[category])
      }
      ia[category] = parseFloat(((agg.reduce((tot, val) => tot + val))).toFixed(2))
    }
  }
  ia.fNba_score = fantasyAggregate(ia, categories)
  return ia
}

function fantasyAggregate (playerObj, categories) {
  let aggregateValue = []
  for (const category in categories) {
    if(categories[category]) {
      aggregateValue.push(playerObj[category])
    }
  }
  return parseFloat((aggregateValue.reduce((tot, val) => tot + val)/aggregateValue.length).toFixed(2))
}

