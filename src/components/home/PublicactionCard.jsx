import React from 'react';

import {
    Col,
    Card
 } from "react-bootstrap";
const PublicactionCard = ({data}) => {
    return (
        <Col lg="6">
            <div className="pb-5 text-center">
                <img className=" bg-white mb-3" src={data.companylogo} alt=""/>
                <p className="lead">
                    {data.role}
                    <br/>
                    {data.date}
                    {data.url}
                </p>

            </div>
        </Col>
     );
}

export default PublicactionCard;
