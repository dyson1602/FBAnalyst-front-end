import PlayerRankerChart from '../Components/playerRankerChart'
import CategorySelector from '../Components/categorySelector'

function PlayerRankerContainer () {

  return (
    <div className="my-container">
      <CategorySelector />
      <PlayerRankerChart />
    </div>
  )
}


export default PlayerRankerContainer