import { computeLeagueAverage } from './computeLeagueAverage'

//Returns array of all players' calculated fantasy values for each statistical
//category.
export function computeFantasyValue(playerStatAverages, statCategory) {

  const leagueStatAverages = computeLeagueAverage(playerStatAverages)

  const fantasyValuesArray = []

  for (const player in playerStatAverages) {
    const currentPlayer = playerStatAverages[player]
    const playerFantasyValues = {
      name: currentPlayer.name,
      nba_team_id: currentPlayer.nba_team_id,
      position: currentPlayer.position,
      fNba_mins: calculateStatFantasyValue(currentPlayer, leagueStatAverages, "avg_mins"),
      fNba_fgm: calculateStatFantasyValue(currentPlayer, leagueStatAverages, "avg_fgm"),
      fNba_fga: calculateStatFantasyValue(currentPlayer, leagueStatAverages, "avg_fga"),
      fNba_fgp: calculateStatFantasyValue(currentPlayer, leagueStatAverages, "fgp"),
      fNba_ftm: calculateStatFantasyValue(currentPlayer, leagueStatAverages, "avg_ftm"),
      fNba_fta: calculateStatFantasyValue(currentPlayer, leagueStatAverages, "avg_fta"),
      fNba_ftp: calculateStatFantasyValue(currentPlayer, leagueStatAverages, "ftp"),
      fNba_tpm: calculateStatFantasyValue(currentPlayer, leagueStatAverages, "avg_tpm"),
      fNba_tpa: calculateStatFantasyValue(currentPlayer, leagueStatAverages, "avg_tpa"),
      fNba_tpp: calculateStatFantasyValue(currentPlayer, leagueStatAverages, "tpp"),
      fNba_off_reb: calculateStatFantasyValue(currentPlayer, leagueStatAverages, "avg_off_reb"),
      fNba_def_reb: calculateStatFantasyValue(currentPlayer, leagueStatAverages, "avg_def_reb"),
      fNba_tot_reb: calculateStatFantasyValue(currentPlayer, leagueStatAverages, "avg_tot_reb"),
      fNba_assists: calculateStatFantasyValue(currentPlayer, leagueStatAverages, "avg_assists"),
      fNba_steals: calculateStatFantasyValue(currentPlayer, leagueStatAverages, "avg_steals"),
      fNba_blocks: calculateStatFantasyValue(currentPlayer, leagueStatAverages, "avg_blocks"),
      fNba_turnovers: calculateStatFantasyValue(currentPlayer, leagueStatAverages, "avg_turnovers"),
      fNba_plus_minus: calculateStatFantasyValue(currentPlayer, leagueStatAverages, "avg_plus_minus"),
      fNba_p_fouls: calculateStatFantasyValue(currentPlayer, leagueStatAverages, "avg_p_fouls"),
      fNba_points: calculateStatFantasyValue(currentPlayer, leagueStatAverages, "avg_points"),
    }
    playerFantasyValues.fNba_score = fantasyValueAverage(playerFantasyValues, statCategory)
    fantasyValuesArray.push(playerFantasyValues)
  }
  return fantasyValuesArray
}

//Does the actual calculation for the fantasy value scores
function calculateStatFantasyValue(currentPlayer, leagueStatAverages, statCategory) {
  const categoryValueModifier = calculateValueModifier(statCategory)
  let statFantasyValue = (currentPlayer[statCategory] / (leagueStatAverages[statCategory] * categoryValueModifier)) - 1
  
  //Adds weight to category value based on quantity of shot attempts; 50% on 20 shots
  // per game weighs more than 50% on 3 shots per game
  if (statCategory === "fgp") statFantasyValue *= (currentPlayer["avg_fga"] / leagueStatAverages["avg_fga"])
  if (statCategory === "ftp") statFantasyValue *= (currentPlayer["avg_fta"] / leagueStatAverages["avg_fta"])
  
  return parseFloat(statFantasyValue.toFixed(2))
}

//Calculates the player's overall fantasy value score based on all categorys'
//calculated fantasy values. Accepts statCategory argument so that the average
//can be recomputed when categories are deselected by user
function fantasyValueAverage(player, statCategories) {
  const averageValue = []

  Object.entries(statCategories).forEach(([category, selected]) => {
    if(selected) averageValue.push(player[category])
  })
  
  return parseFloat((averageValue.reduce((sum, val) => sum + val) / averageValue.length).toFixed(2))
}

//Returns value to multiply the stat by, because the categories don't carry the 
//same statistical weight in determining fantasy value.
function calculateValueModifier(statCategory) {
  switch (statCategory) {
    case "points" || "tot_rebs":
      return 0.67
    case "steals":
      return 0.75
    default:
      return 1.0
  }
}
