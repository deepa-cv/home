import React from 'react';
import PublicationCard from "./PublicationCard";
import { Jumbotron } from './migration';
import {
  Container,
  Row,
} from "react-bootstrap";

const Publications = ({ publications }) => {
  return (
    <section className="section" id="publications">
      <Container>
        <Jumbotron className="bg-white">
          <h2 className="display-4 mb-5 text-center">
            {publications.heading}
          </h2>
          <Row>
            {
              publications.data.map((data, index) => {
                return <PublicationCard key={index} data={data} />
              })
            }
          </Row>
        </Jumbotron>
      </Container>
    </section>
  );
}

export default Publications;

