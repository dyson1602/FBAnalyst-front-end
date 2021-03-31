import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import finalLogo from '../images/FBAnalystLogo.png'

function Header() {

  return (
    <div className="navbar-fixed" >
      <nav className="hf-background" >
        <div className="nav-wrapper container">
          <NavLink to="/FBAnalyst" class=" right waves-effect waves-light">
            <div>
              <img src={finalLogo} />
            </div>
          </NavLink>
          <ul className="left hide-on-med-and-down">
            <li className="waves-effect waves-light">
              <NavLink to="/FBAnalyst/playerRanker">
                <LinkText >Player Ranker</LinkText>
              </NavLink>
            </li>
            <li className="waves-effect waves-light">
              <NavLink to="/FBAnalyst/tradeAnalyzer">
                <LinkText >Trade Analyzer</LinkText>
              </NavLink>
            </li>
            <li className="waves-effect waves-light">
              <NavLink to="/FBAnalyst/similarPlayers">
                <LinkText >Similar Players</LinkText>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

const LinkText = styled.div`
  font-family: Verdana, Geneva, sans-serif;
  font-size: 24px;
  font-weight: 700;
`

export default Header