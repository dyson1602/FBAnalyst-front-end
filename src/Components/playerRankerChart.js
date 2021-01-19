import React from 'react'
import { connect } from 'react-redux'

class PlayerRankerChart extends React.Component {


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
    playerAverages: state.playerAverages
  }
}

export default connect(msp)(PlayerRankerChart)