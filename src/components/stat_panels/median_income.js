import React from 'react';
import BasePanel from './base_panel'

function MedianIncome(props) {
      return (
        <BasePanel
          title="Median household income"
          description="The median is the value that separates the bottom half of the population from the top half. It is very resilient to outliers and is a good capture of the overall population."
          format="currency"
          white={props.white}
          whiteMoE={props.whiteMoE}
          black={props.black}
          blackMoE={props.blackMoE}/>);
  }

export default MedianIncome;