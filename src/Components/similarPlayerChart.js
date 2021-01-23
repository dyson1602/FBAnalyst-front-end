import React from 'react'
import { Chart } from 'primereact/chart'

class SimilarPlayerChart extends React.Component {

  state ={ 
    player: 1
  }

  chartData = {
    labels: ['Points', 'Rebounds', 'Assists', '3-Point', 'Blocks', 'Steals', 'FG %', "FT %"],
    datasets: [
      {
        label: 'Lebron James',
        backgroundColor: 'rgba(179,181,198,0.2)',
        borderColor: 'rgba(179,181,198,1)',
        pointBackgroundColor: 'rgba(179,181,198,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(179,181,198,1)',
        data: [65, 59, 90, 81, 56, 55, 40]
      },
      {
        label: 'Jerami Grant',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        pointBackgroundColor: 'rgba(255,99,132,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(255,99,132,1)',
        data: [28, 48, 40, 19, 96, 27, 100]
      }
    ]
  };

  lightOptions = {
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
  render() {
    return (
      <div className="card">
        <Chart type="radar" data={this.chartData} options={this.lightOptions} />
      </div>
    );
  }
}



export default SimilarPlayerChart