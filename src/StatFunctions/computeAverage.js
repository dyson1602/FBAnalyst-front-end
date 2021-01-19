
export function computeAverage (player, gamesParameter = player.player_games.length){
  let playerGames = player.player_games
  let gP = gamesParameter

  let playerAverages = {
      name: player.name,
      nba_team_id: player.nba_team_id,
      position: player.position,
      avg_mins: avgCaddy(playerGames, "mins", gP),
      avg_fgm: avgCaddy(playerGames, "fgm", gP),
      avg_fga: avgCaddy(playerGames, "fga", gP),
      fgp: avgCaddy(playerGames, "fgp", gP),
      avg_ftm: avgCaddy(playerGames, "ftm", gP),
      avg_fta: avgCaddy(playerGames, "fta", gP),
      ftp: avgCaddy(playerGames, "ftp", gP),
      avg_tpm: avgCaddy(playerGames, "tpm", gP),
      avg_tpa: avgCaddy(playerGames, "tpa", gP),
      tpp: avgCaddy(playerGames, "tpp", gP),
      avg_off_reb: avgCaddy(playerGames, "off_reb", gP),
      avg_def_reb: avgCaddy(playerGames, "def_reb", gP),
      avg_tot_reb: avgCaddy(playerGames, "tot_reb", gP),
      avg_assists: avgCaddy(playerGames, "assists", gP),
      avg_steals: avgCaddy(playerGames, "steals", gP),
      avg_blocks: avgCaddy(playerGames, "blocks", gP),
      avg_turnovers: avgCaddy(playerGames, "turnovers", gP),
      avg_plus_minus: avgCaddy(playerGames, "plus_minus", gP),
      avg_p_fouls: avgCaddy(playerGames, "p_fouls", gP),
      avg_points: avgCaddy(playerGames, "points", gP)
    }
    return playerAverages
}

function avgCaddy(playerGames, stat, gP) {
  switch (stat){
    case "fgp" || "ftp" || "tpp":
      if (playerGames.length > 0){
        let madeArray = []
        let attemptsArray = []
        let cat = stat.slice(0,2)
        for (const game in playerGames){
          madeArray.push(parseFloat(playerGames[game][`${cat}m`]))
          attemptsArray.push(parseFloat(playerGames[game][`${cat}a`]))
        }
        let adjustMadeArray = madeArray.slice(playerGames.length - gP)
        let adjustAttemptsArray = attemptsArray.slice(playerGames.length - gP)
        let avgMade = adjustMadeArray.reduce((tot, val) => tot + val) / gP
        let avgAttempts = adjustAttemptsArray.reduce((tot, val) => tot + val) / gP
        return parseFloat((avgMade * 100 / avgAttempts).toFixed(1))
      } else {
        return 0.0
      }
    default:
      if (playerGames.length > 0) {
        let sumArray = []
        for (const game in playerGames){
          sumArray.push(parseFloat(playerGames[game][stat]))
        }
        let adjustArray = sumArray.slice(playerGames.length - gP)
        return parseFloat((sumArray.reduce((tot, val) => tot + val) / gP).toFixed(1))
      } else {
        return 0.0
      }
  }
}