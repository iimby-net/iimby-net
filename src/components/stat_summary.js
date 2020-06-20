import React, {Component} from 'react';
import MedianIncome from './stat_panels/median_income'
import MeanIncome from './stat_panels/mean_income'
import UnemploymentRate from './stat_panels/unemployment_rate'
import PovertyRate from './stat_panels/poverty_rate'
import HouseholdCount from './stat_panels/household_count'

class StatSummary extends Component {
    render() {
      return (
        <div>
          <MedianIncome white={this.props.stats.whiteMedianIncome} whiteMoE={this.props.stats.whiteMedianIncomeMoE} black={this.props.stats.blackMedianIncome} blackMoE={this.props.stats.blackMedianIncomeMoE} />
          <MeanIncome white={this.props.stats.whiteMeanIncome} whiteMoE={this.props.stats.whiteMeanIncomeMoE} black={this.props.stats.blackMeanIncome} blackMoE={this.props.stats.blackMeanIncomeMoE} />
          <UnemploymentRate white={this.props.stats.whiteUnemplymentRate} whiteMoE={this.props.stats.whiteUnemplymentRateMoE} black={this.props.stats.blackUnemplymentRate} blackMoE={this.props.stats.blackUnemplymentRateMoE} />
          <PovertyRate white={this.props.stats.whitePovertyRate} whiteMoE={this.props.stats.whitePovertyRateMoE} black={this.props.stats.blackPovertyRate} blackMoE={this.props.stats.blackPovertyRateMoE} />
          <HouseholdCount white={this.props.stats.whiteHouseholdCount} whiteMoE={this.props.stats.whiteHouseholdCountMoE} black={this.props.stats.blackHouseholdCount} blackMoE={this.props.stats.blackHouseholdCountMoE} />
        </div>);
    }
  }

export default StatSummary;