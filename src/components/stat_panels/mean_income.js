import React from 'react';
import BasePanel from './base_panel'

function MeanIncome(props) {
      return (
        <BasePanel
          title="Average household income"
          format="currency"
          white={props.white}
          whiteMoE={props.whiteMoE}
          black={props.black}
          blackMoE={props.blackMoE}/>);
  }

  export default MeanIncome;