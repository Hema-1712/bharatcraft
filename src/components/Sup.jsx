import React, { useEffect , useState} from 'react';
import '../assets/style/style.css';
import icon from '../assets/images/logo.png';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";

import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
function Sup() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: true,     // animation only once
    });
  }, []);

const supportOptions = [
  {
    title: "Order Support",
    desc: "Need help with tracking, returns, or exchanges? We’re here to assist."
  },
  {
    title: "Product Information",
    desc: "Have questions about materials, sizing, or craftsmanship? Ask us anything."
  },
  {
    title: "Artisan Partnerships",
    desc: "Want to collaborate or showcase your handcrafted work? Reach out to our team."
  },
];

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleWhatsAppSend = () => {
    const phoneNumber = "9194488748538"; // <--- REPLACE WITH YOUR WHATSAPP NUMBER (no + sign)
    
    const text =
      `Hello, I need support.\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");
  };
  
  const plans = [
  { title: "Basic Membership", price: "Free", benefits: "Access to cultural events & newsletters" },
  { title: "Standard Membership", price: "$25 / year", benefits: "Join workshops + cultural classes discounts" },
  { title: "Premium Membership", price: "$50 / year", benefits: "Full access + special invitations + cultural kits" },
];

  return (
      <>
        {/* Navbar */}


   <nav
  className="navbar navbar-expand-lg px-4 shadow-sm"
  style={{ backgroundColor: 'khaki' }}
  data-aos="fade-right"
>
  <div className="container-fluid">
    {/* Brand Logo + Text */}
    <Link className="navbar-brand text-black fw-bold d-flex align-items-center" to="/">
      <img
        src={icon}
        alt="logo"
        className="img-fluid me-2"
        loading="eager"
        style={{ width: "45px", height: "45px", borderRadius: "8px" }}
      />
        BHARATCRAFT
    </Link>

    {/* Toggler */}
    <button
      className="navbar-toggler bg-white mx-2"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#mainNavbar"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    {/* Menu Items */}
    <div className="collapse navbar-collapse justify-content-end" id="mainNavbar">
      <ul className="navbar-nav align-items-lg-center">
        <li className="nav-item mx-2">
          <Link to="/" className="nav-link text-black d-flex align-items-center">Home</Link>
        </li>
        <li className="nav-item mx-2">
          <Link to="/shop" className="nav-link text-black d-flex align-items-center">Announcement</Link>
        </li>
         <li className="nav-item mx-2">
          <Link to="/cul" className="nav-link text-black d-flex align-items-center">Culture</Link>
        </li>
        <li className="nav-item mx-2">
          <Link to="/about" className="nav-link text-black d-flex align-items-center">About Us</Link>
        </li>
        <li className="nav-item mx-2">
          <Link to="/contact" className="nav-link text-black d-flex align-items-center">Get in Touch</Link>
        </li>
      
        <li className="nav-item mx-2">
          <Link to="/sup" className="nav-link text-black d-flex align-items-center">Help & Support</Link>
        </li>
        <li className="nav-item mx-2">
          <Link to="/signin" className="nav-link text-black d-flex align-items-center">Get Started</Link>
        </li>

        {/* Search Bar */}
        <li className="nav-item mx-2 mb-3 px-2">
          <form className="d-flex" role="search">
            <input
              className="form-control"
              type="search"
              placeholder="Search..."
              aria-label="Search"
            />
           
          </form>
        </li>

        <li className="nav-item mx-2 py-2">
          <a href="tel:+919442482810" className="btn btn-success">
            📞 Call Us: +91 9442482810
          </a>
        </li>

        {/* Login Button */}
        <li className="nav-item mx-2">
          <Link
            to="/login"
            className="btn btn-primary fw-bold  px-3 py-1 d-flex align-items-center"
          >
            Login
          </Link>
        </li>
      </ul>
    </div>
  </div>
</nav>




   
 




    <section className="py-5 bg-light">
      <Container>
        <h2 className="fw-bold text-center mb-4">Help & Support</h2>
        <p className="text-center text-muted mb-5" style={{ maxWidth: "650px", margin: "0 auto" }}>
          We’re committed to providing you with the best experience.
          Contact us for questions, assistance, or guidance — we are happy to help.
        </p>

        {/* Support Options */}
        <Row className="g-4 mb-5">
          {supportOptions.map((item, index) => (
            <Col md={4} key={index}>
              <Card className="h-100 shadow-sm border-0 text-center p-3">
                <Card.Body>
                  <Card.Title className="fw-semibold">{item.title}</Card.Title>
                  <Card.Text className="text-muted small">{item.desc}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Support Form */}
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <Card className="shadow-sm border-0">
              <Card.Body>
                <h5 className="fw-semibold text-center mb-3">Submit a Support Request</h5>

                <Form>
                  <Form.Group className="mb-3">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your full name" />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" />
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label>How can we help?</Form.Label>
                    <Form.Control as="textarea" rows={4} placeholder="Describe your issue or question..." />
                  </Form.Group>

                  <Button 
                    variant="primary"
                    className="w-100 fw-semibold mb-3"
                    style={{ background: "#e77f34", border: "none" }}
                  >
                    Submit Request
                  </Button>

                    <Button
                    className="w-100 fw-semibold"
                    style={{ background: "#25D366", border: "none" }}
                    onClick={handleWhatsAppSend}
                  >
                    Send via WhatsApp
                  </Button>
                </Form>

              </Card.Body>
            </Card>
          </Col>
        </Row>

      </Container>
    </section>
 

  

    <section className="py-5 bg-light">
      <Container>
        <h2 className="fw-bold text-center mb-4">Membership Plans</h2>
        <Row className="g-4 justify-content-center">
          {plans.map((plan, index) => (
            <Col md={6} lg={4} key={index}>
              <Card className="text-center shadow-sm border-0 p-4 h-100">
                <h5 className="fw-semibold">{plan.title}</h5>
                <h3 className="fw-bold my-3">{plan.price}</h3>
                <p className="text-muted small">{plan.benefits}</p>
                <Button style={{ background: "#e77f34", border: "none" }} className="fw-semibold mt-3">
                  Join Now
                </Button>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
     
  
    {/* Footer */}
        <footer>
          <div className="footer-content p-4 d-flex justify-content-around flex-wrap"data-aos="slide-right">
            
                             <div className="footer-links">
                              <h4>
                               BHARATCRAFT
                              </h4>

              <ul>
                 <li><a href="#">About Us</a></li>
              <li><a href="#" >Careers</a></li>
              <li><a href="#" >Blog</a></li>
              <li><a href="#" >Contact</a></li>
              <li><a href="#" >Culture</a></li>

              </ul>
            </div>
               
  
           
  
            <div className="footer-links">
              <h3>SUPPORT</h3>
              <ul>
               <li><a href="#" >Help Center</a></li>
              <li><a href="#" >FAQs</a></li>
              <li><a href="#" >Privacy Policy</a></li>
              <li><a href="#" >Terms & Conditions</a></li>

            </ul>

            </div>

            <div className="footer-links">
              <h4 className="text-white mb-3">Stay Updated</h4>
              <p className="mb-3">     Subscribe for the latest digital assets & offers.</p>
              <form className="d-flex flex-column flex-sm-row gap-2">
                <input type="email" clasName="form-control" placeholder="Enter your email" required />
                <button className="btn btn-danger">Subscribe</button>
              </form>
            </div>
          </div>
         <div className="footer-bottom"data-aos="flip-right">
                       <div className="icons"data-aos="flip-right">
                        <i className="bi bi-facebook"></i>
                        <i className="bi bi-linkedin"></i>
                        <i className="bi bi-pinterest"></i>
                        <i className="bi bi-whatsapp"></i>
                        <i className="bi bi-instagram"></i>
                      </div>
                         <p> BHARATCRAFT &copy; 2025 All rights reserved.</p>
                         </div>
        </footer>
      </>
    );
  }
  
  export default Sup;
  