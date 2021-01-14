import React from 'react'


class BackEndSetup extends React.Component {

  state = {
    response: {}
  }



  componentDidMount() {
    // this.nbaStatsAPIFetch()
  }


  fetchUserLeagueData = (props) => {
    //this function will fetch all user data stored in the rails back end
  }


  fetchYahooLeagueData = (props) => {
    //this function will access the yahoo database and pull all remote info for user's league
  }


  nbaStatsAPIFetch = () => {
    fetch("https://api-nba-v1.p.rapidapi.com/statistics/players/playerId/1", {
      method: "GET",
      headers: {
        "x-rapidapi-key": "e8f286527fmsh396120bc897d327p143df6jsn08ab7ca95a38",
        "x-rapidapi-host": "api-nba-v1.p.rapidapi.com"
      }
    })
      .then(resp => resp.json())
      .then(response => {
        console.log(response)
        //function here that makes a POST request to my API so that I can calculate 
      })
      .catch(err => {
        console.error(err);
      });
  }


  clickHandler = (e) => {
    const option = e.target.name
    console.log('option: ', option)
    switch(option) {
      case "games":
        console.log('games has been clicked')
        break
      case "players":
        console.log('players has been clicked')
        break
      case "player-games":
        console.log('player-games has been clicked')
        break
      case "team-games":
        console.log('team-games has been clicked')
        break
      case "teams":
        console.log('teams has been clicked')
        break
      default:
        return
    }

  }

  render() {
    return (
      <>
        <button name="games" onClick={this.clickHandler}>Update Games</button>
        <button name="players" onClick={this.clickHandler}>Update Players</button>
        <button name="player-games" onClick={this.clickHandler}>Update Player Games</button>
        <button name="team-games" onClick={this.clickHandler}>Update NBA Team Games</button>
        <button name="teams" onClick={this.clickHandler}>Update NBA Teams</button>
      </>
    )
  }
}



export default BackEndSetup