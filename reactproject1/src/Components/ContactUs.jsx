import { Navbar, Nav, Container, Form, Button, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

export default function ContactUs() {
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

            {/* Contact Section */}
            <div style={{ flex: 1, backgroundColor: "#fff8f0", padding: "40px" }}>
                <Container>
                    <Row className="align-items-center">
                        {/* Left: Form */}
                        <Col md={6}>
                            <h2 className="text-success mb-4">Get in Touch ✨</h2>
                            <p className="mb-4">
                                Have a special occasion coming up? Book your bridal or festive
                                Mehandi appointment with us. Fill out the form below and we’ll
                                get back to you soon!
                            </p>
                            <Form>
                                <Form.Group className="mb-3" controlId="formName">
                                    <Form.Label>Your Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter your name" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter your email" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formMessage">
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control as="textarea" rows={3} placeholder="Tell us about your event..." />
                                </Form.Group>

                                <Button variant="primary" type="submit">
                                    Send Message
                                </Button>
                            </Form>
                        </Col>

                        {/* Right: Image */}
                        <Col md={6} className="text-center">
                            <img
                                src="https://cdn.pixabay.com/photo/2017/08/07/12/33/henna-2607691_1280.jpg"
                                alt="Mehandi Contact"
                                style={{ width: "100%", maxWidth: "500px", borderRadius: "15px", boxShadow: "0px 4px 12px rgba(0,0,0,0.2)" }}
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}
