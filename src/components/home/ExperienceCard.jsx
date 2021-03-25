import React from 'react';

import {
    Col,
    Card
 } from "react-bootstrap";
const ExperienceCard = ({data}) => {
    return (
        <Col lg="6">
            <div className="pb-5 text-center">
              <img className=" bg-white mb-3" src={data.companylogo} alt=""/>
                <p className="lead">

                    {data.role}
                    <br/>
                    {data.date}
                    <br/>
                    <a
                    className="badge badge-dark"
                    rel="noopener"
                    href={data.url}
                    aria-label="My GitHub"
                  >
                    {data.git}
                  </a>
                  <br/>
                  {data.role2}
                  <br/>
                  {data.date2}
                  <br/>
                  <a
                  className="badge badge-primary"
                  rel="noopener"
                  href={data.url2}
                  aria-label="My GitHub"
                >
                  {data.google}
                </a>
                </p>
            </div>
        </Col>
     );
}

export default ExperienceCard;
