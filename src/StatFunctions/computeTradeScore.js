

export default function ComputeTradeScore (teamAPlayers, teamBPlayers, categories) {
  
  if (!categories) {
    categories = {
      fNba_points: true,
      fNba_assists: true,
      fNba_tot_reb: true,
      fNba_blocks: true,
      fNba_steals: true,
      fNba_fgp: true,
      fNba_ftp: true,
      fNba_tpm: true,
      // fNba_turnovers: turnovers
    }
  }
  
  
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