import React from 'react';
import BasePanel from './base_panel'

function MedianIncome(props) {
      return (
        <BasePanel
          title="Median household income"
          format="currency"
          white={props.white}
          whiteMoE={props.whiteMoE}
          black={props.black}
          blackMoE={props.blackMoE}/>);
  }

export default MedianIncome;