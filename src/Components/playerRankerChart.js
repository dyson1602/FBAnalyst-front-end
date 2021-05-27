import React, { useState, useEffect } from 'react'
import { connect, useSelector } from 'react-redux'
import { setFantasyValues } from '../Redux/actions'
import { computeFantasyValue } from '../StatFunctions/computeFantasyValue'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button'
import { combineValues } from '../StatFunctions/combineValues'
import styled from 'styled-components'

const StyledDataTable = styled(DataTable)`
font-family:Verdana, Geneva, Tahoma, sans-serif;
font-size: 12px;
font-weight: bolder;
`

function PlayerRankerChart() {


  const categories = useSelector((state) => state.categories)
  const playerAverages = useSelector((state) => state.playerAverages)

  const [combinedValues, setCombinedValues] = useState()

  useEffect(() => {
    if (categories) {
      const fantasyValues = computeFantasyValue(playerAverages, categories)
      const combinedValues = combineValues(playerAverages, fantasyValues)
      console.log("COMBINED VALUES:", combinedValues)
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
          <StyledDataTable value={combinedValues} className="p-datatable" paginator sortField="fNba_score" sortOrder={-1}
            paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords}" rows={10} rowsPerPageOptions={[10, 20, 50]}
            paginatorLeft={paginatorLeft} paginatorRight={paginatorRight}>
            <Column field="fNba_score" header="fNba" sortable ></Column>
            <Column style={{width: "75px"}} field="name" header="Name" sortable></Column>
            <Column field="position" header="Pos" sortable></Column>
            <Column field="avg_mins" header="Mins" sortable></Column>
            <Column field="avg_fga" header="FgA" sortable></Column>
            <Column field="fgp" header="Fg%" sortable></Column>
            <Column field="avg_fta" header="FtA" sortable></Column>
            <Column field="ftp" header="Ft%" sortable></Column>
            <Column field="avg_tpm" header="TPM" sortable></Column>
            <Column field="avg_tot_reb" header="Reb" sortable></Column>
            <Column field="avg_assists" header="Ast" sortable></Column>
            <Column field="avg_steals" header="Stl" sortable></Column>
            <Column field="avg_blocks" header="Blk" sortable></Column>
            <Column field="avg_turnovers" header="TO" sortable></Column>
            <Column field="avg_points" header="Pts" sortable></Column>              
            <Column field="fNba_ftp" header="fFt%" sortable></Column>
            <Column field="fNba_ftp" header="fFt%" sortable></Column>
            <Column field="fNba_fgp" header="fFg%" sortable></Column>
            <Column field="fNba_tpm" header="fTPM" sortable></Column>
            <Column field="fNba_assists" header="fAst" sortable></Column>
            <Column field="fNba_tot_reb" header="fReb" sortable></Column>
            <Column field="fNba_steals" header="fStl" sortable></Column>
            <Column field="fNba_blocks" header="fBlk" sortable></Column>
            <Column field="fNba_turnovers" header="fTO" sortable></Column>
            <Column field="fNba_points" header="fPts" sortable></Column>
          </StyledDataTable>
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


  // background: ${(props) => {(props.role === "cell" && props.className === "fantasy-table-props") ? "green" : "black"}};
  // `
