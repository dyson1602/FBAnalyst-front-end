import TradeAnalyzerSelector from '../Components/tradeAnalyzerSelector'
import TradeResultChart from '../Components/tradeResultChart'
import CategorySelector from '../Components/categorySelector'


function TradeAnalyzerContainer() {

  

  return (
    <>
      <div style={{ margin: "10px"}}>
        <CategorySelector />
      </div>
      <div style={{display: "block", width: "50%", alignItems: "center"}}>
        <TradeAnalyzerSelector />
      </div>
      <div style={{ margin: "10px"}}>
        <TradeResultChart />
      </div>
    </>
  )
}

export default TradeAnalyzerContainer