
// TableID: S1903
const blackHouseholdCount = "S1903_C01_003E";
const blackHouseholdCountMoE = "S1903_C01_003M";
const whiteHouseholdCount = "S1903_C01_002E";
const whiteHouseholdCountMoE = "S1903_C01_002M";

// TableID: S1701
const blackPovertyRate = "S1701_C03_014E";
const blackPovertyRateMoE = "S1701_C03_014M";
const whitePovertyRate = "S1701_C03_013E";
const whitePovertyRateMoE = "S1701_C03_013M";

// TableID: S2301
const blackUnemplymentRate = "S2301_C04_013E";
const blackUnemplymentRateMoE = "S2301_C04_013M";
const whiteUnemplymentRate = "S2301_C04_012E";
const whiteUnemplymentRateMoE = "S2301_C04_012M";

// TableID: S1903
// https://api.census.gov/data/2018/acs/acs5/subject/groups/S1903.html
const blackMedianIncome = "S1903_C03_003E";
const blackMedianIncomeMoE = "S1903_C03_003M";
const whiteMedianIncome = "S1903_C03_002E";
const whiteMedianIncomeMoE = "S1903_C03_002M";

// TableID: S1902
// https://api.census.gov/data/2018/acs/acs5/subject/groups/S1902.html
const blackMeanIncome = "S1902_C03_021E";
const blackMeanIncomeMoE = "S1902_C03_021M";
const whiteMeanIncome = "S1902_C03_020E";
const whiteMeanIncomeMoE = "S1902_C03_020M";

// TableID: 2802
// https://api.census.gov/data/2018/acs/acs5/subject/groups/S2802.html
const blackBroadbandAccess = "S2802_C03_006E";
const blackBroadbandAccessMoE = "S2802_C03_006M";
const whiteBroadbandAccess = "S2802_C03_005E";
const whiteBroadbandAccessMoE = "S2802_C03_005M";

const blackComputerAccess = "S2802_C07_006E";
const blackComputerAccessMoE = "S2802_C07_006M";
const whiteComputerAccess = "S2802_C07_005E";
const whiteComputerAccessMoE = "S2802_C07_005M";

const allCodes = "S1903_C01_003E,S1903_C01_003M,S1903_C01_002E,S1903_C01_002M,S1701_C03_014E,S1701_C03_014M,S1701_C03_013E,S1701_C03_013M,S2301_C04_013E,S2301_C04_013M,S2301_C04_012E,S2301_C04_012M,S1903_C03_003E,S1903_C03_003M,S1903_C03_002E,S1903_C03_002M,S1902_C03_021E,S1902_C03_021M,S1902_C03_020E,S1902_C03_020M,S2802_C03_006E,S2802_C03_006M,S2802_C03_005E,S2802_C03_005M,S2802_C07_006E,S2802_C07_006M,S2802_C07_005E,S2802_C07_005M";

// api key:
// https://api.census.gov/data/key_signup.html
// acs5 docs:
// https://www.census.gov/data/developers/data-sets/acs-5year.html
// Geographic hierarchy
// https://api.census.gov/data/2018/acs/acs5/subject/geography.html
// Request examples
// https://api.census.gov/data/2018/acs/acs5/subject/examples.html

