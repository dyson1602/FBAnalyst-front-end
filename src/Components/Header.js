import { NavLink } from 'react-router-dom'

function Header() {

  return (
    <div className="navbar-fixed">
      <nav className="hf-background">
        <div className="nav-wrapper container">

          <NavLink to="/NBAnalyst" class="brand-logo right waves-effect waves-light">
            NBAnalyst
          </NavLink>

          <ul className="left hide-on-med-and-down">
            <li className="waves-effect waves-light">
              <NavLink to="/NBAnalyst/playerRanker">
                <div>Player Ranker</div>
              </NavLink>
            </li>
            <li className="waves-effect waves-light">
              <NavLink to="/NBAnalyst/tradeAnalyzer">
                <div>Trade Analyzer</div>
              </NavLink>
            </li>
            <li className="waves-effect waves-light">
              <NavLink to="/NBAnalyst/similarPlayers">
                <div>Similar Players</div>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Header