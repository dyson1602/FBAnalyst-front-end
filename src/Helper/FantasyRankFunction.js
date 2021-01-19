import { connect } from 'react-redux'
import { setFantasyScore } from '../Redux/actions'

function fantasyScore(playerAverages) {

  let league = playerAverages

  let avg = ["test obj"]

  let leagueAveragesObj = {
    leagueAvgMins: leagueAvgMins(league),
    // avg_fgm: self.avg_fgm,
    // avg_fga: self.avg_fga,
    // fgp: self.fgp,
    // avg_ftm: self.avg_ftm,
    // avg_fta: self.avg_fta,
    // ftp: self.ftp,
    // avg_tpm: self.avg_tpm,
    // avg_tpa: self.avg_tpa,
    // tpp: self.tpp,
    // avg_off_reb: self.avg_off_reb,
    // avg_def_reb: self.avg_def_reb,
    // avg_tot_reb: self.avg_tot_reb,
    // avg_assists: self.avg_assists,
    // avg_steals: self.avg_steals,
    // avg_blocks: self.avg_blocks,
    // avg_turnovers: self.avg_turnovers,
    // avg_plus_minus: self.avg_plus_minus,
    // avg_p_fouls: self.avg_p_fouls,
    // avg_points: self.avg_points
  }

  // for (const player in props.playerAverages) {
  // }

  return avg
}

function leagueAvgMins(league) {
  let sum = 0
  for (const player in league) {
    sum += player["mins"]
  }
  return (sum / league.length)
}

// player_averages = {
//   name: self.name,
//   nba_team_id: self.nba_team_id,
//   position: self.position,
//   avg_mins: self.avg_mins,
//   avg_fgm: self.avg_fgm,
//   avg_fga: self.avg_fga,
//   fgp: self.fgp,
//   avg_ftm: self.avg_ftm,
//   avg_fta: self.avg_fta,
//   ftp: self.ftp,
//   avg_tpm: self.avg_tpm,
//   avg_tpa: self.avg_tpa,
//   tpp: self.tpp,
//   avg_off_reb: self.avg_off_reb,
//   avg_def_reb: self.avg_def_reb,
//   avg_tot_reb: self.avg_tot_reb,
//   avg_assists: self.avg_assists,
//   avg_steals: self.avg_steals,
//   avg_blocks: self.avg_blocks,
//   avg_turnovers: self.avg_turnovers,
//   avg_plus_minus: self.avg_plus_minus,
//   avg_p_fouls: self.avg_p_fouls,
//   avg_points: self.avg_points
// }



function msp(state) {
  return {
    playerAverages: state.playerAverages
  }
}

function mdp(dispatch) {
  return {
    dispatchSetFantasyScore: (fantasyScoresArray) => dispatch(setFantasyScore(fantasyScoresArray)),
  }
}

export default connect(msp, mdp)(fantasyScore)