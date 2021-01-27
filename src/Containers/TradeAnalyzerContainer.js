import TradeAnalyzerSelector from '../Components/tradeAnalyzerSelector'
import TradeResultChart from '../Components/tradeResultChart'
import CategorySelector from '../Components/categorySelector'
import { computeFantasyValue } from '../StatFunctions/computeFantasyValue'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { setFantasyValues } from '../Redux/actions'
import { connect } from 'react-redux'

const TradeAnalyzerContainer = (props) => {

  const playerAverages = useSelector((state) => state.playerAverages)
  const categories = useSelector((state) => state.categories)

  useEffect(() => {
    const fantasyValues = computeFantasyValue(playerAverages, categories)
    props.dispatchSetFantasyValue(fantasyValues)
  }, [playerAverages, categories])

  return (
    <div>
      <div className="card" style={{ margin: "10px", width: "800px", height: "100px" }}>
        <CategorySelector />
      </div>
      <div style={{ display: "block", width: "50%", alignItems: "center" }}>
        <TradeAnalyzerSelector />
      </div>
      <div style={{ margin: "10px" }}>
        <TradeResultChart />
      </div>
    </div>
  )
}

function mdp(dispatch) {
  return {
    dispatchSetFantasyValue: (fantasyValues => dispatch(setFantasyValues(fantasyValues)))
  }
}

export default connect(null, mdp)(TradeAnalyzerContainer)