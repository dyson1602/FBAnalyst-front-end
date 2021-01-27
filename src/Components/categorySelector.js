import { useEffect, useState } from 'react'
import { ToggleButton } from 'primereact/togglebutton'
import { Button } from 'primereact/button'
import { connect } from 'react-redux'
import { setCategories } from '../Redux/actions';

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

  // const clickHandler = () => {
  //   props.dispatchSetCategories(categoriesObj)
  // }

  return (
    <>
      <div className="card" style={{ width: "60%", position: "relative", margin: "30px" }}>
        <div className="selector-div">
          {/* <div className="selector-centered"> */}
            <span className="category-span">Select Catergories: </span>
            <ToggleButton checked={points} onChange={(e) => setPoints(e.value)} onLabel="Pts" offLabel="Pts" onIcon="pi pi-check" offIcon="pi pi-times" style={{ width: '75px', margin: "5px" }} />
            <ToggleButton checked={assists} onChange={(e) => setAssists(e.value)} onLabel="Ast" offLabel="Ast" onIcon="pi pi-check" offIcon="pi pi-times" style={{ width: '75px', margin: "5px" }} />
            <ToggleButton checked={rebounds} onChange={(e) => setRebounds(e.value)} onLabel="Reb" offLabel="Reb" onIcon="pi pi-check" offIcon="pi pi-times" style={{ width: '75px', margin: "5px", marginTop: "20px" }} />
            <ToggleButton checked={blocks} onChange={(e) => setBlocks(e.value)} onLabel="Blk" offLabel="Blk" onIcon="pi pi-check" offIcon="pi pi-times" style={{ width: '75px', margin: "5px" }} />
            <ToggleButton checked={steals} onChange={(e) => setSteals(e.value)} onLabel="Stl" offLabel="Stl" onIcon="pi pi-check" offIcon="pi pi-times" style={{ width: '75px', margin: "5px" }} />
            <ToggleButton checked={fgp} onChange={(e) => setFgp(e.value)} onLabel="FG%" offLabel="FG%" onIcon="pi pi-check" offIcon="pi pi-times" style={{ width: '75px', margin: "5px" }} />
            <ToggleButton checked={ftp} onChange={(e) => setFtp(e.value)} onLabel="FT%" offLabel="FT%" onIcon="pi pi-check" offIcon="pi pi-times" style={{ width: '75px', margin: "5px" }} />
            <ToggleButton checked={tpoint} onChange={(e) => setTpoint(e.value)} onLabel="3Pt" offLabel="3Pt" onIcon="pi pi-check" offIcon="pi pi-times" style={{ width: '75px', margin: "5px" }} />
            {/* <ToggleButton checked={turnovers} onChange={(e) => setTurnovers(e.value)} onLabel="TO" offLabel="TO" onIcon="pi pi-check" offIcon="pi pi-times" style={{ width: '75px' }} /> */}
            {/* <Button onClick={clickHandler} label="Set Parameters" className="p-button-raised" /> */}
          {/* </div> */}
        </div>
      </div>
    </>
  )
}

function mdp(dispatch) {
  return {
    dispatchSetCategories: (categories => dispatch(setCategories(categories)))
  }
}

export default connect(null, mdp)(CategorySelector)