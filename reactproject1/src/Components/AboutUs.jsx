import { Navbar, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

export default function AboutUs() {
    return (
        <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
            {/* Top Navbar */}
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

            {/* About Us Content */}
            <div
                style={{
                    flex: 1,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    padding: "40px",
                    backgroundColor: "#fff8f0"
                }}
            >
                <div style={{ maxWidth: "1100px", display: "flex", gap: "40px", alignItems: "center" }}>

                    {/* Left: Image */}
                    <div style={{ flex: 1 }}>
                        <img
                            src="https://cdn.pixabay.com/photo/2016/11/23/00/56/henna-1854420_1280.jpg"
                            alt="Mehandi Design"
                            style={{ width: "100%", borderRadius: "15px", boxShadow: "0px 4px 12px rgba(0,0,0,0.1)" }}
                        />

                    </div>

                    {/* Right: Text */}
                    <div style={{ flex: 1 }}>
                        <h1 className="text-success mb-4">About Our Mehandi Art 🌿</h1>
                        <p style={{ fontSize: "18px", marginBottom: "15px" }}>
                            Mehandi is not just an art, it’s a tradition that adds beauty
                            and joy to every celebration. With natural henna, we design
                            elegant and creative patterns that reflect culture and love.
                        </p>
                        <p style={{ fontSize: "18px", marginBottom: "15px" }}>
                            From bridal mehandi to festive designs, our passion is to create
                            intricate patterns that bring smiles and make your special day unforgettable.
                        </p>
                        <p style={{ fontSize: "18px" }}>
                            This demo dashboard showcases how technology can present our
                            creativity in the digital world while celebrating the timeless
                            beauty of Mehandi.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
