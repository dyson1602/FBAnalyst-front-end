import PlayerRankerChart from '../Components/playerRankerChart'
import CategorySelector from '../Components/categorySelector'

function PlayerRankerContainer() {

  return (
    <div className="my-container">
      <div className="card">
        <div style={{ margin: "10px"}}>
          <CategorySelector />
        </div>
      </div>
      <div style={{ margin: "10px" }}>
        <PlayerRankerChart />
      </div>
    </div>
  )
}

export default PlayerRankerContainer