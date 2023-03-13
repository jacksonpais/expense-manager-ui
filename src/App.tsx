import React from "react";
import ReactDOM from "react-dom/client";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { ArrowUpSquare, Wallet, Bell } from "react-bootstrap-icons";
import { ListGroup } from "react-bootstrap";
import ProgressBar from "react-bootstrap/esm/ProgressBar";

function App() {
  return (
    <React.Fragment>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container fluid>
        <Row className="pt-3">
          <Col xl={3} md={6} xs={12}>
            <Card border="primary" text="primary" className="mb-4">
              <Card.Body>
                <Card.Title>Balance</Card.Title>
                <Card.Text>
                  <div className="d-flex">
                    <div className="rounded-circle me-2">
                      <Wallet />
                    </div>
                    <div className="ms-3">
                      <h3 className="mb-0 font-weight-bold">$21k</h3>
                      <small>Monthly Earning</small>
                    </div>
                  </div>
                </Card.Text>
                <Card.Footer>
                  <ProgressBar variant="primary" striped now={60} />
                </Card.Footer>
              </Card.Body>
            </Card>
          </Col>
          <Col xl={3} md={6} xs={12}>
            <Card bg="warning" text="white" className="mb-4">
              <Card.Body>
                <Card.Title>Expense</Card.Title>
                <Card.Text>
                  <div className="d-flex">
                    <div className="rounded-circle me-2">
                      <Wallet />
                    </div>
                    <div className="ms-3">
                      <h3 className="mb-0 font-weight-bold">$21k</h3>
                      <small>Monthly Expense</small>
                    </div>
                  </div>
                </Card.Text>
                <Card.Footer>
                  <ProgressBar variant="light" now={60} />
                </Card.Footer>
              </Card.Body>
            </Card>
          </Col>
          <Col xl={3} md={6} xs={12}>
            <Card bg="danger" text="white" className="mb-4">
              <Card.Body>
                <Card.Title>Liability</Card.Title>
                <Card.Text>
                  <div className="d-flex">
                    <div className="rounded-circle me-2">
                      <Wallet />
                    </div>
                    <div className="ms-3">
                      <h3 className="mb-0 font-weight-bold">$21k</h3>
                      <small>Monthly Earning</small>
                    </div>
                  </div>
                </Card.Text>
                <Card.Footer>
                  <ProgressBar variant="light" now={60} />
                </Card.Footer>
              </Card.Body>
            </Card>
          </Col>
          <Col xl={3} md={6} xs={12}>
            <Card bg="success" text="white" className="mb-4">
              <Card.Body>
                <Card.Title>Investments</Card.Title>
                <Card.Text>
                  <div className="d-flex">
                    <div className="rounded-circle me-2">
                      <Wallet />
                    </div>
                    <div className="ms-3">
                      <h3 className="mb-0 font-weight-bold">$21k</h3>
                      <small>Monthly Earning</small>
                    </div>
                  </div>
                </Card.Text>
                <Card.Footer>
                  <ProgressBar variant="light" now={60} />
                </Card.Footer>
              </Card.Body>
            </Card>
          </Col>
          {/* <Col xl={3} md={6} xs={12}>
            <Card>
              <ListGroup as="ul">
                <ListGroup.Item action href="#link1" className="d-flex">
                  <button className="rounded-circle me-2 btn btn-primary btn-sm">
                    <Bell className="mb-1" />
                  </button>
                  Cras justo odio
                  <small className="ms-auto text-muted text-small">
                    6 minute ago
                  </small>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col> */}
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default App;
