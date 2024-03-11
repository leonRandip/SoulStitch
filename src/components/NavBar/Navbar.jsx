import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navbar.css";
import { useNavigate } from "react-router";
const NavBar = () => {
  const navigate = useNavigate();
  const reloadIfOnSamePage = () => {
    if (window.location.pathname == "/") {
      window.location.reload();
    } else {
      navigate("/");
    }
  };
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary custom-navbar">
        <Container fluid>
          <Navbar.Brand className="navbar-logo" onClick={reloadIfOnSamePage}>
            CAST YOUR BURDENS
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-4 my-lg-2"
              style={{ maxHeight: "120px" }}
              navbarScroll
            >
              <Nav.Link
                className="nav-items"
                onClick={() => navigate("/dynamic/about")}
              >
                About us
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2 custom-search"
                aria-label="Search"
              />
              <Button className="search-btn">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default NavBar;
