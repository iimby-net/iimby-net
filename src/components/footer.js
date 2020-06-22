import React from 'react';
import { Link } from "react-router-dom";
import { SocialIcon } from 'react-social-icons';

function Footer() {
  return (
    <div>
      <div class="footerNavLinks row">
          <p><Link to="/">Home</Link></p>
          <p><Link to="/donate">Donate to Black causes</Link></p>
          <p><Link to="/about">About this site</Link></p>
      </div>
      <div class="row">
        <div class="col-3">&nbsp;</div>
        <div class="col-6">
          <div class="socialButtonContainer fcol-4">
            <SocialIcon bgColor='#000000' url="https://github.com/iimby-net/iimby-net" />
          </div>
          <div class="socialButtonContainer fcol-4">
            <SocialIcon bgColor='#000000' url="https://twitter.com/IimbyN" />
          </div>
          <div class="socialButtonContainer fcol-4">
            <SocialIcon bgColor='#000000' url="mailto:iimby.net@gmail.com" />
          </div>
        </div>
        <div class="col-3">&nbsp;</div>
      </div>
      <div class="row">
      <div class="col-3">&nbsp;</div>
        <div class="footerAcknowledgement col-6">
          <p>This site is an open source project. Visit us on <a href="https://github.com/iimby-net/iimby-net">github</a> to contribute.</p>
          <p>This site uses the Census Bureau Data API but is not endorsed or certified by the Census Bureau. The specific dataset used is the 5 year American Communities Survey released in 2018. Visit <a href="https://data.census.gov/cedsci/table?q=United%20States">data.census.gov</a> to explore the data on your own.</p>
        </div>
        <div class="col-3">&nbsp;</div>
      </div>
    </div >);
}

export default Footer;