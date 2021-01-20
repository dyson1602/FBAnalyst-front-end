
export function computeLeagueAverage(playerAverages) {
  let leagueAverages = {
    avg_mins: leagueAvgCaddy(playerAverages, "avg_mins"),
    avg_fgm: leagueAvgCaddy(playerAverages, "avg_fgm"),
    avg_fga: leagueAvgCaddy(playerAverages, "avg_fga"),
    fgp: leagueAvgCaddy(playerAverages, "fgp"),
    avg_ftm: leagueAvgCaddy(playerAverages, "avg_ftm"),
    avg_fta: leagueAvgCaddy(playerAverages, "avg_fta"),
    ftp: leagueAvgCaddy(playerAverages, "ftp"),
    avg_tpm: leagueAvgCaddy(playerAverages, "avg_tpm"),
    avg_tpa: leagueAvgCaddy(playerAverages, "avg_tpa"),
    tpp: leagueAvgCaddy(playerAverages, "tpp"),
    avg_off_reb: leagueAvgCaddy(playerAverages, "avg_off_reb"),
    avg_def_reb: leagueAvgCaddy(playerAverages, "avg_def_reb"),
    avg_tot_reb: leagueAvgCaddy(playerAverages, "avg_tot_reb"),
    avg_assists: leagueAvgCaddy(playerAverages, "avg_assists"),
    avg_steals: leagueAvgCaddy(playerAverages, "avg_steals"),
    avg_blocks: leagueAvgCaddy(playerAverages, "avg_blocks"),
    avg_turnovers: leagueAvgCaddy(playerAverages, "avg_turnovers"),
    avg_plus_minus: leagueAvgCaddy(playerAverages, "avg_plus_minus"),
    avg_p_fouls: leagueAvgCaddy(playerAverages, "avg_p_fouls"),
    avg_points: leagueAvgCaddy(playerAverages, "avg_points")
  }
  return leagueAverages
}

//need to write in conditional that adjusts for games played or something so that weak players
//don't pull the average way down
function leagueAvgCaddy(playerAverages, stat) {
  let sumArray = []
  for (const player in playerAverages) {
    // console.log(stat, playerAverages[player][stat])
    sumArray.push(parseFloat(playerAverages[player][stat]))
  }
  if (sumArray.length > 0) {
    return parseFloat((sumArray.reduce((tot, val) => tot + val) / playerAverages.length).toFixed(1))
  } else {
    return 0.0
  }
}