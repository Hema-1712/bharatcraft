import React, { useEffect , useState} from 'react';
import '../assets/style/style.css';
import icon from '../assets/images/logo.png';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Form, Button, Table } from "react-bootstrap";
import {  Accordion } from "react-bootstrap";
import icon1 from '../assets/images/h1.avif';
import icon2 from '../assets/images/a.jpg';

import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
function Signin() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: true,     // animation only once
    });
  }, []);


const festivalDates = [
  { month: "January", festival: "Makar Sankranti / Pongal" },
  { month: "March", festival: "Holi" },
  { month: "April", festival: "Ram Navami / Baisakhi" },
  { month: "August", festival: "Raksha Bandhan / Independence Day" },
  { month: "October", festival: "Navratri / Dussehra" },
  { month: "November", festival: "Diwali" },
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


    <div>

      {/* HERO SECTION */}
      <section 
        className="text-white d-flex align-items-center"
        style={{
          minHeight: "75vh",
          backgroundImage: `url(${icon1})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <Container className="text-center">
          <h1 className="fw-bold  text-light display-4">Welcome to the Bharatcraft</h1>
          <p className="mt-3 mb-4 text-light" style={{ maxWidth: "650px", margin: "0 auto" }}>
            Celebrating India's rich heritage through art, language, music, and community.
          </p>
          <Link to="/cul" 
            style={{ background: "#e77f34", border: "none" }} 
            className="fw-semibold px-4 py-2"
          >
            Explore Culture
          </Link>
        </Container>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-5 bg-white">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <img 
                src={icon2}
                alt="Culture"
                className="img-fluid rounded shadow-sm"
              />
            </Col>
            <Col md={6}>
              <h2 className="fw-bold mb-3">About Us</h2>
              <p className="text-muted">
                Our center promotes cultural exchange, mutual understanding, and artistic appreciation. 
                Through workshops, exhibitions, language classes, and performances, we share the beauty of India with the world.
              </p>
              <Button 
                style={{ background: "#e77f34", border: "none" }}
                className="fw-semibold"
              >
                Learn More
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* QUICK LINKS SECTION */}
      <section className="py-5 bg-light">
        <Container>
          <h2 className="fw-bold text-center mb-4">Explore With Us</h2>
          <Row className="g-4 text-center">

            <Col md={4}>
              <div className="p-4 shadow-sm bg-white rounded">
                <h5 className="fw-semibold">Workshops & Classes</h5>
                <p className="text-muted small">Join yoga, dance, music & language programs.</p>
                <Button variant="outline-dark" size="sm">View Classes</Button>
              </div>
            </Col>

            <Col md={4}>
              <div className="p-4 shadow-sm bg-white rounded">
                <h5 className="fw-semibold">Cultural Events</h5>
                <p className="text-muted small">Attend festivals, exhibitions, and gatherings.</p>
                <Button variant="outline-dark" size="sm">See Events</Button>
              </div>
            </Col>

            <Col md={4}>
              <div className="p-4 shadow-sm bg-white rounded">
                <h5 className="fw-semibold">Visit Us</h5>
                <p className="text-muted small">Find our center location & visiting hours.</p>
                <Button variant="outline-dark" size="sm">Plan Visit</Button>
              </div>
            </Col>

          </Row>
        </Container>
      </section>

    </div>
  

     <section className="py-5 bg-light">
      <Container>
        <h2 className="fw-bold text-center mb-4">Visit Us</h2>
        <p className="text-center text-muted mb-5" style={{ maxWidth: "700px", margin: "0 auto" }}>
          We welcome visitors, students, and cultural enthusiasts.  
          Visit our center to explore exhibitions, attend events, or learn about India’s cultural heritage.
        </p>

        <Row className="g-4">

          {/* Address & Visiting Info */}
          <Col md={6}>
            <Card className="shadow-sm border-0 h-100 p-3">
              <Card.Body>

                <h5 className="fw-semibold mb-3">Location</h5>
                <p className="text-muted small">
                  Embassy Cultural Center,<br/>
                  Near Town Hall, Cultural Avenue,<br/>
                  Madurai.
                </p>

                <h5 className="fw-semibold mt-4 mb-3">Opening Hours</h5>
                <p className="text-muted small mb-0">
                  Monday – Friday: 10:00 AM – 6:00 PM<br/>
                  Saturday: 11:00 AM – 4:00 PM<br/>
                  Sunday & Public Holidays: Closed
                </p>

                <h5 className="fw-semibold mt-4 mb-3">Contact</h5>
                <p className="text-muted small">
                  Phone: +91 9442482810<br/>
                  Email: info@bharatcraft.org
                </p>

              </Card.Body>
            </Card>
          </Col>

          {/* Map */}
          <Col md={6}>
            <Card className="shadow-sm border-0 h-100">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.084814848724!2d80.94616511535533!3d26.846693083158875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfdb8b4d4b0d5%3A0x2f049c1d21fd8f0!2sIndian%20Cultural%20Center!5e0!3m2!1sen!2sin!4v1730912345678"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "320px" }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </Card>
          </Col>

        </Row>
      </Container>
    </section>
     <section className="py-5 bg-white">
      <Container>
        <h2 className="fw-bold text-center mb-4">Send Us a Query</h2>
        <p className="text-center text-muted mb-5" style={{ maxWidth: "650px", margin: "0 auto" }}>
          Have a question about our products, artisans, shipping, or partnership opportunities?
          Send us a message — we typically respond within 24 hours.
        </p>

        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <Card className="shadow-sm border-0">
              <Card.Body>
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your full name" />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Phone Number (Optional)</Form.Label>
                    <Form.Control type="text" placeholder="Enter phone number" />
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label>Your Query</Form.Label>
                    <Form.Control as="textarea" rows={4} placeholder="Type your message here..." />
                  </Form.Group>

                  <Button 
                    variant="primary"
                    className="w-100 fw-semibold"
                    style={{ background: "#e77f34", border: "none" }}
                  >
                    Submit Query
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
        <h2 className="fw-bold text-center mb-4">Festival Calendar</h2>

        <Table bordered hover responsive className="shadow-sm bg-white">
          <thead className="text-center fw-semibold">
            <tr>
              <th>Month</th>
              <th>Festival</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {festivalDates.map((item, index) => (
              <tr key={index}>
                <td>{item.month}</td>
                <td>{item.festival}</td>
              </tr>
            ))}
          </tbody>
        </Table>

      </Container>
    </section>
  


    <section className="py-5 bg-light">
      <Container>
        <h2 className="fw-bold text-center mb-4">Frequently Asked Questions</h2>
        <p className="text-center text-muted mb-5" style={{ maxWidth: "700px", margin: "0 auto" }}>
          Find answers to common questions about our programs, events, and cultural services.
        </p>

        <Row className="justify-content-center">
          <Col md={10} lg={8}>

            <Accordion alwaysOpen>

              <Accordion.Item eventKey="0">
                <Accordion.Header>Do I need prior experience to join workshops?</Accordion.Header>
                <Accordion.Body>
                  No prior experience is required. Our workshops are open to beginners as well as experienced participants.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="1">
                <Accordion.Header>Are the classes paid or free?</Accordion.Header>
                <Accordion.Body>
                  Some cultural awareness programs are free, while training-based workshops may require a small fee.  
                  Fee details are provided during registration.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="2">
                <Accordion.Header>How can I register for events or classes?</Accordion.Header>
                <Accordion.Body>
                  You can register online through our website, or visit our cultural center during working hours for assistance.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="3">
                <Accordion.Header>Can schools and organizations request cultural programs?</Accordion.Header>
                <Accordion.Body>
                  Yes. We collaborate with educational institutions and cultural organizations.  
                  Contact our support team to schedule programs or workshops.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="4">
                <Accordion.Header>Where are the workshops conducted?</Accordion.Header>
                <Accordion.Body>
                  All workshops and classes are held at our cultural center.  
                  Online sessions may be offered for selected courses.
                </Accordion.Body>
              </Accordion.Item>

            </Accordion>

          </Col>
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
  
  export default Signin;
  