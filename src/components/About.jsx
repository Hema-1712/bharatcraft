import React, { useEffect , useState} from 'react';
import '../assets/style/style.css';
import icon from '../assets/images/logo.png';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card } from "react-bootstrap";

import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: true,     // animation only once
    });
  }, []);



  const aboutPoints = [
  {
    title: "Celebrating Indian Craftsmanship",
    desc: "Each product reflects the skill and heritage of artisans from diverse cultural regions of India."
  },
  {
    title: "Supporting Artisan Communities",
    desc: "We work directly with craft clusters to ensure fair wages, respect, and sustainable growth."
  },
  {
    title: "Handmade, Not Mass-Produced",
    desc: "Every item carries the mark of human touch — unique, soulful, and full of character."
  },
  {
    title: "Preserving Cultural Heritage",
    desc: "Traditional techniques and storytelling are kept alive through continued practice and appreciation."
  },
  {
    title: "Eco-Conscious Creations",
    desc: "Natural materials and slow craftsmanship help reduce waste and protect the environment."
  },
  {
    title: "Sharing Stories of India",
    desc: "Our products are more than objects — they are narratives of culture, history, and identity."
  },
];



const historyPoints = [
  {
    title: "Roots in Indian Craft Villages",
    desc: "BharatCraft began with visits to rural craft communities across India, discovering age-old techniques passed from one generation to the next."
  },
  {
    title: "Inspired by Heritage",
    desc: "Traditional crafts like handloom weaving, terracotta, block printing, and metalwork formed the foundation of our purpose and identity."
  },
  {
    title: "Connecting Artisans to the World",
    desc: "What started as a small effort to support local artisans grew into a platform that brings handcrafted Indian art to global audiences."
  },
  {
    title: "Preserving Craft Traditions",
    desc: "We collaborate with master craftsmen to keep ancient skills alive, ensuring that cultural knowledge is not lost in the age of mass production."
  },
  {
    title: "A Modern Cultural Movement",
    desc: "BharatCraft bridges tradition and contemporary lifestyle, making heritage pieces relevant, wearable, and part of everyday living."
  },
  {
    title: "The Journey Continues",
    desc: "Our mission is ongoing—to empower artisans, celebrate culture, and share the beauty of India’s craftsmanship with the world."
  },
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
        <h2 className="fw-bold text-center mb-4">About BharatCraft</h2>
        
        <Row className="g-4">
          {aboutPoints.map((point, index) => (
            <Col md={6} lg={4} key={index}>
              <Card className="h-100 shadow-sm border-0">
                <Card.Body>
                  <Card.Title className="fw-semibold">{point.title}</Card.Title>
                  <Card.Text className="text-muted small">{point.desc}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  
  <section className="py-5 bg-white">
      <Container>
        <h2 className="fw-bold text-center mb-4">Our History</h2>
        <Row className="g-4">
          {historyPoints.map((point, index) => (
            <Col md={6} lg={4} key={index}>
              <Card className="h-100 shadow-sm border-0">
                <Card.Body>
                  <Card.Title className="fw-semibold">{point.title}</Card.Title>
                  <Card.Text className="text-muted small">{point.desc}</Card.Text>
                </Card.Body>
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
  
  export default About;
  