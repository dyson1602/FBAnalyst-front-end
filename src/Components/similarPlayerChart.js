import React, { useState, useEffect } from 'react'
import { Chart } from 'primereact/chart'
import { useSelector } from 'react-redux'
import { AutoComplete } from 'primereact/autocomplete'


const SimilarPlayerChart = () => {

  const playerAverages = useSelector((state) => state.playerAverages)

  const [firstPlayer, setFirstPlayer] = useState()
  const [secondPlayer, setSecondPlayer] = useState()
  const [filteredPlayers, setFilteredPlayers] = useState()

  const searchPlayers = (event) => {
    setTimeout(() => {
      let filteredPlayers;
      if (!event.query.trim().length) {
        filteredPlayers = [...playerAverages];
      }
      else {
        filteredPlayers = playerAverages.filter((allPlayers) => {
          return allPlayers.name.toLowerCase().startsWith(event.query.toLowerCase());
          // return allPlayers.name.toLowerCase().includes(event.query.toLowerCase());
        });
      }
      setFilteredPlayers(filteredPlayers);
    }, 250);
    console.log(firstPlayer, secondPlayer)
  }

  const itemTemplate = (item) => {
    return (
      <div >
        <div>{item.name}</div>
      </div>
    );
  }

  let chartAxes = {
    labels: ['Points', 'Rebounds', 'Assists', '3-Point', 'Blocks', 'Steals', 'FG %', "FT %"]
  }

  let chartData;

  function testChart() {
    if (firstPlayer && secondPlayer) {
      chartData = {
        labels: ['Points', 'Rebounds', 'Assists', '3-Point', 'Blocks', 'Steals', 'FG %', "FT %"],
        datasets: [
          {
            label: firstPlayer.name,
            backgroundColor: 'rgba(179,181,198,0.2)',
            borderColor: 'rgba(179,181,198,1)',
            pointBackgroundColor: 'rgba(179,181,198,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(179,181,198,1)',
            data: [
              firstPlayer.avg_points,
              firstPlayer.avg_tot_reb,
              firstPlayer.avg_assists,
              firstPlayer.avg_tpm,
              firstPlayer.avg_blocks,
              firstPlayer.avg_steals,
              firstPlayer.fgp,
              firstPlayer.ftp,
              ]
          },
          {
            label: secondPlayer.name,
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            pointBackgroundColor: 'rgba(255,99,132,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(255,99,132,1)',
            data: [
              secondPlayer.avg_points,
              secondPlayer.avg_tot_reb,
              secondPlayer.avg_assists,
              secondPlayer.avg_tpm,
              secondPlayer.avg_blocks,
              secondPlayer.avg_steals,
              secondPlayer.fgp,
              secondPlayer.ftp,
              ]
          }
        ]
      };
      return chartData
    }
  }
  const lightOptions = {
    legend: {
      labels: {
        fontColor: '#495057'
      }
    },
    scale: {
      pointLabels: {
        fontColor: '#495057'
      },
      gridLines: {
        color: '#ebedef'
      }
    }
  };


  return (
    <>
      <div className="card">
        <div style={{ display: "block", margin: "10px" }}>
          <span className="p-fluid">
            <h5>First Player</h5>
            <AutoComplete value={firstPlayer} suggestions={filteredPlayers} completeMethod={searchPlayers} field="name" dropdown itemTemplate={itemTemplate} onChange={(e) => setFirstPlayer(e.value)} />
            <h5>Second Player</h5>
            <AutoComplete value={secondPlayer} suggestions={filteredPlayers} completeMethod={searchPlayers} field="name" dropdown itemTemplate={itemTemplate} onChange={(e) => setSecondPlayer(e.value)} />
          </span>
        </div>
        {/* <Button onClick={clickHandler} label="Compare Trade" className="p-button-raised" style={{ margin: "10px" }} /> */}
      </div>
      <div className="card">
        {firstPlayer && secondPlayer ?
          <Chart type="radar" data={testChart()} options={lightOptions} />
          : <Chart type="radar" data={chartAxes} options={lightOptions} />
        }
      </div>
    </>
  );

}



export default SimilarPlayerChart