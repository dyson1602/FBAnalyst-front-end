import { NavLink } from 'react-router-dom'
import { TabMenu } from 'primereact/tabmenu';

const items = [
  {label: 'Home', icon: 'pi pi-fw pi-home'},
  {label: 'Player Ranker', icon: 'pi pi-fw pi-calendar'},
  {label: 'Trade Analyzer', icon: 'pi pi-fw pi-pencil'},
  {label: 'Player Stats', icon: 'pi pi-fw pi-file'},
  {label: 'Similar Player', icon: 'pi pi-fw pi-cog'}
];

function Header() {

  return (
    <div>
      <TabMenu model={items}/>
      {/* <ul>
        <NavLink to="/NBAnalyst/playerRanker">
          <li>Player Ranker</li>
        </NavLink>
        <NavLink to="/NBAnalyst/tradeAnalyzer">
          <li>Trade Analyzer</li>
        </NavLink>
        <NavLink to="/NBAnalyst/playerStats">
          <li>Player Stats</li>
        </NavLink>
      </ul> */}
    </div>
  )
}

export default Header