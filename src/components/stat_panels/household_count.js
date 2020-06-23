import React from 'react';
import BasePanel from './base_panel'

function HouseholdCount(props) {
  return (
    <BasePanel
      title="Number of households"
      format="count"
      white={props.white}
      whiteMoE={props.whiteMoE}
      black={props.black}
      blackMoE={props.blackMoE}/>);
}

  export default HouseholdCount;