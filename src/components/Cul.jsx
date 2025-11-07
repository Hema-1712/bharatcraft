import React, { useEffect , useState} from 'react';
import '../assets/style/style.css';
import icon from '../assets/images/logo.png';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card } from "react-bootstrap";

import img1 from "../assets/images/i1.avif";
import img2 from "../assets/images/i2.jpg";
import img3 from "../assets/images/i3.avif";
import img4 from "../assets/images/i4.avif";
import img5 from "../assets/images/i5.avif";
import img6 from "../assets/images/i6.avif";
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
function Cul() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: true,     // animation only once
    });
  }, []);


const cultureItems = [
  {
    title: "Traditional Handicrafts",
    desc: "India is known for its diverse craft heritage — from pottery and wood carving to handloom weaving and metalwork.",
    img: img1
  },
  {
    title: "Classical Music & Dance",
    desc: "Cultural forms like Bharatanatyam, Kathak, Odissi, Carnatic, and Hindustani reflect deep artistic traditions.",
    img: img2
  },
  {
    title: "Festivals & Celebrations",
    desc: "India celebrates countless festivals symbolizing joy, devotion, and unity across regions.",
    img: img3
  },
  {
    title: "Indian Cuisine",
    desc: "Rich spices, flavors, and regional variations make Indian cuisine known around the world.",
    img: img4
  },
  {
    title: "Art & Textiles",
    desc: "From Madhubani to Pattachitra and silk weaving — Indian art reflects storytelling and heritage.",
    img: img5
  },
  {
    title: "Languages & Literature",
    desc: "India is home to 22 major languages and centuries of poetry, philosophy, and literary history.",
    img: img6
  },
];

  const partners = [
  {
    name: "Indian Council for Cultural Relations (ICCR)",
    desc: "Our core cultural exchange partner responsible for global cultural outreach and artist collaborations."
  },
  {
    name: "Ministry of External Affairs (MEA), India",
    desc: "Supporting international cultural diplomacy, educational ties, and cultural heritage promotion."
  },
  {
    name: "Local Cultural Foundations",
    desc: "Collaborating with community organizations to promote cultural engagement and festival celebrations."
  },
  {
    name: "Universities & Art Schools",
    desc: "Working together to conduct cultural lectures, workshops, and academic exchange programs."
  },
];

const awards = [
  { title: "Cultural Heritage Award 2022", desc: "Recognized for promoting cultural diplomacy and artistic exchange." },
  { title: "Community Impact Award 2023", desc: "Honored for cultural education outreach in schools and universities." },
  { title: "International Harmony Award", desc: "Awarded for fostering cross-cultural friendships and cooperation." },
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


   




    <section className="py-5 bg-white">
      <Container>
        <h2 className="fw-bold text-center mb-4">Indian Culture</h2>
        <p className="text-center text-muted mb-5" style={{ maxWidth: "700px", margin: "0 auto" }}>
          India's cultural identity is rooted in artistic expression, diverse traditions, unity, and heritage.
        </p>

        <Row className="g-4">
          {cultureItems.map((item, index) => (
            <Col md={6} lg={4} key={index}>
              <Card className="h-100 shadow-sm border-0">
                <img src={item.img} alt='culture' className='img-fluid' style={{ height: "200px", objectFit: "cover" }} />
                <Card.Body className="text-center">
                  <Card.Title className="fw-semibold">{item.title}</Card.Title>
                  <Card.Text className="text-muted small">{item.desc}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
 




    <section className="py-5 bg-white">
      <Container>
        <h2 className="fw-bold text-center mb-4">Awards & Recognitions</h2>
        <Row className="g-4">
          {awards.map((award, index) => (
            <Col md={4} key={index}>
              <Card className="shadow-sm border-0 p-4 h-100 text-center">
                <Card.Title className="fw-semibold">{award.title}</Card.Title>
                <Card.Text className="text-muted small">{award.desc}</Card.Text>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
 



    <section className="py-5 bg-light">
      <Container>
        <h2 className="fw-bold text-center mb-4">Our Cultural Collaborations</h2>
        <p className="text-center text-muted mb-5" style={{ maxWidth: "700px", margin: "0 auto" }}>
          We proudly collaborate with national and international organizations to promote cultural understanding and exchange.
        </p>

        <Row className="g-4">
          {partners.map((partner, index) => (
            <Col md={6} lg={3} key={index}>
              <Card className="h-100 shadow-sm border-0 text-center p-3">
                
                <Card.Body>
                  <Card.Title className="fw-semibold">{partner.name}</Card.Title>
                  <Card.Text className="text-muted small">{partner.desc}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

      </Container>
    </section>
 

    <section className="py-5 bg-light">
      <Container>
        <h2 className="fw-bold text-center mb-4">Our Mission & Vision</h2>
        <p className="text-center text-muted mb-5" style={{ maxWidth: "700px", margin: "0 auto" }}>
          We are dedicated to promoting cultural understanding, artistic appreciation, 
          and meaningful connections between communities.
        </p>

        <Row className="g-4">
          <Col md={6}>
            <Card className="shadow-sm border-0 h-100 p-3">
              <Card.Body>
                <h4 className="fw-semibold text-center mb-3">Our Mission</h4>
                <Card.Text className="text-muted">
                  Our mission is to preserve, promote, and share the cultural heritage of India 
                  through events, exhibitions, education, and artistic collaboration.
                  We strive to create a space where history, creativity, and tradition come together
                  to inspire learning and mutual respect.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6}>
            <Card className="shadow-sm border-0 h-100 p-3">
              <Card.Body>
                <h4 className="fw-semibold text-center mb-3">Our Vision</h4>
                <Card.Text className="text-muted">
                  Our vision is to build a globally connected cultural community where diverse traditions 
                  are celebrated and shared. We aim to encourage cultural exchange, nurture emerging artists, 
                  and foster a deeper appreciation for India's art, values, and heritage across the world.
                </Card.Text>
              </Card.Body>
            </Card>
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
  
  export default Cul;
  