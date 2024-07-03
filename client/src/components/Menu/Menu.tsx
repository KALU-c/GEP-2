import { data, images } from "../../constants";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Menu.css";
import { useNavigate } from "react-router-dom";

const Menu = () => {
  const navigate = useNavigate();

  return (
    <Navbar collapseOnSelect expand="lg" bg="ligth" variant="ligth">
      <Container>
        <Navbar.Brand onClick={() => navigate("/")}>
          {" "}
          <img src={images.gepLogo} width="140px" alt="logo" className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav>
            {data.Menu.map((item, index) => (
              <Nav.Link
                key={index}
                className="link"
                onClick={() => navigate(`${item.link}`)}
              >
                {item.text}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
