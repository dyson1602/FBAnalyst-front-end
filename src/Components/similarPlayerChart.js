import React, { useState, useEffect } from 'react'
import { Chart } from 'primereact/chart'
import { useSelector } from 'react-redux'
import { AutoComplete } from 'primereact/autocomplete'
import styled from 'styled-components'


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
          return allPlayers.name.toLowerCase().includes(event.query.toLowerCase());
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

  function testChart() {
    let chartData;
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
              firstPlayer.avg_points * .33,
              firstPlayer.avg_tot_reb,
              firstPlayer.avg_assists * 1.5,
              firstPlayer.avg_tpm * 3,
              firstPlayer.avg_blocks * 5,
              firstPlayer.avg_steals * 5,
              firstPlayer.fgp * .15,
              firstPlayer.ftp * .15,
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
              secondPlayer.avg_points * .33,
              secondPlayer.avg_tot_reb,
              secondPlayer.avg_assists * 1.5,
              secondPlayer.avg_tpm * 3,
              secondPlayer.avg_blocks * 4,
              secondPlayer.avg_steals * 4,
              secondPlayer.fgp * .15,
              secondPlayer.ftp * .15,
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
      },
      ticks: {
        suggestedMin: 0,
        suggestedMax: 15,
        display: false
      }
    }
  };

  return (
    <>
      <Wrapper>
        <Card className="card">
            <span className="p-fluid">
              <h5>First Player</h5>
              <AutoComplete
                value={firstPlayer}
                suggestions={filteredPlayers}
                completeMethod={searchPlayers}
                field="name" dropdown
                itemTemplate={itemTemplate}
                onChange={(e) => setFirstPlayer(e.value)} />
              <h5>Second Player</h5>
              <AutoComplete
                value={secondPlayer}
                suggestions={filteredPlayers}
                completeMethod={searchPlayers}
                field="name" dropdown
                itemTemplate={itemTemplate}
                onChange={(e) => setSecondPlayer(e.value)} />
            </span>
        </Card>
      </Wrapper>
      <br />
      <div className="card">
        {firstPlayer && secondPlayer ?
          <Chart type="radar" data={testChart()} options={lightOptions} />
          : <Chart type="radar" data={chartAxes} options={lightOptions} />
        }
      </div>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`
const Card = styled.div`
  margin: 10px;
  width: 50%;
  padding: 10px;
`

export default SimilarPlayerChart