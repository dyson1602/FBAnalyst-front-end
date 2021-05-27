import { useEffect, useState } from 'react'
import { ToggleButton } from 'primereact/togglebutton'
import { connect } from 'react-redux'
import { setCategories } from '../Redux/actions';
import styled from 'styled-components'

const CategorySelector = (props) => {

  const [points, setPoints] = useState(true);
  const [assists, setAssists] = useState(true);
  const [rebounds, setRebounds] = useState(true);
  const [blocks, setBlocks] = useState(true);
  const [steals, setSteals] = useState(true);
  const [fgp, setFgp] = useState(true);
  const [ftp, setFtp] = useState(true);
  const [tpoint, setTpoint] = useState(true);
  // const [turnovers, setTurnovers] = useState(false);

  const categoriesObj = {
    fNba_points: points,
    fNba_assists: assists,
    fNba_tot_reb: rebounds,
    fNba_blocks: blocks,
    fNba_steals: steals,
    fNba_fgp: fgp,
    fNba_ftp: ftp,
    fNba_tpm: tpoint,
    // fNba_turnovers: turnovers
  }

  useEffect(() => {
    props.dispatchSetCategories(categoriesObj)
  }, [categoriesObj])

  return (
    <>
      <div className="selector-div">
          <span className="category-span">Select Catergories: </span>
          <Toggler checked={points} onChange={(e) => setPoints(e.value)} onLabel="Pts" offLabel="Pts" onIcon="pi pi-check" offIcon="pi pi-times" />
          <Toggler checked={assists} onChange={(e) => setAssists(e.value)} onLabel="Ast" offLabel="Ast" onIcon="pi pi-check" offIcon="pi pi-times" />
          <Toggler checked={rebounds} onChange={(e) => setRebounds(e.value)} onLabel="Reb" offLabel="Reb" onIcon="pi pi-check" offIcon="pi pi-times" />
          <Toggler checked={blocks} onChange={(e) => setBlocks(e.value)} onLabel="Blk" offLabel="Blk" onIcon="pi pi-check" offIcon="pi pi-times" />
          <Toggler checked={steals} onChange={(e) => setSteals(e.value)} onLabel="Stl" offLabel="Stl" onIcon="pi pi-check" offIcon="pi pi-times" />
          <Toggler checked={fgp} onChange={(e) => setFgp(e.value)} onLabel="FG%" offLabel="FG%" onIcon="pi pi-check" offIcon="pi pi-times" />
          <Toggler checked={ftp} onChange={(e) => setFtp(e.value)} onLabel="FT%" offLabel="FT%" onIcon="pi pi-check" offIcon="pi pi-times" />
          <Toggler checked={tpoint} onChange={(e) => setTpoint(e.value)} onLabel="3Pt" offLabel="3Pt" onIcon="pi pi-check" offIcon="pi pi-times" />
      </div>
    </>
  )
}

const Card = styled.div`
  width: 60%;
  position: relative;
  margin: 30px; 
`

const Toggler = styled(ToggleButton)`
  width: 75px;
  margin: 5px;
  margin-top: 15px;
`

function mdp(dispatch) {
  return {
    dispatchSetCategories: (categories => dispatch(setCategories(categories)))
  }
}

export default connect(null, mdp)(CategorySelector)