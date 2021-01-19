import React from 'react'
import PlayerRankerChart from '../Components/playerRankerChart'
import PlayerRankerSelector from '../Components/playerRankerSelector'
import { connect } from 'react-redux'
import { computeAverage } from '../StatFunctions/computeAverage'
import { setPlayerAverages } from '../Redux/actions'

class PlayerRankerContainer extends React.Component {

  componentDidMount() {
    let playerAverages = []
    let players = this.props.playerData
    for (const player in players) {
      playerAverages.push(computeAverage(players[player]))
    }
    this.props.dispatchSetPlayerAverages(playerAverages)
  }

  render() {
    return (
      <>
        <PlayerRankerChart />
        <PlayerRankerSelector />
      </>
    )
  }
}

function msp(state) {
  return {
    playerData: state.playerData,
    playerAverages: state.playerAverages
  }
}

function mdp(dispatch) {
  return {
    dispatchSetPlayerAverages: (playerAverages) => dispatch(setPlayerAverages(playerAverages)),
    // dispatchSetFantasyScore: (fantasyScoresArray) => dispatch(setFantasyScore(fantasyScoresArray)),
  }
}

export default connect(msp, mdp)(PlayerRankerContainer)