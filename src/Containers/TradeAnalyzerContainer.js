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
    <div className="my-container">
      <div style={{ margin: "10px", display: "flex", justifyContent: "center"}} >
        <CategorySelector />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <TradeAnalyzerSelector />
      </div>
      <div style={{ margin: "10px", marginBottom: "30px" }}>
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