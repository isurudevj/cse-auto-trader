import { Outlet } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Col, Row } from "react-bootstrap";

const Layout = () => {
  return (
    <Row>
      <Col lg={12}>
        <Navbar bg="primary" data-bs-theme="dark">
          <Container fluid>
            <LinkContainer to="/">
              <Navbar.Brand>Home</Navbar.Brand>
            </LinkContainer>
            <Nav className="me-auto" activeKey="/">
              <LinkContainer to="/stocks">
                <Nav.Link>Stocks</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/make-trade">
                <Nav.Link>Make Trade</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/pnl">
                <Nav.Link>PNL</Nav.Link>
              </LinkContainer>
            </Nav>
          </Container>
        </Navbar>
        <Outlet />
      </Col>
    </Row>
  );
};

export default Layout;
