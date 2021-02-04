import React, { useState, useEffect } from 'react'
import { useSelector, connect } from 'react-redux'
import { AutoComplete } from 'primereact/autocomplete';
import { Button } from 'primereact/button'
import computeTradeScore from '../StatFunctions/computeTradeScore'
import { combineValues } from '../StatFunctions/combineValues';
import { setTradeScore } from '../Redux/actions';
import styled from 'styled-components'

const TradeAnalyzerSelector = (props) => {
 
  const allPlayers = useSelector((state) => state.playerAverages)
  const categories = useSelector((state) => state.categories)
  const fantasyValues = useSelector((state) => state.fantasyValues)

  useEffect(() => {
    setCombinedValues(combineValues(allPlayers, fantasyValues))
  }, [fantasyValues])

  useEffect(() => {
    setCombinedValues(combineValues(allPlayers, fantasyValues))
  }, [])

  const [teamAPlayers, setTeamAPlayers] = useState(null)
  const [teamBPlayers, setTeamBPlayers] = useState(null)
  const [filteredPlayers, setFilteredPlayers] = useState(null)
  const [formError, setFormError] = useState(false)
  const [combinedValues, setCombinedValues] = useState(combineValues(allPlayers, fantasyValues))

  const searchPlayers = (event) => {
    setTimeout(() => {
      let filteredPlayers;
      if (!event.query.trim().length) {
        filteredPlayers = [...combinedValues];
      }
      else {
        filteredPlayers = combinedValues.filter((allPlayers) => {
          return allPlayers.name.toLowerCase().startsWith(event.query.toLowerCase());
          // return allPlayers.name.toLowerCase().includes(event.query.toLowerCase());
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

  const formErrorTemplate = () => {
    return (
      <div style={{ color: "red" }}>Both sides must have players selected.</div>
    )
  }

  const clickHandler = () => {
    if (teamAPlayers && teamBPlayers) {
      const tradeScore = computeTradeScore(teamAPlayers, teamBPlayers, categories)
      props.dispatchSetTradeScores(tradeScore)
      setFormError(false)
    } else {
      setFormError(true)
    }
    return null
  }

  return (
    <>
      <Wrapper className="card">
          <span className="p-fluid">
            <h5>Your Player/s</h5>
            <AutoComplete value={teamAPlayers} suggestions={filteredPlayers} completeMethod={searchPlayers} field="name" multiple dropdown itemTemplate={itemTemplate} onChange={(e) => setTeamAPlayers(e.value)} />
            <h5>Their Player/s</h5>
            <AutoComplete value={teamBPlayers} suggestions={filteredPlayers} completeMethod={searchPlayers} field="name" multiple dropdown itemTemplate={itemTemplate} onChange={(e) => setTeamBPlayers(e.value)} />
          </span>
          {formError ? formErrorTemplate() : null}
        <Button onClick={clickHandler} label="Compare Trade" className="p-button-raised" style={{ margin: "10px" }} />
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  width: 50%;
  padding: 10px;
`

function mdp(dispatch) {
  return {
    dispatchSetTradeScores: tradeScore => dispatch(setTradeScore(tradeScore))
  }
}

export default connect(null, mdp)(TradeAnalyzerSelector)