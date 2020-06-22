import React, { Component } from 'react';
import MedianIncome from './stat_panels/median_income'
import MeanIncome from './stat_panels/mean_income'
import UnemploymentRate from './stat_panels/unemployment_rate'
import PovertyRate from './stat_panels/poverty_rate'
import HouseholdCount from './stat_panels/household_count'
import BroadbandAccess from './stat_panels/broadband_access';

class StatSummary extends Component {
  render() {
    return (
      <div>
        <div class="row">
          <div class="col-6"><MedianIncome white={this.props.stats.whiteMedianIncome} whiteMoE={this.props.stats.whiteMedianIncomeMoE} black={this.props.stats.blackMedianIncome} blackMoE={this.props.stats.blackMedianIncomeMoE} /></div>
          <div class="col-6"><MeanIncome white={this.props.stats.whiteMeanIncome} whiteMoE={this.props.stats.whiteMeanIncomeMoE} black={this.props.stats.blackMeanIncome} blackMoE={this.props.stats.blackMeanIncomeMoE} /></div>
        </div>
        <div class="row">
          <div class="col-6"><BroadbandAccess white={this.props.stats.whiteBroadbandAccess} whiteMoE={this.props.stats.whiteBroadbandAccessMoE} black={this.props.stats.blackBroadbandAccess} blackMoE={this.props.stats.blackBroadbandAccessMoE} /></div>
          <div class="col-6"><UnemploymentRate white={this.props.stats.whiteUnemplymentRate} whiteMoE={this.props.stats.whiteUnemplymentRateMoE} black={this.props.stats.blackUnemplymentRate} blackMoE={this.props.stats.blackUnemplymentRateMoE} /></div>
        </div>
        <div class="row">
          <div class="col-6"><PovertyRate white={this.props.stats.whitePovertyRate} whiteMoE={this.props.stats.whitePovertyRateMoE} black={this.props.stats.blackPovertyRate} blackMoE={this.props.stats.blackPovertyRateMoE} /></div>
          <div class="col-6"><HouseholdCount white={this.props.stats.whiteHouseholdCount} whiteMoE={this.props.stats.whiteHouseholdCountMoE} black={this.props.stats.blackHouseholdCount} blackMoE={this.props.stats.blackHouseholdCountMoE} /></div>
        </div>
      </div>);
  }
}

export default StatSummary;