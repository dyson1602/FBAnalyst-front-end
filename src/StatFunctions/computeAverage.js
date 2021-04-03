//Computes player seasonal averages for each statistic. Games parament is built
//in for future filtering function that hasn't been implemented yet.

export function computeAverage(player, gamesParameter = 0) {
  const playerGames = player.player_games
  const gP = gamesParameter

  const playerAverages = {
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

function avgCaddy(playerGames, statCategory, gP) {
  if (playerGames.length > 0) {
    switch (statCategory) {
      case "fgp" || "ftp" || "tpp":
        const shotType = statCategory.slice(0, 2)
        const shotsMadeArray = aggregateStatsInArray(playerGames, `${shotType}m`)
        const shotAttemptsArray = aggregateStatsInArray(playerGames, `${shotType}a`)
        const adjustedShotsMadeArray = adjustStatsByGp(shotsMadeArray, gP)
        const adjustedShotAttemptsArray = adjustStatsByGp(shotAttemptsArray, gP)
        const averageShotsMade = averageStatCalculator(adjustedShotsMadeArray)
        const averageShotAttempts = averageStatCalculator(adjustedShotAttemptsArray)
        return averageShotAttempts > 0
          ? parseFloat((averageShotsMade * 100 / averageShotAttempts).toFixed(1))
          : 0.0
      default:
        const aggregateOfStatCategory = aggregateStatsInArray(playerGames, statCategory)
        const adjustedAggregateOfStatCategory = adjustStatsByGp(aggregateOfStatCategory, gP)
        return parseFloat(averageStatCalculator(adjustedAggregateOfStatCategory).toFixed(1))
    }
  } else {
    return 0.0
  }
}

//Builds array of each games stats based on the statCategory, and only counts
//if the player played that game
function aggregateStatsInArray(playerGames, statCategory) {
  return playerGames
    .filter(game => parseInt(game.mins) > 0)
    .map(game => parseFloat(game[statCategory]))
}

//Calculates stat average. Conditional guards against division by zero.
function averageStatCalculator(statArray) {
  if (!statArray.length) return 0.0
  return statArray.reduce((sum, val) => sum + val) / statArray.length
}

//Adjusts stats array to account for only most recent games based on gP modifier.
function adjustStatsByGp(statsArray, gP) {
  let adjustedStatsArray
  if (gP !== 0) {
    statsArray.length - gP >= 0
      ? adjustedStatsArray = [...statsArray.slice(statsArray.length - gP)]
      : adjustedStatsArray = [...statsArray]
  } else {
    adjustedStatsArray = [...statsArray]
  }
  return adjustedStatsArray
}

//Returns total number of games player has played.
function gamesPlayed(playerGames) {
  return playerGames.reduce((count, game) => {
    if (parseInt(game.mins) > 0) count += 1
  }, 0)
}