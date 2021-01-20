import React from 'react'
import PlayerRankerContainer from './PlayerRankerContainer'
import TradeAnalyzerContainer from './TradeAnalyzerContainer'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { setPlayerAverages } from '../Redux/actions'
import { computeAverage } from '../StatFunctions/computeAverage'

class MainContainer extends React.Component {
      
  componentDidMount() {  
    if (this.props.playerData){
      let playerAverages = []
      let players = this.props.playerData
      for (const player in players) {
        playerAverages.push(computeAverage(players[player]))
      }
      this.props.dispatchSetPlayerAverages(playerAverages)
    }
  }
  
  render(){
    console.log('mounted')
    return (
      <Switch>
        <Route path="/NBAnalyst/playerRanker" component={PlayerRankerContainer} />
        <Route path="/NBAnalyst/tradeAnalyzer" component={TradeAnalyzerContainer} />
      </Switch>
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
  }
}

export default connect(msp, mdp)(MainContainer)