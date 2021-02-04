import PlayerRankerChart from '../Components/playerRankerChart'
import CategorySelector from '../Components/categorySelector'
import styled from 'styled-components'

function PlayerRankerContainer() {

  return (
    <div className="my-container">
      <Element>
        <CategorySelector />
      </Element>
      <Element>
        <PlayerRankerChart />
      </Element>
    </div>
  )
}

const Element = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px;
`

export default PlayerRankerContainer