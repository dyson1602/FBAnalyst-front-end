import React, { useState } from 'react'
import { ToggleButton } from 'primereact/togglebutton'

const PlayerRankerSelector = () => {

  const [checked1, setChecked1] = useState(true);
  const [checked2, setChecked2] = useState(true);
  const [checked3, setChecked3] = useState(true);
  const [checked4, setChecked4] = useState(true);
  const [checked5, setChecked5] = useState(true);
  const [checked6, setChecked6] = useState(true);
  const [checked7, setChecked7] = useState(true);
  const [checked8, setChecked8] = useState(true);
  const [checked9, setChecked9] = useState(true);

  
    return (
      <>
        <div>Player Ranker Selector
          <div>
            Categories
            <ToggleButton checked={checked1} onChange={(e) => setChecked1(e.value)} onLabel="" offLabel="" onIcon="pi pi-check" offIcon="pi pi-times" style={{width: '30px'}} />
            <ToggleButton checked={checked2} onChange={(e) => setChecked2(e.value)} onLabel="" offLabel="" onIcon="pi pi-check" offIcon="pi pi-times" style={{width: '30px'}} />
            <ToggleButton checked={checked3} onChange={(e) => setChecked3(e.value)} onLabel="" offLabel="" onIcon="pi pi-check" offIcon="pi pi-times" style={{width: '30px'}} />
            <ToggleButton checked={checked4} onChange={(e) => setChecked4(e.value)} onLabel="" offLabel="" onIcon="pi pi-check" offIcon="pi pi-times" style={{width: '30px'}} />
            <ToggleButton checked={checked5} onChange={(e) => setChecked5(e.value)} onLabel="" offLabel="" onIcon="pi pi-check" offIcon="pi pi-times" style={{width: '30px'}} />
            <ToggleButton checked={checked6} onChange={(e) => setChecked6(e.value)} onLabel="" offLabel="" onIcon="pi pi-check" offIcon="pi pi-times" style={{width: '30px'}} />
            <ToggleButton checked={checked7} onChange={(e) => setChecked7(e.value)} onLabel="" offLabel="" onIcon="pi pi-check" offIcon="pi pi-times" style={{width: '30px'}} />
            <ToggleButton checked={checked8} onChange={(e) => setChecked8(e.value)} onLabel="" offLabel="" onIcon="pi pi-check" offIcon="pi pi-times" style={{width: '30px'}} />
            <ToggleButton checked={checked9} onChange={(e) => setChecked9(e.value)} onLabel="" offLabel="" onIcon="pi pi-check" offIcon="pi pi-times" style={{width: '30px'}} />
          </div>


        </div>
      </>
    )
  

}


export default PlayerRankerSelector