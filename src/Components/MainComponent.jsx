import React, { Component } from "react";
import { Container, Col, Row, ListGroup, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf, faFileCsv } from "@fortawesome/free-solid-svg-icons";

export default class MainComponent extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h3>Confirmed registrations</h3>
            <ListGroup>
              <ListGroup.Item>
                <Row className="d-flex justify-content-between">
                  <div>John Doe</div>
                  <div>
                    <Button variant="outline-info rounded-circle mr-2">
                      <FontAwesomeIcon icon={faFilePdf} />
                    </Button>
                    <Button variant="outline-info rounded-circle mr-2">
                      <FontAwesomeIcon icon={faFileCsv} />
                    </Button>
                  </div>
                </Row>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}
