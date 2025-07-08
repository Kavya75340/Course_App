import { FaBookReader } from "react-icons/fa";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Header() {
    const linkClass = ({ isActive }) =>
        "nav-link fs-5 d-flex align-items-center " +
        (isActive ? "fw-bold bg-dark text-white px-3 rounded" : "text-dark");
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container className="d-flex justify-content-between">
                <Navbar.Brand href="#">
                    <FaBookReader size={40} className="me-3" />
                    CourseHub
                </Navbar.Brand>
                <div>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/" className={linkClass}>
                                Home
                            </Nav.Link>
                            <Nav.Link href="/add-course" className={linkClass}>
                                Add Course
                            </Nav.Link>
                            <Nav.Link
                                href="/view-courses"
                                className={linkClass}
                            >
                                View Courses
                            </Nav.Link>
                            <Nav.Link href="/about" className={linkClass}>
                                About Me
                            </Nav.Link>
                            <Nav.Link href="/contact" className={linkClass}>
                                Contact
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Container>
        </Navbar>
    );
}

export default Header;
