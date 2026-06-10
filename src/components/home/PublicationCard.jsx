import React from 'react';
import {
  Col,
  Card,
} from "react-bootstrap";

const PublicationCard = ({ data }) => {
  return (
    <Col lg="12" className="mb-4">
      <Card className="shadow-sm">
        <Card.Body>
          <Card.Title as="h5" className="mb-3">
            {data.title}
          </Card.Title>
          {data.description && (
            <Card.Text className="mb-3 text-muted">
              {data.description}
            </Card.Text>
          )}
          {data.link && (
            <Card.Text>
              <a
                href={data.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                View here
              </a>
            </Card.Text>
          )}
        </Card.Body>
      </Card>
    </Col>
  );
}

export default PublicationCard;

