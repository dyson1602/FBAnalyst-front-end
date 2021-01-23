import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { AutoComplete } from 'primereact/autocomplete';
import { Button } from 'primereact/button'
import computeTradeScore from '../StatFunctions/computeTradeScore'

function TradeAnalyzerSelector() {

  const allPlayers = useSelector((state) => state.playerAverages)

  const [teamAPlayers, setTeamAPlayers] = useState(null)
  const [teamBPlayers, setTeamBPlayers] = useState(null)
  const [filteredPlayers, setFilteredPlayers] = useState(null)

  const searchPlayers = (event) => {
    setTimeout(() => {
      let filteredPlayers;
      if (!event.query.trim().length) {
        filteredPlayers = [...allPlayers];
      }
      else {
        filteredPlayers = allPlayers.filter((allPlayers) => {
          return allPlayers.name.toLowerCase().startsWith(event.query.toLowerCase());
        });
      }
      setFilteredPlayers(filteredPlayers);
    }, 250);
  }

  const itemTemplate = (item) => {
    return (
      <div >
        <div>{item.name}</div>
      </div>
    );
  }

  const clickHandler = () => {
    const tradeScore = computeTradeScore(teamAPlayers,teamBPlayers)
    return null
  }

  return (
    <>
      <div className="card">
        <div style={{ display: "block", margin: "10px" }}>
          <span className="p-fluid">
            <h5>Your Player/s</h5>
            <AutoComplete value={teamAPlayers} suggestions={filteredPlayers} completeMethod={searchPlayers} field="name" multiple dropdown itemTemplate={itemTemplate} onChange={(e) => setTeamAPlayers(e.value)} />
            <h5>Opponent's Player/s</h5>
            <AutoComplete value={teamBPlayers} suggestions={filteredPlayers} completeMethod={searchPlayers} field="name" multiple dropdown itemTemplate={itemTemplate} onChange={(e) => setTeamBPlayers(e.value)} />
          </span>
        </div>
      <Button onClick={clickHandler} label="Compare Trade" className="p-button-raised"/>
      </div>
    </>
  )

}


export default TradeAnalyzerSelector