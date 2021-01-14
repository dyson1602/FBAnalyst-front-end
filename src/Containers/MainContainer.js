import PlayerRankerContainer from './PlayerRankerContainer'
import TradeAnalyzerContainer from './TradeAnalyzerContainer'
import { Route, Switch } from 'react-router-dom'

function MainContainer() {
  
  return (
    <Switch>
      <Route path="/NBAnalyst/playerRanker" component={PlayerRankerContainer} />
      <Route path="/NBAnalyst/tradeAnalyzer" component={TradeAnalyzerContainer} />
    </Switch>
  )
}

export default MainContainer