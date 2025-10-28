// // src/components/Footer/Footer.js
// import React from 'react';
// import { Container, Row, Col } from 'react-bootstrap';

// const Footer = () => {
//     navigate("/footer")
//     const currentYear = new Date().getFullYear();

//     const quickLinks = [
//         { name: "Home", path: "/" },
//         { name: "Services", path: "/services" },
//         { name: "About", path: "/about" },
//         { name: "Contact", path: "/contact" }
//     ];

//     const services = [
//         "Web Development",
//         "Mobile App Development",
//         "UI/UX Design",
//         "E-commerce Solutions",
//         "Digital Marketing",
//         "Cloud Services"
//     ];

//     const socialLinks = [
//         { name: "Facebook", icon: "📘", url: "#" },
//         { name: "Twitter", icon: "🐦", url: "#" },
//         { name: "LinkedIn", icon: "💼", url: "#" },
//         { name: "Instagram", icon: "📷", url: "#" }
//     ];

//     return (
//         <footer className="bg-dark text-light mt-5">
//             <Container className="py-5">
//                 <Row>
//                     {/* Company Info */}
//                     <Col lg={4} md={6} className="mb-4">
//                         <h5 className="text-primary ">MyStore</h5>
//                         <p className="text-light">
//                             We provide comprehensive digital solutions to help businesses grow 
//                             and succeed in the digital age. Quality, innovation, and customer 
//                             satisfaction are at the core of everything we do.
//                         </p>
//                         <div className="mt-4">
//                             <strong>Email:</strong> info@mystore.com<br />
//                             <strong>Phone:</strong> +1 (555) 123-4567<br />
//                             <strong>Address:</strong> 123 Business Ave, NY 10001
//                         </div>
//                     </Col>

//                     {/* Quick Links */}
//                     <Col lg={2} md={6} className="mb-4">
//                         <h6 className="text-primary mb-3">Quick Links</h6>
//                         <ul className="list-unstyled">
//                             {quickLinks.map((link, index) => (
//                                 <li key={index} className="mb-2">
//                                     <a 
//                                         href={link.path} 
//                                         className="text-light text-decoration-none hover-text-primary"
//                                         style={{ transition: 'color 0.3s' }}
//                                         // onMouseOver={(e) => e.target.style.color = '#0d6efd'}
//                                         // onMouseOut={(e) => e.target.style.color = '#fff'}
//                                     >
//                                         {link.name}
//                                     </a>
//                                 </li>
//                             ))}
//                         </ul>
//                     </Col>

//                     {/* Services */}
//                     <Col lg={3} md={6} className="mb-4">
//                         <h6 className="text-primary mb-3">Our Services</h6>
//                         <ul className="list-unstyled">
//                             {services.map((service, index) => (
//                                 <li key={index} className="mb-2">
//                                     <span className="text-light">✓ {service}</span>
//                                 </li>
//                             ))}
//                         </ul>
//                     </Col>

//                     {/* Newsletter & Social */}
//                     <Col lg={3} md={6} className="mb-4">
//                         <h6 className="text-primary mb-3">Newsletter</h6>
//                         <p className="text-light small">
//                             Subscribe to our newsletter for the latest updates and offers.
//                         </p>
//                         <div className="d-flex mb-4">
//                             <input 
//                                 type="email" 
//                                 className="form-control form-control-sm" 
//                                 placeholder="Your email" 
//                             />
//                             <button className="btn btn-primary btn-sm ms-2">Subscribe</button>
//                         </div>
                        
//                         <h6 className="text-primary mb-3">Follow Us</h6>
//                         <div className="d-flex">
//                             {socialLinks.map((social, index) => (
//                                 <a 
//                                     key={index}
//                                     href={social.url} 
//                                     className="text-light me-3 text-decoration-none"
//                                     title={social.name}
//                                     style={{ fontSize: '1.5rem' }}
//                                 >
//                                     {social.icon}
//                                 </a>
//                             ))}
//                         </div>
//                     </Col>
//                 </Row>

//                 <hr className="bg-light my-4" />

//                 {/* Bottom Footer */}
//                 <Row>
//                     <Col md={6} className="text-center text-md-start">
//                         <p className="mb-0">
//                             &copy; {currentYear} MyStore. All rights reserved.
//                         </p>
//                     </Col>
//                     <Col md={6} className="text-center text-md-end">
//                         <div>
//                             <a href="#privacy" className="text-light text-decoration-none me-3 small">
//                                 Privacy Policy
//                             </a>
//                             <a href="#terms" className="text-light text-decoration-none me-3 small">
//                                 Terms of Service
//                             </a>
//                             <a href="#cookies" className="text-light text-decoration-none small">
//                                 Cookie Policy
//                             </a>
//                         </div>
//                     </Col>
//                 </Row>
//             </Container>

