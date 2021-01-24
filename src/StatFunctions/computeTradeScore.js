

export default function ComputeTradeScore (teamAPlayers, teamBPlayers, categories) {
    
  const teamAScore = initialAggregate(teamAPlayers, categories)
  const teamBScore = initialAggregate(teamBPlayers, categories)

}

function initialAggregate (players, categories) {
  console.log(categories)
  let ia = {}

  for (const player of players){
    let sum = 0.0
    for (const category in player) {
      // debugger
      // console.log(player)
    }
  }
}