import PlayerRankerChart from '../Components/playerRankerChart'
import CategorySelector from '../Components/categorySelector'
import styled from 'styled-components'

function PlayerRankerContainer() {

  return (
    <div>
      <PlayerRankerStyledDiv>
        <CategorySelector />
      </PlayerRankerStyledDiv>
      <PlayerRankerStyledDiv>
        <PlayerRankerChart />
      </PlayerRankerStyledDiv>
    </div>
  )
}

const PlayerRankerStyledDiv = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px;
`

export default PlayerRankerContainer