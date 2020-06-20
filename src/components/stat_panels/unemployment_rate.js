import React from 'react';
import BasePanel from './base_panel'

function UnemploymentRate(props) {
  return (
    <BasePanel
      title="Unemployment rate"
      description=""
      format="percent"
      white={props.white}
      whiteMoE={props.whiteMoE}
      black={props.black}
      blackMoE={props.blackMoE}/>);
}

  export default UnemploymentRate;