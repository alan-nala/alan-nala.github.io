import React from "react";

const Pub = ({ heading }) => {
  return (
    <div className="card">
    <div className="card-publication">
      <div className="card-body card-body-left">
        <h4><a href="https://scholar.google.com/citations?hl=es&user=unhqoBcAAAAJ#d=gs_md_cita-d&u=%2Fcitations%3Fview_op%3Dview_citation%26hl%3Des%26oe%3DASCII%26user%3DunhqoBcAAAAJ%26citation_for_view%3DunhqoBcAAAAJ%3Ad1gkVwhDpl0C">System-time entanglement in a discrete-time model</a></h4>
        <p style={{fontStyle: 'italic'}}>by A Boette, R Rossignoli, N Gigena, M Cerezo</p>
        <p><b>Physical Review A 93 (6), 062127</b></p>
      </div>
    </div>
    <div className="card-footer">
      <small className="text-muted">Published in <b>2016</b> |
        <a href="https://scholar.google.com/scholar?oi=bibs&hl=es&oe=ASCII&cites=16404631595841339708">Citations: <b>19</b></a></small>
    </div>
  </div>
  );
};

export default Pub;
