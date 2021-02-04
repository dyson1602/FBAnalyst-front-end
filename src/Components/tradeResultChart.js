import React, { useEffect, useState } from 'react'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useSelector } from 'react-redux'

function TradeResultChart() {

  const tradeScore = useSelector((state) => state.tradeScore)
  const categories = useSelector((state) => state.categories)

  const [yourPlayers, setYourPlayers] = useState()
  const [theirPlayers, setTheirPlayers] = useState()
  const [finalScore, setFinalScore] = useState(null)


  useEffect(() => {
    if (tradeScore) {
      setYourPlayers(tradeScoreToDataTable(tradeScore[0]))
      setTheirPlayers(tradeScoreToDataTable(tradeScore[1]))
      // setFinalScore(finalScoreFunction(yourPlayers,theirPlayers))
    }
  }, [tradeScore])

  useEffect(() => {

  }, [categories])

  useEffect(() => {
    if (yourPlayers && theirPlayers) {
      console.log("in useEffect to set final Score", finalScore)

      let localFS = [finalScoreFunction(yourPlayers, theirPlayers)]
      console.log("localFS: ", localFS)

      setFinalScore(localFS)
      console.log("final score; ", finalScore)
    }
  }, [yourPlayers])


  return (
    <>
      {/* {finalScore
        ? <> */}
      <h4>Your Players</h4>
      <DataTable value={yourPlayers} className="p-datatable-striped">
        <Column className="table-props" field="name" header="Name" ></Column>
        <Column className="table-props" field="fNba_score" header="fNba" ></Column>
        <Column className="table-props" field="position" header="Pos" ></Column>
        {/* <Column className="table-props" field="avg_mins" header="Mins" ></Column> */}
        {/* <Column className="table-props" field="avg_fga" header="FgA" ></Column> */}
        <Column className="table-props" field="fgp" header="Fg%" ></Column>
        {/* <Column className="table-props" field="avg_fta" header="FtA" ></Column> */}
        <Column className="table-props" field="ftp" header="Ft%" ></Column>
        <Column className="table-props" field="avg_tpm" header="TPM" ></Column>
        <Column className="table-props" field="avg_tot_reb" header="Reb" ></Column>
        <Column className="table-props" field="avg_assists" header="Ast" ></Column>
        <Column className="table-props" field="avg_steals" header="Stl" ></Column>
        <Column className="table-props" field="avg_blocks" header="Blk" ></Column>
        {/* <Column className="table-props" field="avg_turnovers" header="TO" ></Column> */}
        <Column className="table-props" field="avg_points" header="Pts" ></Column>
        <Column className="table-props" field="fNba_ftp" header="fFt%" ></Column>
        <Column className="table-props" field="fNba_fgp" header="fFg%" ></Column>
        <Column className="table-props" field="fNba_tpm" header="fTPM" ></Column>
        <Column className="table-props" field="fNba_assists" header="fAst" ></Column>
        <Column className="table-props" field="fNba_tot_reb" header="fReb" ></Column>
        <Column className="table-props" field="fNba_steals" header="fStl" ></Column>
        <Column className="table-props" field="fNba_blocks" header="fBlk" ></Column>
        {/* <Column className="table-props" field="fNba_turnovers" header="fTO" ></Column> */}
        <Column className="table-props" field="fNba_points" header="fPts" ></Column>
      </DataTable>
      <h4>Their Players</h4>
      <DataTable value={theirPlayers} className="p-datatable-striped">
        <Column className="table-props" field="name" header="Name" ></Column>
        <Column className="table-props" field="fNba_score" header="fNba" ></Column>
        <Column className="table-props" field="position" header="Pos" ></Column>
        {/* <Column className="table-props" field="avg_mins" header="Mins" ></Column> */}
        {/* <Column className="table-props" field="avg_fga" header="FgA" ></Column> */}
        <Column className="table-props" field="fgp" header="Fg%" ></Column>
        {/* <Column className="table-props" field="avg_fta" header="FtA" ></Column> */}
        <Column className="table-props" field="ftp" header="Ft%" ></Column>
        <Column className="table-props" field="avg_tpm" header="TPM" ></Column>
        <Column className="table-props" field="avg_tot_reb" header="Reb" ></Column>
        <Column className="table-props" field="avg_assists" header="Ast" ></Column>
        <Column className="table-props" field="avg_steals" header="Stl" ></Column>
        <Column className="table-props" field="avg_blocks" header="Blk" ></Column>
        {/* <Column className="table-props" field="avg_turnovers" header="TO" ></Column> */}
        <Column className="table-props" field="avg_points" header="Pts" ></Column>
        <Column className="table-props" field="fNba_ftp" header="fFt%" ></Column>
        <Column className="table-props" field="fNba_fgp" header="fFg%" ></Column>
        <Column className="table-props" field="fNba_tpm" header="fTPM" ></Column>
        <Column className="table-props" field="fNba_assists" header="fAst" ></Column>
        <Column className="table-props" field="fNba_tot_reb" header="fReb" ></Column>
        <Column className="table-props" field="fNba_steals" header="fStl" ></Column>
        <Column className="table-props" field="fNba_blocks" header="fBlk" ></Column>
        {/* <Column className="table-props" field="fNba_turnovers" header="fTO" ></Column> */}
        <Column className="table-props" field="fNba_points" header="fPts" ></Column>
      </DataTable>

      <div>
        <h4>Difference</h4>
        <DataTable value={finalScore} className="p-datatable-striped">
          <Column className="table-props" field="name" header="Name" ></Column>
          <Column className="table-props" field="fNba_score" header="fNba" ></Column>
          <Column className="table-props" field="position" header="Pos" ></Column>
          {/* <Column className="table-props" field="avg_mins" header="Mins" ></Column> */}
          {/* <Column className="table-props" field="avg_fga" header="FgA" ></Column> */}
          <Column className="table-props" field="fgp" header="Fg%" ></Column>
          {/* <Column className="table-props" field="avg_fta" header="FtA" ></Column> */}
          <Column className="table-props" field="ftp" header="Ft%" ></Column>
          <Column className="table-props" field="avg_tpm" header="TPM" ></Column>
          <Column className="table-props" field="avg_tot_reb" header="Reb" ></Column>
          <Column className="table-props" field="avg_assists" header="Ast" ></Column>
          <Column className="table-props" field="avg_steals" header="Stl" ></Column>
          <Column className="table-props" field="avg_blocks" header="Blk" ></Column>
          {/* <Column className="table-props" field="avg_turnovers" header="TO" ></Column> */}
          <Column className="table-props" field="avg_points" header="Pts" ></Column>
          <Column className="table-props" field="fNba_ftp" header="fFt%" ></Column>
          <Column className="table-props" field="fNba_fgp" header="fFg%" ></Column>
          <Column className="table-props" field="fNba_tpm" header="fTPM" ></Column>
          <Column className="table-props" field="fNba_assists" header="fAst" ></Column>
          <Column className="table-props" field="fNba_tot_reb" header="fReb" ></Column>
          <Column className="table-props" field="fNba_steals" header="fStl" ></Column>
          <Column className="table-props" field="fNba_blocks" header="fBlk" ></Column>
          {/* <Column className="table-props" field="fNba_turnovers" header="fTO" ></Column> */}
          <Column className="table-props" field="fNba_points" header="fPts" ></Column>
        </DataTable>
        {/* {!finalScore
          ? null
          : finalScore.fNba_score > 0
            ? <span style={{color: "darkgreen"}}>You win this trade!</span>
            : <span style={{color: "red"}}>This is a poor trade for you</span>} */}
      </div>
    </>
    //     : null}
    // </>
  )
}

function tradeScoreToDataTable(tradeScore) {
  let adjustedForTable = []

  let totalsRow = tradeScore[1]
  totalsRow.name = "TOTALS"

  adjustedForTable = [...tradeScore[0], totalsRow]
  return adjustedForTable
}

function finalScoreFunction(yourPlayers, theirPlayers) {
  let fs = {}
  const holdYourPlayers = [...yourPlayers]
  let categories = holdYourPlayers.pop()
  const holdTheirPlayers = [...theirPlayers]
  const theirStats = holdTheirPlayers.pop()

  for (const category in categories) {
    if (category !== "name") {
      if (categories[category] > theirStats[category]) {
        fs[category] = -parseFloat((categories[category] - theirStats[category]).toFixed(2))
      } else if (categories[category] < theirStats[category]) {
        fs[category] = parseFloat(Math.abs(categories[category] - theirStats[category]).toFixed(2))
      } else {
        fs[category] = 0.0
      }
    }
  }
  fs.name = "FINAL SCORE"
  return fs
}

export default TradeResultChart