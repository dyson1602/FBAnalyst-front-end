import './App.css';
import React from 'react'
import Footer from './Components/footer'
import Header from './Components/Header'
import MainContainer from './Containers/MainContainer'
import { connect } from 'react-redux'
import { setPlayers } from './Redux/actions'


class App extends React.Component {

  componentDidMount() {
    fetch('http://localhost:3000/players')
      .then(resp => resp.json())
      .then(players => {
        this.props.dispatchSetPlayers(players)
      })
  }

  render() {
    return (
      <>
        <Header />
        {this.props.playerData.length > 0 ? <MainContainer/> : null}
        <Footer />
      </>
    );
  }
}

function msp (state) {
  return {
    playerData: state.playerData
  }
}

function mdp(dispatch) {
  return {
    dispatchSetPlayers: (players) => dispatch(setPlayers(players)),
  }
}

export default connect(msp, mdp)(App)
