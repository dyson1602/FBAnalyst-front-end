import React from 'react'
import PlayerRankerContainer from './PlayerRankerContainer'
import TradeAnalyzerContainer from './TradeAnalyzerContainer'
import WelcomePageContainer from './WelcomePageContainer'
import SimilarPlayersContainer from './SimilarPlayersContainer'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { setPlayerAverages } from '../Redux/actions'
import { computeAverage } from '../StatFunctions/computeAverage'

class MainContainer extends React.Component {

  componentDidMount() {
    if (this.props.playerData) {
      let playerAverages = []
      let players = this.props.playerData
      for (const player in players) {
        let pA = computeAverage(players[player])
        //games_played conditional needs to be adjusted to be dynamic
        if (pA.avg_mins > 0 && pA.games_played > 4) {
          playerAverages.push(pA)
        }
      }
      this.props.dispatchSetPlayerAverages(playerAverages)
    }
  }

  render() {
    return (
      <div className="my-container">
        <Switch>
          <Route exact path="/NBAnalyst" component={WelcomePageContainer} />
          <Route exact path="/NBAnalyst/playerRanker" component={PlayerRankerContainer} />
          <Route exact path="/NBAnalyst/tradeAnalyzer" component={TradeAnalyzerContainer} />
          <Route exact path="/NBAnalyst/similarPlayers" component={SimilarPlayersContainer} />
        </Switch>
      </div>
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