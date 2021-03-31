import { computeLeagueAverage } from './computeLeagueAverage'

//Returns array of all players' calculated fantasy values for each statistical
//category.
export function computeFantasyValue(playerStatAverages, statCategory) {

  const leagueStatAverages = computeLeagueAverage(playerStatAverages)
  const fantasyValuesArray = []

  playerStatAverages.forEach(player => {
    const fantasyValuesAddOn = {}
    Object.keys(player).forEach(key => {
      if (key.startsWith("avg_") || key === "ftp" || key === "fgp") {
        if (key === "fgp" || key === "ftp") fantasyValuesAddOn["fNba_" + key] = calculateStatFantasyValue(player, leagueStatAverages, key)
        else {
          let newKey = key
          newKey = newKey.replace("avg", "fNba")
          fantasyValuesAddOn[newKey] = calculateStatFantasyValue(player, leagueStatAverages, key)
        }
      }
    })
    fantasyValuesAddOn["fNba_score"] = fantasyValueAverage(fantasyValuesAddOn, statCategory)
    fantasyValuesArray.push(fantasyValuesAddOn)
  })

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
    if (selected) averageValue.push(player[category])
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