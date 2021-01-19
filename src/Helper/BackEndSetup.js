import React from 'react'


class BackEndSetup extends React.Component {

  //Remote API Fetches

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

  getRemoteTeamsFetch = () => {
    fetch("https://api-nba-v1.p.rapidapi.com/teams/league/standard", {
      method: "GET",
      headers: {
        "x-rapidapi-key": "e8f286527fmsh396120bc897d327p143df6jsn08ab7ca95a38",
        "x-rapidapi-host": "api-nba-v1.p.rapidapi.com"
      }
    })
      .then(resp => resp.json())
      .then(response => {
        console.log(response)
        let nbaTeams = this.teamControl(response)
        // for (const team of nbaTeams) {
        //   this.postLocalTeamsFetch(team)
        // }
        this.postLocalTeamsFetch(nbaTeams[0])
      })
      .catch(err => {
        console.error(err);
      });
  }

  postLocalTeamsFetch = (team) => {
    
    const teamObj = {
      api_id: parseInt(team.teamId),
      name: team.fullName,
      abrev: team.shortName,
      logo_url: team.logo,
    }

    fetch("http://localhost:3000/nba_teams", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(teamObj)
    })
    .then(response => response.json())
    .then(data => {console.log('success')})
  }


  //Local API POST control functions

  teamControl = (apiResponse) => {
    //need the team.teamId because Stephen A Smith's allstar team shows up as an NBA franchise
    let nbaTeams = apiResponse.api.teams.filter(team => team.nbaFranchise === "1" && team.teamId !== "37")
    return nbaTeams
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
        this.getRemoteTeamsFetch()
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