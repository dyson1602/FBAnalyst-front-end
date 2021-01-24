export function combineValues(avgs, fVal) {
  let combinedValues = []

  for (const player in fVal) {
    let combObj = avgs[player]
    combObj.fNba_mins = `${fVal[player].fNba_mins}`
    combObj.fNba_fgm = fVal[player].fNba_fgm
    combObj.fNba_fga = fVal[player].fNba_fga
    combObj.fNba_fgp = fVal[player].fNba_fgp
    combObj.fNba_ftm = fVal[player].fNba_ftm
    combObj.fNba_fta = fVal[player].fNba_fta
    combObj.fNba_ftp = fVal[player].fNba_ftp
    combObj.fNba_tpm = fVal[player].fNba_tpm
    combObj.fNba_tpa = fVal[player].fNba_tpa
    combObj.fNba_tpp = fVal[player].fNba_tpp
    combObj.fNba_off_reb = fVal[player].fNba_off_reb
    combObj.fNba_def_reb = fVal[player].fNba_def_reb
    combObj.fNba_tot_reb = fVal[player].fNba_tot_reb
    combObj.fNba_assists = fVal[player].fNba_assists
    combObj.fNba_steals = fVal[player].fNba_steals
    combObj.fNba_blocks = fVal[player].fNba_blocks
    combObj.fNba_turnovers = fVal[player].fNba_turnovers
    combObj.fNba_plus_minus = fVal[player].fNba_plus_minus
    combObj.fNba_p_fouls = fVal[player].fNba_p_fouls
    combObj.fNba_points = fVal[player].fNba_points
    combObj.fNba_score = fVal[player].fNba_score
    combinedValues.push(combObj)
  }
  return combinedValues
}