import './App.css';
import React from 'react'

class App extends React.Component {

  state = {
    response: {}
  }

  componentDidMount() {
    this.fetchYahooLeagueData(this.props)
  }


  fetchUserLeagueData = (props) => {
    //this function will fetch all user data stored in the rails back end
  }


  fetchYahooLeagueData = (props) => {
    //this function will access the yahoo database and pull all remote info for user's league
  }


  render() {
    return (
      <>
        YAHOO API TESTER
      </>
    );
  }
}

export default App;
