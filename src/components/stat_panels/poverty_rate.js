import React from 'react';
import BasePanel from './base_panel'

function PovertyRate(props) {
  return (
    <BasePanel
      title="Poverty rate"
      description="Percentage of households falling below the poverty line."
      format="percent"
      white={props.white}
      whiteMoE={props.whiteMoE}
      black={props.black}
      blackMoE={props.blackMoE}/>);
}

export default PovertyRate