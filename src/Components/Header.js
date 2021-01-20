import { NavLink } from 'react-router-dom'


function Header() {

  return (
    <div>
      <ul>
        <NavLink to="/NBAnalyst/playerRanker">
          <li>Player Ranker</li>
        </NavLink>
        <NavLink to="/NBAnalyst/tradeAnalyzer">
          <li>Trade Analyzer</li>
        </NavLink>
        <NavLink to="/NBAnalyst/playerStats">
          <li>Player Stats</li>
        </NavLink>
      </ul>
    </div>
  )
}

export default Header