function getCensusData(for_value, in_value) {
  var censusUrl = ''
  if (in_value) {
    censusUrl = 'https://api.census.gov/data/2018/acs/acs5/subject?get=NAME,' + allCodes + '&for=' + for_value + '&in=' + in_value + '&key=286b869c0a5bcda3783991db3f2c28d8ba489cc4'
  } else {
    censusUrl = 'https://api.census.gov/data/2018/acs/acs5/subject?get=NAME,' + allCodes + '&for=' + for_value + '&key=286b869c0a5bcda3783991db3f2c28d8ba489cc4'
  }
  return fetch(censusUrl, { method: 'GET' }).then((response) => {
    if (response.status !== 200) {
      throw new Error(`Census error: ${response.status}: ${response.statusText}: ${censusUrl}`);
    }
    return response.json()
  }).then(
    (responseBody) => {
      var stats = {};
      var i;
      for (i = 0; i < responseBody[0].length; i++) {
        switch (responseBody[0][i]) {
          case "NAME":
            stats.name = responseBody[1][i];
            break;
          case blackHouseholdCount:
            stats.blackHouseholdCount = responseBody[1][i];
            break;
          case blackHouseholdCountMoE:
            stats.blackHouseholdCountMoE = responseBody[1][i];
            break;
          case whiteHouseholdCount:
            stats.whiteHouseholdCount = responseBody[1][i];
            break;
          case whiteHouseholdCountMoE:
            stats.whiteHouseholdCountMoE = responseBody[1][i];
            break;
          case blackPovertyRate:
            stats.blackPovertyRate = (responseBody[1][i] / 100.0);
            break;
          case blackPovertyRateMoE:
            stats.blackPovertyRateMoE = (responseBody[1][i] / 100.0);
            break;
          case whitePovertyRate:
            stats.whitePovertyRate = (responseBody[1][i] / 100.0);
            break;
          case whitePovertyRateMoE:
            stats.whitePovertyRateMoE = (responseBody[1][i] / 100.0);
            break;
          case blackUnemplymentRate:
            stats.blackUnemplymentRate = (responseBody[1][i] / 100.0);
            break;
          case blackUnemplymentRateMoE:
            stats.blackUnemplymentRateMoE = (responseBody[1][i] / 100.0);
            break;
          case whiteUnemplymentRate:
            stats.whiteUnemplymentRate = (responseBody[1][i] / 100.0);
            break;
          case whiteUnemplymentRateMoE:
            stats.whiteUnemplymentRateMoE = (responseBody[1][i] / 100.0);
            break;
          case blackMedianIncome:
            stats.blackMedianIncome = responseBody[1][i];
            break;
          case blackMedianIncomeMoE:
            stats.blackMedianIncomeMoE = responseBody[1][i];
            break;
          case whiteMedianIncome:
            stats.whiteMedianIncome = responseBody[1][i];
            break;
          case whiteMedianIncomeMoE:
            stats.whiteMedianIncomeMoE = responseBody[1][i];
            break;
          case blackMeanIncome:
            stats.blackMeanIncome = responseBody[1][i];
            break;
          case blackMeanIncomeMoE:
            stats.blackMeanIncomeMoE = responseBody[1][i];
            break;
          case whiteMeanIncome:
            stats.whiteMeanIncome = responseBody[1][i];
            break;
          case whiteMeanIncomeMoE:
            stats.whiteMeanIncomeMoE = responseBody[1][i];
            break;

          case blackBroadbandAccess:
            stats.blackBroadbandAccess = (responseBody[1][i] / 100.0);
            break;
          case blackBroadbandAccessMoE:
            stats.blackBroadbandAccessMoE = (responseBody[1][i] / 100.0);
            break;
          case whiteBroadbandAccess:
            stats.whiteBroadbandAccess = (responseBody[1][i] / 100.0);
            break;
          case whiteBroadbandAccessMoE:
            stats.whiteBroadbandAccessMoE = (responseBody[1][i] / 100.0);
            break;

          case blackComputerAccess:
            stats.blackComputerAccess = (responseBody[1][i] / 100.0);
            break;
          case blackComputerAccessMoE:
            stats.blackComputerAccessMoE = (responseBody[1][i] / 100.0);
            break;
          case whiteComputerAccess:
            stats.whiteComputerAccess = (responseBody[1][i] / 100.0);
            break;
          case whiteComputerAccessMoE:
            stats.whiteComputerAccessMoE = (responseBody[1][i] / 100.0);
            break;

          default: break;
        }
      }
      return stats;
    });
}

export default getCensusData;