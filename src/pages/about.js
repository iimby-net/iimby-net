import React from 'react';

function About() {
  return (
    <div>
      <h1>About this site</h1>
      <div>
        <p>
          The goal of this site is to illustrate economic disparoties between black and white communities on a local level.
          Often we only see reports on economic trends at the national level and it's easy to wave those trends away by
          blaming geographic factors, or by assuming that our neighborhood isn't as bad as the rest of the country. I made
          this site because I found that the inequality got worse as I got closer to home. This is an open source project and
          any hands on assistance in furthering this goal is welcome.
        </p>
        <p>
          All data on this site is based on the 5 year American Communities Survey for 2018.The American Communities
          Survey is a product of the Census Bureau, that runs more frequently than the main census. The survey is much
          more detailed than the decennial census and it is only administered to a sample of the population, but it is
          administered across the entire country.
        </p>
        <p>
          The ACS responses are aggreagated into a variety of reports covering everything from internet connectivity
          to commuting behaviour and the type of houses people live in. The data is available in a 1 year and a 5 year
          dataset and each data point can be queried at a variety of geographic granularities. The 5 year report is
          slighly less current than the 1 year, but it has reports down to individual zip codes. Since the data is
          computed from a sample of the population each datapoint is reported as an estimate with a margin of error.
          the larger the population, the smaller the margin of error.
        </p>
      </div>
    </div>
  );
}

export default About;