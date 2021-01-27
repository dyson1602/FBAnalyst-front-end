import PlayerRankerChart from '../Components/playerRankerChart'
import CategorySelector from '../Components/categorySelector'

function PlayerRankerContainer() {

  return (
    <div className="my-container">
      <div style={{ margin: "10px", display: "flex", justifyContent: "center"}}>
        <CategorySelector />
      </div>
      <div style={{ margin: "10px" }}>
        <PlayerRankerChart />
      </div>
    </div>
  )
}

export default PlayerRankerContainer