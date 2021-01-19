import { computeLeagueAverage } from './computeLeagueAverage'

export function computeFantasyValue(players) {

  let leagueAverages = computeLeagueAverage(playerAverages)
  let fantasyValuesArray = []

  for (const player in players) {
    let cP = players[player]
    let playerFantasyValue = {
      name: cP.name,
      nba_team_id: cP.nba_team_id,
      position: cP.position,
      fnba_mins: fantasyValueCaddy(cP, leagueAverages, "mins"),
      fNba_fgm: fantasyValueCaddy(cP, leagueAverages, "fgm"),
      fNba_fga: fantasyValueCaddy(cP, leagueAverages, "fga"),
      fNba_fgp: fantasyValueCaddy(cP, leagueAverages, "fgp"),
      fNba_ftm: fantasyValueCaddy(cP, leagueAverages, "ftm"),
      fNba_fta: fantasyValueCaddy(cP, leagueAverages, "fta"),
      fNba_ftp: fantasyValueCaddy(cP, leagueAverages, "ftp"),
      fNba_tpm: fantasyValueCaddy(cP, leagueAverages, "tpm"),
      fNba_tpa: fantasyValueCaddy(cP, leagueAverages, "tpa"),
      fNba_tpp: fantasyValueCaddy(cP, leagueAverages, "tpp"),
      fNba_off_reb: fantasyValueCaddy(cP, leagueAverages, "off_reb"),
      fNba_def_reb: fantasyValueCaddy(cP, leagueAverages, "def_reb"),
      fNba_tot_reb: fantasyValueCaddy(cP, leagueAverages, "tot_reb"),
      fNba_assists: fantasyValueCaddy(cP, leagueAverages, "assists"),
      fNba_steals: fantasyValueCaddy(cP, leagueAverages, "steals"),
      fNba_blocks: fantasyValueCaddy(cP, leagueAverages, "blocks"),
      fNba_turnovers: fantasyValueCaddy(cP, leagueAverages, "turnovers"),
      fNba_plus_minus: fantasyValueCaddy(cP, leagueAverages, "plus_minus"),
      fNba_p_fouls: fantasyValueCaddy(cP, leagueAverages, "p_fouls"),
      fNba_points: fantasyValueCaddy(cP, leagueAverages, "points")
    }
    fantasyValuesArray.push(playerFantasyValue)
  }
  return fantasyValuesArray
}

function fantasyValueCaddy(currentPlayer, leagueAverages, stat) {
  let valMod = valueModifier(stat)
  let statVal = (currentPlayer[stat] / (leagueAverages[stat] * valMod)) - 1
  return statVal
}

function valueModifier (stat) {
  switch (stat) {
    case "points" || "tot_rebs":
      return 0.67
    case "steals":
      return 0.75
    default:
      return 1.0
  }
}