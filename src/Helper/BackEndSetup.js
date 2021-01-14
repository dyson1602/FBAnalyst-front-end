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
        console.log(response);
      })
      .catch(err => {
        console.error(err);
      });
  }


  render() {
    return(
      <>
      Hey there
      </>
    )
  }
}



export default BackEndSetup