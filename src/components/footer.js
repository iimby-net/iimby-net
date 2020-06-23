import React from 'react';
import { Link } from "react-router-dom";
import { SocialIcon } from 'react-social-icons';

function Footer() {
  return (
    <div class="footerWrapper">
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
        <div class="footerAcknowledgement">
          <p>This site is an open source project. Visit us on <a href="https://github.com/iimby-net/iimby-net">github</a> to contribute.</p>
          <p>This site uses the Census Bureau Data API but is not endorsed or certified by the Census Bureau.</p>
        </div>
      </div>
    </div >);
}

export default Footer;