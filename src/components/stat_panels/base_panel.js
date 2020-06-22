import React from 'react';

function dataWarning(race){
    return (<p>This measurement is not available for the {race} community in this area. This is typically due to insufficent data.</p>);
}

function BasePanel(props) {
    var formatter;
    if (props.format === "currency"){
      formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      });
    }else if(props.format === "percent"){
      formatter = new Intl.NumberFormat('en-US', {
        style: 'percent',
        minimumFractionDigits: 0,
        maximumFractionDigits: 1
      });
    }else if(props.format === "count"){
        formatter = new Intl.NumberFormat('en-US', {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
          });
    }
    
    var whiteValue;
    var whitMoE;
    var blackValue;
    var blackMoE;
    var whiteDataWarning = "";
    var blackDataWarning = ""
    if (isNaN(props.white) || props.white < 0){
        whiteValue = "?";
        whitMoE = "?";
        whiteDataWarning = dataWarning("white");
    }else{
        whiteValue = formatter.format(props.white);
        whitMoE = formatter.format(props.whiteMoE);
    }
    
    if (isNaN(props.black) || props.black < 0){
        blackValue = "?";
        blackMoE = "?";
        blackDataWarning = dataWarning("black");
    }else{
        blackValue = formatter.format(props.black);
        blackMoE = formatter.format(props.blackMoE);
    }
  
    return (
      <div class="basePanel">
        <h2 class="panelTitle">{props.title}</h2>
        <div class="centeredSubContainer row">
          <div class="statPanel fcol-6">
            <p class="raceLabel">Black</p>
            <p class="mainStat">{blackValue}</p>
            <p class="marginOfError">+/- {blackMoE}</p>
          </div>
          <div class="statPanel fcol-6">
            <p class="raceLabel">White</p>
            <p class="mainStat">{whiteValue}</p>
            <p class="marginOfError">+/- {whitMoE}</p>
          </div>
        </div>
        <div>
            {whiteDataWarning}
            {blackDataWarning}
        </div>
        <div>
          {props.description}
        </div>
      </div>);
  }

  export default BasePanel;