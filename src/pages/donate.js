import React from 'react';

function DonatePanel(props) {
  return (
    <div>
      <h3>{props.title}</h3>
      <div>
        {props.children}
      </div>
      <div>
        <a href={props.cause_url}>Website</a>
      </div>
      <di>
        <a href={props.donate_url}>Donate</a>
      </di>
    </div>);
}

function Donate() {
  return (
    <div>
      <h1>Mitigate the inequality, donate to a cause</h1>

      <DonatePanel
        title="Black Lives Matter"
        cause_url="https://blacklivesmatter.com/"
        donate_url="https://secure.actblue.com/donate/ms_blm_homepage_2019">
      </DonatePanel>
      <DonatePanel
        title="Center for Black Equity"
        cause_url="https://centerforblackequity.org/"
        donate_url="https://centerforblackequity.org/donate/#">
      </DonatePanel>
      <DonatePanel
        title="Equal Justice Initiative"
        cause_url="https://eji.org/"
        donate_url="https://support.eji.org/give/153413/#!/donation/checkout">
      </DonatePanel>
      <DonatePanel
        title="Marsha P Johnson Institute"
        cause_url="https://marshap.org/"
        donate_url="https://marshap.org/donate/">
      </DonatePanel>
      <DonatePanel
        title="NAACP"
        cause_url="https://www.naacp.org/"
        donate_url="https://secure.actblue.com/donate/naacp-1">
      </DonatePanel>
    </div>
  );
}

export default Donate;