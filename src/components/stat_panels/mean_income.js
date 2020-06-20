import React from 'react';
import BasePanel from './base_panel'

function MeanIncome(props) {
      return (
        <BasePanel
          title="Average household income"
          description="The average is more sensitive to extremes than the median, so extreme wealth will raise the average far more than the median, but it can be calculated for smaller population sizes."
          format="currency"
          white={props.white}
          whiteMoE={props.whiteMoE}
          black={props.black}
          blackMoE={props.blackMoE}/>);
  }

  export default MeanIncome;