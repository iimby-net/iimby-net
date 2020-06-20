import React from 'react';
import { Link } from "react-router-dom";
import { SocialIcon } from 'react-social-icons';

function Footer() {
    return (
      <div>
        <div class="centeredSubContainer">
          <ul class="footerNavLinks">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/donate">Donate to Black causes</Link></li>
            <li><Link to="/about">About this site</Link></li>
          </ul>
        </div>
        <div class="centeredSubContainer">
          <ul class="footerSocialButtonList">
            <li><SocialIcon bgColor='#000000' url="https://github.com/iimby-net/iimby-net" /></li>
          </ul>
          <div class="clearfix"/>
        </div>
        <div class="footerAcknowledgement">
          <p>This site is an open source project. Visit us on <a href="https://github.com/iimby-net/iimby-net">github</a> to contribute.</p>
          <p>This site uses the Census Bureau Data API but is not endorsed or certified by the Census Bureau. The specific dataset used is the 5 year American Communities Survey released in 2018.</p>
          <p>Visit <a href="https://data.census.gov/cedsci/?#">data.census.gov</a> to explore the data on your own.</p>
        </div>
      </div>);
  }

  export default Footer;