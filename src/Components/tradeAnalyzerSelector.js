import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { AutoComplete } from 'primereact/autocomplete';
import { Button } from 'primereact/button'
import computeTradeScore from '../StatFunctions/computeTradeScore'
import { computeFantasyValue } from '../StatFunctions/computeFantasyValue'
import { combineValues } from '../StatFunctions/combineValues';

function TradeAnalyzerSelector() {
//STATE
  const allPlayers = useSelector((state) => state.playerAverages)
  const categories = useSelector((state) => state.categories)

  const [teamAPlayers, setTeamAPlayers] = useState(null)
  const [teamBPlayers, setTeamBPlayers] = useState(null)
  const [filteredPlayers, setFilteredPlayers] = useState(null)
  const [formError, setFormError] = useState(false)

  const searchPlayers = (event) => {
    setTimeout(() => {
      let filteredPlayers;
      if (!event.query.trim().length) {
        filteredPlayers = [...allPlayers];
      }
      else {
        filteredPlayers = allPlayers.filter((allPlayers) => {
          return allPlayers.name.toLowerCase().startsWith(event.query.toLowerCase());
          // return allPlayers.name.toLowerCase().includes(event.query.toLowerCase());
        });
      }
      setFilteredPlayers(filteredPlayers);
    }, 250);
  }

  //ELEMENT TEMPLATES

  const itemTemplate = (item) => {
    return (
      <div >
        <div>{item.name}</div>
      </div>
    );
  }

  const formErrorTemplate = () => {
    return (
      <div style={{ color: "red" }}>Both sides must have players selected.</div>
    )
  }

  const clickHandler = () => {
    if (teamAPlayers && teamBPlayers) {
      const fantasyValues = computeFantasyValue(allPlayers, categories)
      const combinedValues = combineValues(allPlayers, fantasyValues)
      const tradeScore = computeTradeScore(teamAPlayers, teamBPlayers, categories)
      setFormError(false)
    } else {
      setFormError(true)
    }
    return null
  }

  //RENDER
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
          {formError ? formErrorTemplate() : null}
        </div>
        <Button onClick={clickHandler} label="Compare Trade" className="p-button-raised" style={{ margin: "10px" }} />
      </div>
    </>
  )

}


export default TradeAnalyzerSelector