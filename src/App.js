import './App.css';
import React from 'react'
import Footer from './Components/footer'
import Header from './Components/Header'
import MainContainer from './Containers/MainContainer'
import { connect } from 'react-redux'
import { setPlayers } from './Redux/actions'
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

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
      <div className="container">
        <Header />
        {this.props.playerData.length > 0 ? <MainContainer/> : null}
        <Footer />
      </div>
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
