import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { setPlayers } from '../Redux/actions'


class Header extends React.Component {

  componentDidMount() {
    fetch('http://localhost:3000/players')
      .then(resp => resp.json())
      .then(players => {
        this.props.dispatchSetPlayers(players)
      })
  }

  render() {
    return (
      <div>
        <ul>
          <NavLink to="/NBAnalyst/playerRanker">
            <li>Player Ranker</li>
          </NavLink>
          <NavLink to="/NBAnalyst/tradeAnalyzer">
            <li>Trade Analyzer</li>
          </NavLink>
          <NavLink to="/NBAnalyst/playerStats">
            <li>Player Stats</li>
          </NavLink>
        </ul>
      </div>
    )
  }
}

function msp(state) {
  return {
    playerAverages: state.playerAverages
  }
}

function mdp(dispatch) {
  return {
    dispatchSetPlayers: (players) => dispatch(setPlayers(players)),
  }
}

export default connect(msp, mdp)(Header)