import TradeAnalyzerSelector from '../Components/tradeAnalyzerSelector'
import TradeResultChart from '../Components/tradeResultChart'
import CategorySelector from '../Components/categorySelector'
import { computeFantasyValue } from '../StatFunctions/computeFantasyValue'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { setFantasyValues } from '../Redux/actions'
import { connect } from 'react-redux'
import styled from 'styled-components'

const TradeAnalyzerContainer = (props) => {

  const playerAverages = useSelector((state) => state.playerAverages)
  const categories = useSelector((state) => state.categories)

  useEffect(() => {
    const fantasyValues = computeFantasyValue(playerAverages, categories)
    props.dispatchSetFantasyValue(fantasyValues)
  }, [playerAverages, categories])

  return (
    <div className="my-container">
      <Element >
        <CategorySelector />
      </Element>
      <Element>
        <TradeAnalyzerSelector />
      </Element>
      <Element>
        <div>
          <TradeResultChart />
        </div>
      </Element>
    </div>
  )
}

const Element = styled.div`
  margin: 10px;
  display: flex;
  justify-content: center;
`

function mdp(dispatch) {
  return {
    dispatchSetFantasyValue: (fantasyValues => dispatch(setFantasyValues(fantasyValues)))
  }
}

export default connect(null, mdp)(TradeAnalyzerContainer)