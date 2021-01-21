import React from 'react'
import { connect } from 'react-redux'
import { setFantasyValues } from '../Redux/actions'
import { computeFantasyValue } from '../StatFunctions/computeFantasyValue'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button'


class PlayerRankerChart extends React.Component {

  paginatorLeft = <Button type="button" icon="pi pi-refresh" className="p-button-text" />;
  paginatorRight = <Button type="button" icon="pi pi-cloud" className="p-button-text" />;

  state = {
    combinedValues: []
  }

  componentDidMount() {
    let playerAverages = this.props.playerAverages
    let fantasyValues = computeFantasyValue(playerAverages)
    let combinedValues = this.combineValues(playerAverages, fantasyValues)
    this.props.dispatchSetFantasyValue(fantasyValues)
    if (combinedValues) {
      this.setState({ combinedValues: [...combinedValues] })
    }
  }

  combineValues(avgs, fVal) {
    let combinedValues = []

    for (const player in fVal) {
      let combObj = avgs[player]
      combObj.fNba_mins = `${fVal[player].fNba_mins}`
      combObj.fNba_fgm = fVal[player].fNba_fgm
      combObj.fNba_fga = fVal[player].fNba_fga
      combObj.fNba_fgp = fVal[player].fNba_fgp
      combObj.fNba_ftm = fVal[player].fNba_ftm
      combObj.fNba_fta = fVal[player].fNba_fta
      combObj.fNba_ftp = fVal[player].fNba_ftp
      combObj.fNba_tpm = fVal[player].fNba_tpm
      combObj.fNba_tpa = fVal[player].fNba_tpa
      combObj.fNba_tpp = fVal[player].fNba_tpp
      combObj.fNba_off_reb = fVal[player].fNba_off_reb
      combObj.fNba_def_reb = fVal[player].fNba_def_reb
      combObj.fNba_tot_reb = fVal[player].fNba_tot_reb
      combObj.fNba_assists = fVal[player].fNba_assists
      combObj.fNba_steals = fVal[player].fNba_steals
      combObj.fNba_blocks = fVal[player].fNba_blocks
      combObj.fNba_turnovers = fVal[player].fNba_turnovers
      combObj.fNba_plus_minus = fVal[player].fNba_plus_minus
      combObj.fNba_p_fouls = fVal[player].fNba_p_fouls
      combObj.fNba_points = fVal[player].fNba_points
      combObj.fNba_score = fVal[player].fNba_score
      combinedValues.push(combObj)
    }

    return combinedValues
  }



  render() {
    return (
      <>
        <div>
          <div className="card">
            <DataTable value={this.state.combinedValues} className="p-datatable-striped" paginator
              paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
              currentPageReportTemplate="Showing {first} to {last} of {totalRecords}" rows={25}
              paginatorLeft={this.paginatorLeft} paginatorRight={this.paginatorRight}>
              <Column className="table-props" field="fNba_score" header="fNba" sortable></Column>
              <Column className="table-props" field="name" header="Name" sortable></Column>
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
}



function msp(state) {
  return {
    playerData: state.playerData,
    playerAverages: state.playerAverages,
    fantasyValues: state.fantasyValues
  }
}

function mdp(dispatch) {
  return {
    dispatchSetFantasyValue: (fantasyValues) => dispatch(setFantasyValues(fantasyValues))
  }
}

export default connect(msp, mdp)(PlayerRankerChart)