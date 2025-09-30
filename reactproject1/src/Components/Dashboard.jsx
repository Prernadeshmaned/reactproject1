import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Dashboard() {
    return (
        <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
            {/* Navbar */}
            <Navbar bg="primary" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/">My Dashboard</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/AboutUs">About Us</Nav.Link>
                            <Nav.Link as={Link} to="/ContactUs">Contact Us</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* Full Page Welcome */}
            <div
                style={{
                    flex: 1,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    backgroundColor: "#f8f9fa",
                    width: "100%",
                }}
            >
                <h1 className="text-primary">Welcome to the Dashboard 🎉</h1>
            </div>
        </div>
    );
}
