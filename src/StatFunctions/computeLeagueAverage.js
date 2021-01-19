
export function computeLeagueAverage(playerAverages) {
  let leagueAverages = {
    avg_mins: leagueAvgCaddy(playerAverages, "mins"),
    avg_fgm: leagueAvgCaddy(playerAverages, "fgm"),
    avg_fga: leagueAvgCaddy(playerAverages, "fga"),
    fgp: leagueAvgCaddy(playerAverages, "fgp"),
    avg_ftm: leagueAvgCaddy(playerAverages, "ftm"),
    avg_fta: leagueAvgCaddy(playerAverages, "fta"),
    ftp: leagueAvgCaddy(playerAverages, "ftp"),
    avg_tpm: leagueAvgCaddy(playerAverages, "tpm"),
    avg_tpa: leagueAvgCaddy(playerAverages, "tpa"),
    tpp: leagueAvgCaddy(playerAverages, "tpp"),
    avg_off_reb: leagueAvgCaddy(playerAverages, "off_reb"),
    avg_def_reb: leagueAvgCaddy(playerAverages, "def_reb"),
    avg_tot_reb: leagueAvgCaddy(playerAverages, "tot_reb"),
    avg_assists: leagueAvgCaddy(playerAverages, "assists"),
    avg_steals: leagueAvgCaddy(playerAverages, "steals"),
    avg_blocks: leagueAvgCaddy(playerAverages, "blocks"),
    avg_turnovers: leagueAvgCaddy(playerAverages, "turnovers"),
    avg_plus_minus: leagueAvgCaddy(playerAverages, "plus_minus"),
    avg_p_fouls: leagueAvgCaddy(playerAverages, "p_fouls"),
    avg_points: leagueAvgCaddy(playerAverages, "points")
  }
  return leagueAverages
}

//need to write in conditional that adjusts for games played or something so that weak players
//don't pull the average way down
function leagueAvgCaddy(playerAverages, stat) {
  let sumArray = []
  for (const player in playerAverages) {
    sumArray.push(parseFloat(playerAverages[player][stat]))
  }
  return parseFloat((sumArray.reduce((tot, val) => tot + val) / playerAverages.length).toFixed(1))
}