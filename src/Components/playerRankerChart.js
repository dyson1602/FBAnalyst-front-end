import React, { useState, useEffect } from 'react'
import { connect, useSelector } from 'react-redux'
import { setFantasyValues } from '../Redux/actions'
import { computeFantasyValue } from '../StatFunctions/computeFantasyValue'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button'
import { combineValues } from '../StatFunctions/combineValues'
import styled from 'styled-components'

function PlayerRankerChart() {

  const categories = useSelector((state) => state.categories)
  const playerAverages = useSelector((state) => state.playerAverages)

  const [combinedValues, setCombinedValues] = useState()

  useEffect(() => {
    if (categories) {
      const fantasyValues = computeFantasyValue(playerAverages, categories)
      const combinedValues = combineValues(playerAverages, fantasyValues)
      
      const sortedCombinedValues = combinedValues.sort((a,b) => a.fNba_score - b.fNba_score )

      setCombinedValues(combinedValues)
    }
  }, [categories])

  const paginatorLeft = <Button type="button" icon="pi pi-refresh" className="p-button-text" />;
  const paginatorRight = <Button type="button" icon="pi pi-cloud" className="p-button-text" />;

  return (
    <>
      <div>
        <div className="card">
          <DataTable value={combinedValues} className="p-datatable" paginator sortField="fNba_score" sortOrder={-1}
            paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords}" rows={10} rowsPerPageOptions={[10, 20, 50]}
            paginatorLeft={paginatorLeft} paginatorRight={paginatorRight}>
            <Column className="table-props" field="fNba_score" header="fNba" sortable ></Column>
            <Column className="table-props" style={{width: "75px"}} field="name" header="Name" sortable></Column>
            <Column className="table-props" field="position" header="Pos" sortable></Column>
            <Column className="table-props" field="avg_mins" header="Mins" sortable></Column>
            <Column className="table-props" field="avg_fga" header="FgA" sortable></Column>
            <Column className="table-props" field="fgp" header="Fg%" sortable></Column>
            <Column className="table-props" field="avg_fta" header="FtA" sortable></Column>
            <Column className="table-props" field="ftp" header="Ft%" sortable></Column>
            <Column className="table-props" field="avg_tpm" header="TPM" sortable></Column>
            <Column className="table-props" field="avg_tot_reb" header="Reb" sortable></Column>
            <Column className="table-props" field="avg_assists" header="Ast" sortable></Column>
            <Column className="table-props" field="avg_steals" header="Stl" sortable></Column>
            <Column className="table-props" field="avg_blocks" header="Blk" sortable></Column>
            <Column className="table-props" field="avg_turnovers" header="TO" sortable></Column>
            <Column className="table-props" field="avg_points" header="Pts" sortable></Column>              
            <Column className="table-props" field="fNba_ftp" header="fFt%" sortable></Column>
            <Column className="table-props" field="fNba_fgp" header="fFg%" sortable></Column>
            <Column className="table-props" field="fNba_tpm" header="fTPM" sortable></Column>
            <Column className="table-props" field="fNba_assists" header="fAst" sortable></Column>
            <Column className="table-props" field="fNba_tot_reb" header="fReb" sortable></Column>
            <Column className="table-props" field="fNba_steals" header="fStl" sortable></Column>
            <Column className="table-props" field="fNba_blocks" header="fBlk" sortable></Column>
            <Column className="table-props" field="fNba_turnovers" header="fTO" sortable></Column>
            <Column className="table-props" field="fNba_points" header="fPts" sortable></Column>
          </DataTable>
        </div>
      </div>
    </>
  )
}

function mdp(dispatch) {
  return {
    dispatchSetFantasyValue: (fantasyValues) => dispatch(setFantasyValues(fantasyValues))
  }
}

// export default connect(msp, mdp)(PlayerRankerChart)
export default connect(null, mdp)(PlayerRankerChart)

const ColoredColumn = styled(Column)`
  background-color: "green"
`

// background: {${field > 0 ? "green" : field < 0 ? "pink" : "white"}}