import React from 'react';
import BasePanel from './base_panel'

function BroadbandAccess(props) {
  return (
    <BasePanel
      title="Broadband access rate"
      description="The percentage of households with access to broadband internet."
      format="percent"
      white={props.white}
      whiteMoE={props.whiteMoE}
      black={props.black}
      blackMoE={props.blackMoE}/>);
}

  export default BroadbandAccess;