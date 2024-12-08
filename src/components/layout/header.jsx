import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { menus } from "../../configs/array-config";
import logo from "../../assets/images/logo.svg";
import Button from "react-bootstrap/Button";

const Header = () => {
    return (
        <header>
            <Navbar expand="lg" data-bs-theme="dark" className="py-3">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            src={logo}
                            width="191"
                            height="34"
                            className="img-fluid"
                            alt="Whitepace"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0 shadow-none" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Nav className="me-lg-3">
                            {menus.map((menu, index) => {
                                return (
                                    <NavDropdown key={index} title={menu.title} id={menu.title}>
                                        {menu.items.map((item) => {
                                            return (
                                                <NavDropdown.Item key={index} href="#">{item.name}</NavDropdown.Item>
                                            )
                                        })}
                                    </NavDropdown>
                                )
                            })}
                        </Nav>
                        <Button variant="secondary" className="me-4 mb-2 mb-lg-0">Login</Button>
                        <Button variant="primary" className="mb-2 mb-lg-0">
                            Try Whitepace Free
                            <span className="ms-2">
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 6H11" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M6 1L11 6L6 11" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                        </Button>
                    </Navbar.Collapse>
                </Container >
            </Navbar >
        </header >
    );
};

export default Header;