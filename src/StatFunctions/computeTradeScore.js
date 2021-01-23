

export default function ComputeTradeScore (teamAPlayers, teamBPlayers) {
  
  // teamAFantasyScores

  const teamAScore = initialAggregate(teamAPlayers)
  const teamBScore = initialAggregate(teamBPlayers)



}

function initialAggregate (players) {
  let ia = {}

  for (const player of players){
    let sum = 0.0
    for (const category in player) {
      // debugger
      console.log(category)
    }
  }
}