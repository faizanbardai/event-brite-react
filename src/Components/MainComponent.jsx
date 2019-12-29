import React, { Component } from "react";
import { Container, Col, Row } from "react-bootstrap";

export default class MainComponent extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>List of participants</Col>
          <Col>New Registration</Col>
        </Row>
      </Container>
    );
  }
}
