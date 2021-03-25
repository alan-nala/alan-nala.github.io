import React from 'react';
import PublicactionCard from "./PublicactionCard";
import {
    Container,
    Row,
    Jumbotron
} from "react-bootstrap";

const Publicaction = ({publications}) => {
    return (
        <section className="section">
            <Container>
                <Jumbotron fluid className="bg-white">
                    <h2 className="display-4 mb-5 text-center">
                        {publications.heading}
                    </h2>
                    <Row>
                        {
                            publications.data.map(data => {
                                return <PublicactionCard key={data.company} data={data} />
                            })
                        }
                    </Row>
                </Jumbotron>
            </Container>
        </section>
    );
}

export default Publicaction;