//             {/* Style for hover effects */}
          
//         </footer>
//     );
// };

// export default Footer;





import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    // REMOVED: navigate("/footer") - this was causing the issue
    
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { name: "Home", path: "/" },
        { name: "Services", path: "/services" },
        { name: "About", path: "/about" },
        { name: "Contact", path: "/contact" }
    ];

    const services = [
        "Web Development",
        "Mobile App Development",
        "UI/UX Design",
        "E-commerce Solutions",
        "Digital Marketing",
        "Cloud Services"
    ];

    const socialLinks = [
        { name: "Facebook", icon: "📘", url: "#" },
        { name: "Twitter", icon: "🐦", url: "#" },
        { name: "LinkedIn", icon: "💼", url: "#" },
        { name: "Instagram", icon: "📷", url: "#" }
    ];

    return (
        <footer className="bg-dark text-light mt-5">
            <Container className="py-5">
                <Row>
                    {/* Company Info */}
                    <Col lg={4} md={6} className="mb-4">
                        <h5 className="text-primary">MyStore</h5>
                        <p className="text-light">
                            We provide comprehensive digital solutions to help businesses grow 
                            and succeed in the digital age. Quality, innovation, and customer 
                            satisfaction are at the core of everything we do.
                        </p>
                        <div className="mt-4">
                            <strong>Email:</strong> info@mystore.com<br />
                            <strong>Phone:</strong> +1 (555) 123-4567<br />
                            <strong>Address:</strong> 123 Business Ave, NY 10001
                        </div>
                    </Col>

                    {/* Quick Links */}
                    <Col lg={2} md={6} className="mb-4">
                        <h6 className="text-primary mb-3">Quick Links</h6>
                        <ul className="list-unstyled">
                            {quickLinks.map((link, index) => (
                                <li key={index} className="mb-2">
                                    <a 
                                        href={link.path} 
                                        className="text-light text-decoration-none"
                                        style={{ transition: 'color 0.3s' }}
                                        onMouseOver={(e) => e.target.style.color = '#0d6efd'}
                                        onMouseOut={(e) => e.target.style.color = '#fff'}
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </Col>

                    {/* Services */}
                    <Col lg={3} md={6} className="mb-4">
                        <h6 className="text-primary mb-3">Our Services</h6>
                        <ul className="list-unstyled">
                            {services.map((service, index) => (
                                <li key={index} className="mb-2">
                                    <span className="text-light">✓ {service}</span>
                                </li>
                            ))}
                        </ul>
                    </Col>

                    {/* Newsletter & Social */}
                    <Col lg={3} md={6} className="mb-4">
                        <h6 className="text-primary mb-3">Newsletter</h6>
                        <p className="text-light small">
                            Subscribe to our newsletter for the latest updates and offers.
                        </p>
                        <div className="d-flex mb-4">
                            <input 
                                type="email" 
                                className="form-control form-control-sm" 
                                placeholder="Your email" 
                            />
                            <button className="btn btn-primary btn-sm ms-2">Subscribe</button>
                        </div>
                        
                        <h6 className="text-primary mb-3">Follow Us</h6>
                        <div className="d-flex">
                            {socialLinks.map((social, index) => (
                                <a 
                                    key={index}
                                    href={social.url} 
                                    className="text-light me-3 text-decoration-none"
                                    title={social.name}
                                    style={{ fontSize: '1.5rem' }}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </Col>
                </Row>

                <hr className="bg-light my-4" />

                {/* Bottom Footer */}
                <Row>
                    <Col md={6} className="text-center text-md-start">
                        <p className="mb-0">
                            &copy; {currentYear} MyStore. All rights reserved.
                        </p>
                    </Col>
                    <Col md={6} className="text-center text-md-end">
                        <div>
                            <a href="#privacy" className="text-light text-decoration-none me-3 small">
                                Privacy Policy
                            </a>
                            <a href="#terms" className="text-light text-decoration-none me-3 small">
                                Terms of Service
                            </a>
                            <a href="#cookies" className="text-light text-decoration-none small">
                                Cookie Policy
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;