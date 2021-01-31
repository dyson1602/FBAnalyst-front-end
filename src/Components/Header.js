import { NavLink } from 'react-router-dom'
import finalLogo from '../images/finalLogo.png'

function Header() {

  return (
    <div className="navbar-fixed" >
      <nav className="hf-background" >
        <div className="nav-wrapper container">
          <NavLink to="/NBAnalyst" class=" right waves-effect waves-light">
            <div style={{ fontFamily: "Verdana, Geneva, sans-serif", fontSize: "36px", fontWeight: "900" }}>
              <img src={finalLogo}/>
            </div>
          </NavLink>
          <ul className="left hide-on-med-and-down">
            <li className="waves-effect waves-light">
              <NavLink to="/NBAnalyst/playerRanker">
                <div style={{ fontFamily: "Verdana, Geneva, sans-serif", fontSize: "24px", fontWeight: "700" }}>Player Ranker</div>
              </NavLink>
            </li>
            <li className="waves-effect waves-light">
              <NavLink to="/NBAnalyst/tradeAnalyzer">
                <div style={{ fontFamily: "Verdana, Geneva, sans-serif", fontSize: "24px", fontWeight: "700" }}>Trade Analyzer</div>
              </NavLink>
            </li>
            <li className="waves-effect waves-light">
              <NavLink to="/NBAnalyst/similarPlayers">
                <div style={{ fontFamily: "Verdana, Geneva, sans-serif", fontSize: "24px", fontWeight: "700" }}>Similar Players</div>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Header