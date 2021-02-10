

export function computeAverage(player, gamesParameter = 0) {
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
    avg_points: avgCaddy(playerGames, "points", gP),
    games_played: gamesPlayed(playerGames)
  }
  return playerAverages
}

function avgCaddy(playerGames, stat, gP) {
  switch (stat) {
    case "fgp" || "ftp" || "tpp":
      if (playerGames.length > 0) {
        let madeArray = []
        let attemptsArray = []
        let cat = stat.slice(0, 2)

        for (const game in playerGames) {
          if (parseInt(playerGames[game].mins) > 0) {
            madeArray.push(parseFloat(playerGames[game][`${cat}m`]))
            attemptsArray.push(parseFloat(playerGames[game][`${cat}a`]))
          }
        }

        // adjust array conditionals to safeguard against User attempting to view more games
        // than the player has played; no negative slice
        let adjustMadeArray = []
        if (gP !== 0) {
          madeArray.length - gP >= 0
            ? adjustMadeArray = [...madeArray.slice(madeArray.length - gP)]
            : adjustMadeArray = [...madeArray]
        } else {
          adjustMadeArray = [...madeArray]
        }

        let adjustAttemptsArray = []
        if (gP !== 0){
          attemptsArray.length - gP >= 0
            ? adjustAttemptsArray = attemptsArray.slice(attemptsArray.length - gP)
            : adjustAttemptsArray = [...attemptsArray]
        } else {
          adjustAttemptsArray = [...attemptsArray]
        }

        // conditionals guard against dividing by zero
        let avgMade = 0.0
        if (adjustMadeArray.length > 0) {
          avgMade = adjustMadeArray.reduce((tot, val) => tot + val) / adjustMadeArray.length
        }

        let avgAttempts = 0.0
        if (adjustAttemptsArray.length > 0) {
          avgAttempts = adjustAttemptsArray.reduce((tot, val) => tot + val) / adjustAttemptsArray.length
        }

        if (avgAttempts > 0) {
          return parseFloat((avgMade * 100 / avgAttempts).toFixed(1))
        } else {
          return 0.0
        }
      } else {
        return 0.0
      }
    default:
      if (playerGames.length > 0) {
        let sumArray = []
        for (let game in playerGames) {
          if (parseInt(playerGames[game].mins) > 0) {
            sumArray.push(parseFloat(playerGames[game][stat]))
          }
        }
        let adjustArray = []

        if (gP !== 0) {
          sumArray.length - gP >= 0
            ? adjustArray = [...sumArray.slice(sumArray.length - gP)]
            : adjustArray = [...sumArray]
        } else {
          adjustArray = [...sumArray]
        }
        let average = 0.0
        if (adjustArray.length > 0) {
          average = parseFloat((adjustArray.reduce((tot, val) => tot + val) / adjustArray.length).toFixed(1))
        } else {
          average = 0.0
        }
        return average
      } else {
        return 0.0
      }
  }
}

function gamesPlayed(playerGames) {
  let gamesPlayed = []
  for (const game in playerGames) {
    if (parseInt(playerGames[game].mins) > 0) {
      gamesPlayed.push(1)
    }
  }
  return gamesPlayed.length
}