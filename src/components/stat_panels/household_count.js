import React from 'react';
import BasePanel from './base_panel'

function HouseholdCount(props) {
  return (
    <BasePanel
      title="Household count"
      description="The estimated number of households with at least one member of the given race, in this area."
      format="count"
      white={props.white}
      whiteMoE={props.whiteMoE}
      black={props.black}
      blackMoE={props.blackMoE}/>);
}

  export default HouseholdCount;