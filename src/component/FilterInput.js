import React from "react";
import { Container, Row, Col, DropdownButton, Dropdown } from "react-bootstrap";

const FilterInput = () => {
  return (
    <Container>
      <Row>
        <Col>
          <label>Tipe Driver</label>
          <DropdownButton
            className="background-color-none"
            title="Pilih Tipe Driver"
          >
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </DropdownButton>
        </Col>
        <Col></Col>
        <Col></Col>
        <Col></Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default FilterInput;
