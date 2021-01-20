import React from 'react'
import { connect } from 'react-redux'
import { setFantasyValues } from '../Redux/actions'
import { computeFantasyValue } from '../StatFunctions/computeFantasyValue'


class PlayerRankerChart extends React.Component {

  componentDidMount(){
    let playerAverages = this.props.playerAverages
    let fantasyValues = computeFantasyValue(playerAverages)
    this.props.dispatchSetFantasyValue(fantasyValues)
  }

  render() {
    return (
      <>
        <div>Player Ranker Chart</div>
      </>
    )
  }

}

function msp(state) {
  return {
    playerData: state.playerData,
    playerAverages: state.playerAverages,
  }
}

function mdp(dispatch) {
  return {
    dispatchSetFantasyValue: (fantasyValues) => dispatch(setFantasyValues(fantasyValues))
  }
}

export default connect(msp, mdp)(PlayerRankerChart)