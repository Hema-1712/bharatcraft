import React, { useEffect , useState} from 'react';
import '../assets/style/style.css';
import icon from '../assets/images/logo.png';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from "react-bootstrap";

import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
function Shop() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: true,     // animation only once
    });
  }, []);

const events = [
  {
    title: "Classical Dance Workshop",
    date: "25 February 2025",
    time: "4:00 PM – 6:00 PM",
    desc: "An interactive session to learn the basics of Bharatanatyam and Kathak from trained instructors."
  },
  {
    title: "Indian Handicraft Exhibition",
    date: "10 March 2025",
    time: "10:00 AM – 5:00 PM",
    desc: "Discover handcrafted art, textiles, pottery, and traditional crafts from various regions of India."
  },
  {
    title: "Cultural Music Evening",
    date: "20 March 2025",
    time: "6:30 PM – 9:00 PM",
    desc: "Experience live classical and folk music celebrating India’s rich musical heritage."
  },

  {
    title: "Yoga & Meditation",
    schedule: "Every Monday & Wednesday",
    time: "6:30 AM – 7:30 AM",
    desc: "Experience relaxation, balance, and well-being through guided yoga and meditation practices."
  },
  {
    title: "Classical Dance Classes",
    schedule: "Every Tuesday & Friday",
    time: "5:00 PM – 6:30 PM",
    desc: "Learn Bharatanatyam and Kathak from experienced instructors in a structured cultural environment."
  },
  {
    title: "Hindi Language Course",
    schedule: "Weekends",
    time: "11:00 AM – 12:30 PM",
    desc: "Beginner-friendly spoken Hindi classes focusing on conversation and cultural expressions."
  },
  {
    title: "Indian Music Training",
    schedule: "Every Thursday",
    time: "4:00 PM – 6:00 PM",
    desc: "Learn vocal music or classical instruments like Tabla, Sitar, or Harmonium from trained gurus."
  },

];


  const teamMembers = [
  {
    name: "Mr. Rajesh Verma",
    role: "Cultural Director",
    bio: "Oversees all cultural programs, collaborations, and international outreach."
  },
  {
    name: "Ms. Anjali Sharma",
    role: "Dance & Performance Coordinator",
    bio: "Specializes in classical and contemporary Indian dance training and events."
  },
  {
    name: "Dr. Arvind Rao",
    role: "Cultural Research & Language Instructor",
    bio: "Teaches Hindi language and conducts cultural history seminars and workshops."
  },
  {
    name: "Mrs. Sunita Kapoor",
    role: "Music & Art Workshop Lead",
    bio: "Guides participants in vocal, instrumental music, and traditional arts."
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


   



    <section className="py-5 bg-white">
      <Container>
        <h2 className="fw-bold text-center mb-4">Upcoming Events</h2>
        <p className="text-center text-muted mb-5" style={{ maxWidth: "700px", margin: "0 auto" }}>
          Join us for cultural programs, workshops, exhibitions, and performances celebrating India’s heritage.
        </p>

        <Row className="g-4">
          {events.map((event, index) => (
            <Col md={6} lg={4} key={index}>
              <Card className="h-100 shadow-sm border-0 p-3">
                <Card.Body>
                  <Card.Title className="fw-semibold mb-2">{event.title}</Card.Title>
                  
                  <div className="small text-muted mb-2">
                    <strong>Date:</strong> {event.date}
                    <br />
                    <strong>Time:</strong> {event.time}
                  </div>

                  <Card.Text className="text-muted small mb-3">{event.desc}</Card.Text>

                  <Button 
                    className="w-100 fw-semibold"
                    style={{ background: "#e77f34", border: "none" }}
                  >
                    Register / Learn More
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

      </Container>
    </section>
 

   
    <section className="py-5 bg-white">
      <Container>
        <h2 className="fw-bold text-center mb-4">Volunteer With Us</h2>
        <p className="text-muted text-center mb-5" style={{ maxWidth: "700px", margin: "0 auto" }}>
          Join our cultural center as a volunteer and contribute to events, workshops, and community programs.
        </p>

        <Row className="justify-content-center">
          <Col md={8}>
            <Card className="shadow-sm border-0 p-4 text-center">
              <Card.Text className="text-muted mb-4">
                Volunteers assist in managing cultural festivals, helping instructors, supporting visitors, 
                and promoting cultural awareness.
              </Card.Text>
              <Button style={{ background: "#e77f34", border: "none" }} className="fw-semibold px-4">
                Apply to Volunteer
              </Button>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
 



    <section className="py-5 bg-white">
      <Container>
        <h2 className="fw-bold text-center mb-4">Our Cultural Team</h2>
        <p className="text-center text-muted mb-5" style={{ maxWidth: "700px", margin: "0 auto" }}>
          Meet the dedicated professionals who bring cultural heritage to life through programs and community engagement.
        </p>

        <Row className="g-4">
          {teamMembers.map((member, index) => (
            <Col md={6} lg={3} key={index}>
              <Card className="h-100 text-center border-0 shadow-sm p-3">
                
                <Card.Body>
                  <Card.Title className="fw-semibold">{member.name}</Card.Title>
                  <p className="text-muted small mb-1">{member.role}</p>
                  <Card.Text className="text-muted small">{member.bio}</Card.Text>
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
  
  export default Shop;
  