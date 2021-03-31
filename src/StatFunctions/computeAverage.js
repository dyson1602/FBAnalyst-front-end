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
        const shotsMadeArray = []
        const shotAttemptsArray = []
        const cat = statCategory.slice(0, 2)

        playerGames.forEach(game => {
          if (parseInt(game.mins) > 0) {
            shotsMadeArray.push(parseFloat(game[`${cat}m`]))
            shotAttemptsArray.push(parseFloat(game[`${cat}a`]))
          }
        })

        // adjust array conditionals to safeguard against User attempting to view more games
        // than the player has played; no negative slice
        let adjustedShotsMadeArray
        if (gP !== 0) {
          shotsMadeArray.length - gP >= 0
            ? adjustedShotsMadeArray = [...shotsMadeArray.slice(shotsMadeArray.length - gP)]
            : adjustedShotsMadeArray = [...shotsMadeArray]
        } else {
          adjustedShotsMadeArray = [...shotsMadeArray]
        }

        let adjustedShotAttemptsArray
        if (gP !== 0) {
          shotAttemptsArray.length - gP >= 0
            ? adjustedShotAttemptsArray = shotAttemptsArray.slice(shotAttemptsArray.length - gP)
            : adjustedShotAttemptsArray = [...shotAttemptsArray]
        } else {
          adjustedShotAttemptsArray = [...shotAttemptsArray]
        }

        // conditionals guard against dividing by zero
        let averageShotsMade = 0.0
        if (adjustedShotsMadeArray.length > 0) {
          averageShotsMade = adjustedShotsMadeArray.reduce((tot, val) => tot + val) / adjustedShotsMadeArray.length
        }

        let averageShotAttempts = 0.0
        if (adjustedShotAttemptsArray.length > 0) {
          averageShotAttempts = adjustedShotAttemptsArray.reduce((tot, val) => tot + val) / adjustedShotAttemptsArray.length
        }

        if (averageShotAttempts > 0) {
          return parseFloat((averageShotsMade * 100 / averageShotAttempts).toFixed(1))
        } else {
          return 0.0
        }
      default:
        const aggregateOfStatCategory = []

        playerGames.forEach(game => {
          if (parseInt(game.mins) > 0) {
            aggregateOfStatCategory.push(parseFloat(game[statCategory]))
          }
        })

        let adjustedAggregateOfStatCategory
        if (gP !== 0) {
          aggregateOfStatCategory.length - gP >= 0
            ? adjustedAggregateOfStatCategory = [...aggregateOfStatCategory.slice(aggregateOfStatCategory.length - gP)]
            : adjustedAggregateOfStatCategory = [...aggregateOfStatCategory]
        } else {
          adjustedAggregateOfStatCategory = [...aggregateOfStatCategory]
        }

        let statCategoryAverage = 0.0
        if (adjustedAggregateOfStatCategory.length > 0) {
          statCategoryAverage = parseFloat((adjustedAggregateOfStatCategory
            .reduce((tot, val) => tot + val) / adjustedAggregateOfStatCategory.length).toFixed(1))
        }

        return statCategoryAverage
    }
  } else return 0.0
}

  // function avgCaddy(playerGames, statCategory, gP) {
  // switch (statCategory) {
  //   case "fgp" || "ftp" || "tpp":
  //     if (playerGames.length > 0) {
  //       const shotsMadeArray = []
  //       const shotAttemptsArray = []
  //       const cat = statCategory.slice(0, 2)

  //       playerGames.forEach(game => {
  //         if (parseInt(game.mins) > 0) {
  //           shotsMadeArray.push(parseFloat(game[`${cat}m`]))
  //           shotAttemptsArray.push(parseFloat(game[`${cat}a`]))
  //         }
  //       })

  //       // adjust array conditionals to safeguard against User attempting to view more games
  //       // than the player has played; no negative slice
  //       let adjustedShotsMadeArray
  //       if (gP !== 0) {
  //         shotsMadeArray.length - gP >= 0
  //           ? adjustedShotsMadeArray = [...shotsMadeArray.slice(shotsMadeArray.length - gP)]
  //           : adjustedShotsMadeArray = [...shotsMadeArray]
  //       } else {
  //         adjustedShotsMadeArray = [...shotsMadeArray]
  //       }

  //       let adjustedShotAttemptsArray
  //       if (gP !== 0) {
  //         shotAttemptsArray.length - gP >= 0
  //           ? adjustedShotAttemptsArray = shotAttemptsArray.slice(shotAttemptsArray.length - gP)
  //           : adjustedShotAttemptsArray = [...shotAttemptsArray]
  //       } else {
  //         adjustedShotAttemptsArray = [...shotAttemptsArray]
  //       }

  //       // conditionals guard against dividing by zero
  //       let averageShotsMade = 0.0
  //       if (adjustedShotsMadeArray.length > 0) {
  //         averageShotsMade = adjustedShotsMadeArray.reduce((tot, val) => tot + val) / adjustedShotsMadeArray.length
  //       }

  //       let averageShotAttempts = 0.0
  //       if (adjustedShotAttemptsArray.length > 0) {
  //         averageShotAttempts = adjustedShotAttemptsArray.reduce((tot, val) => tot + val) / adjustedShotAttemptsArray.length
  //       }

  //       if (averageShotAttempts > 0) {
  //         return parseFloat((averageShotsMade * 100 / averageShotAttempts).toFixed(1))
  //       } else {
  //         return 0.0
  //       }
  //     } else {
  //       return 0.0
  //     }
  //   default:
  //     if (playerGames.length > 0) {
  //       const aggregateOfStatCategory = []

  //       playerGames.forEach(game => {
  //         if (parseInt(game.mins) > 0) {
  //           aggregateOfStatCategory.push(parseFloat(game[statCategory]))
  //         }
  //       })

  //       let adjustedAggregateOfStatCategory
  //       if (gP !== 0) {
  //         aggregateOfStatCategory.length - gP >= 0
  //           ? adjustedAggregateOfStatCategory = [...aggregateOfStatCategory.slice(aggregateOfStatCategory.length - gP)]
  //           : adjustedAggregateOfStatCategory = [...aggregateOfStatCategory]
  //       } else {
  //         adjustedAggregateOfStatCategory = [...aggregateOfStatCategory]
  //       }

  //       let statCategoryAverage = 0.0
  //       if (adjustedAggregateOfStatCategory.length > 0) {
  //         statCategoryAverage = parseFloat((adjustedAggregateOfStatCategory
  //           .reduce((tot, val) => tot + val) / adjustedAggregateOfStatCategory.length).toFixed(1))
  //       }

  //       return statCategoryAverage

  //     } else {
  //       return 0.0
  //     }
  // }
// }

function gamesPlayed(playerGames) {
  let count = 0
  playerGames.forEach(game => { if (parseInt(game.mins) > 0) count++ })
  return count
}