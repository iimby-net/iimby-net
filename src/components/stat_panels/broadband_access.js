import React from 'react';
import BasePanel from './base_panel'

function BroadbandAccess(props) {
  return (
    <BasePanel
      title="Households with broadband internet access"
      format="percent"
      white={props.white}
      whiteMoE={props.whiteMoE}
      black={props.black}
      blackMoE={props.blackMoE}/>);
}

  export default BroadbandAccess;