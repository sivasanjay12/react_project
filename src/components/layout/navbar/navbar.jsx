

// import React, { useState, useEffect } from "react";
// import { LinkContainer } from "react-router-bootstrap";
// import { Navbar, Container, Nav, Button, Badge } from "react-bootstrap";

// export default function AppNavbar({ user, onLogout }) {
//   const [cartCount, setCartCount] = useState(0);

//   // Function to get cart count from localStorage
//   const getCartCount = () => {
//     try {
//       const savedCart = localStorage.getItem('cart');
//       if (savedCart) {
//         const cart = JSON.parse(savedCart);
//         return cart.reduce((total, item) => total + (item.qty || 1), 0);
//       }
//     } catch (error) {
//       console.error("Error reading cart from localStorage:", error);
//     }
//     return 0;
//   };

//   // Update cart count on component mount and set up storage listener
//   useEffect(() => {
//     // Initial count
//     setCartCount(getCartCount());

//     // Listen for storage changes (when cart is updated from other components)
//     const handleStorageChange = (e) => {
//       if (e.key === 'cart') {
//         setCartCount(getCartCount());
//       }
//     };

//     window.addEventListener('storage', handleStorageChange);
    
//     // Also set up a custom event listener for cart updates within the same tab
//     const handleCartUpdate = () => {
//       setCartCount(getCartCount());
//     };

//     window.addEventListener('cartUpdated', handleCartUpdate);

//     // Poll for changes (fallback)
//     const interval = setInterval(() => {
//       setCartCount(getCartCount());
//     }, 1000);

//     // Cleanup
//     return () => {
//       window.removeEventListener('storage', handleStorageChange);
//       window.removeEventListener('cartUpdated', handleCartUpdate);
//       clearInterval(interval);
//     };
//   }, []);

//   return (
//     <Navbar bg="light" expand="lg" className="py-2">
//       <Container>
//         <LinkContainer to="/">
//           <Navbar.Brand className="fw-bold">Siva Stores</Navbar.Brand>
//         </LinkContainer>
        
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
//         <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
//           {user ? (
//             <>
             
//               {/* Cart Icon with Badge */}
//               <div className="d-flex align-items-center me-3 position-relative card-badge">
//                 <LinkContainer to="/cart">
//                   <Nav.Link className="p-0 me-2">
//                     <i 
//                       className="fa fa-shopping-cart" 
//                       style={{ 
//                         fontSize: "1.5rem",
//                         color: "#6c757d"
//                       }}
//                     ></i>
//                   </Nav.Link>
//                 </LinkContainer>
//                 {/* {cartCount > 0 && (
//                   <Badge 
//                     bg="danger" 
//                     className="position-absolute"
//                     style={{ 
//                       fontSize: "0.65rem",
//                       top: "-8px",
//                       right: "-5px",
//                       minWidth: "18px",
//                       height: "18px",
//                       display: "flex",
//                       alignItems: "center",
//                       justifyContent: "center",
//                       borderRadius: "50%",
//                       border: "2px solid white",
//                       fontWeight: "bold",
//                       "@media (maxWidth: 768px)": {
//         right: "auto",
//         left: "155px",
//         top: "-8px"
//       }
//                     }}
                    
//                   >
//                     {cartCount > 9 ? "9+" : cartCount}
//                   </Badge>

                  
//                 )} */}

//                 {cartCount > 0 && (
//   <Badge 
//     bg="danger" 
//     className="position-absolute "
//     style={{ 
//       fontSize: "0.65rem",
//       top: "-8px",
//       right: "-5px",
//       minWidth: "18px",
//       height: "18px",
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "center",
//       borderRadius: "50%",
//       border: "2px solid white",
//       fontWeight: "bold"
      
//     }}
//   >
//     {cartCount > 9 ? "9+" : cartCount}
//   </Badge>
// )}
//               </div>

//               <LinkContainer to="/ordered">
//                   <Nav.Link className="p-0 me-2">
//                   My Order
//                   </Nav.Link>
//                 </LinkContainer>

//               <Navbar.Text className="me-3 d-none d-sm-block">
                
//               </Navbar.Text>
              
//               <Navbar.Text className="me-3 d-none d-sm-block">
//                 Hello, {user}
//               </Navbar.Text>
              
//               <Button 
//                 variant="outline-danger" 
//                 size="sm"
//                 onClick={onLogout}
//               >
//                 Logout
//               </Button>
//             </>
//           ) : (
//             <Nav className="align-items-center">
//               <LinkContainer to="/signin">
//                 <Nav.Link className="px-2">Sign In</Nav.Link>
//               </LinkContainer>
              
//               <LinkContainer to="/signup">
//                 <Button 
//                   className="ms-2" 
//                   variant="primary" 
//                   size="sm"
//                 >
//                   Sign Up
//                 </Button>
//               </LinkContainer>
//             </Nav>
//           )}
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }




import React, { useState, useEffect } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Container, Nav, Button, Badge } from "react-bootstrap";

export default function AppNavbar({ user, onLogout }) {
  const [cartCount, setCartCount] = useState(0);

  // Function to get cart count from localStorage
  const getCartCount = () => {
    try {
      const savedCart = localStorage.getItem('cart');
      if (savedCart) {
        const cart = JSON.parse(savedCart);
        return cart.reduce((total, item) => total + (item.qty || 1), 0);
      }
    } catch (error) {
      console.error("Error reading cart from localStorage:", error);
    }
    return 0;
  };

  // Update cart count on component mount and set up storage listener
  useEffect(() => {
    // Initial count
    setCartCount(getCartCount());

    // Listen for storage changes (when cart is updated from other components)
    const handleStorageChange = (e) => {
      if (e.key === 'cart') {
        setCartCount(getCartCount());
      }
    };

    window.addEventListener('storage', handleStorageChange);
    
    // Also set up a custom event listener for cart updates within the same tab
    const handleCartUpdate = () => {
      setCartCount(getCartCount());
    };

    window.addEventListener('cartUpdated', handleCartUpdate);

    // Poll for changes (fallback)
    const interval = setInterval(() => {
      setCartCount(getCartCount());
    }, 1000);

    // Cleanup
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('cartUpdated', handleCartUpdate);
      clearInterval(interval);
    };
  }, []);

  return (
    <Navbar bg="light" expand="lg" className="py-2">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand className="fw-bold">Siva Stores</Navbar.Brand>
        </LinkContainer>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          {user ? (
            <>
              {/* Cart Icon with Badge - Always together */}
              <div className="d-flex align-items-center me-3 position-relative">
                <LinkContainer to="/cart">
                  <Nav.Link className="p-0 me-2 position-relative">
                    <i 
                      className="fa fa-shopping-cart" 
                      style={{ 
                        fontSize: "1.5rem",
                        color: "#6c757d"
                      }}
                    ></i>
                    {cartCount > 0 && (
                      <Badge 
                        bg="danger" 
                        className="position-absolute"
                        style={{ 
                          fontSize: "0.65rem",
                          top: "-8px",
                          right: "-15px",
                          minWidth: "18px",
                          height: "18px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          borderRadius: "50%",
                          border: "2px solid white",
                          fontWeight: "bold"
                        }}
                      >
                        {cartCount > 9 ? "9+" : cartCount}
                      </Badge>
                    )}
                  </Nav.Link>
                </LinkContainer>
              </div>

              {/* My Order Link */}
              <div className="d-flex align-items-center me-3">
                <LinkContainer to="/ordered">
                  <Nav.Link className="p-0">
                    My Order
                  </Nav.Link>
                </LinkContainer>
              </div>

              {/* User Info and Logout */}
              <div className="d-flex align-items-center">
                <Navbar.Text className="me-3 d-none d-sm-block">
                  Hello, {user}
                </Navbar.Text>
                
                <Button 
                  variant="outline-danger" 
                  size="sm"
                  onClick={onLogout}
                >
                  Logout
                </Button>
              </div>
            </>
          ) : (
            <Nav className="align-items-center">
              <LinkContainer to="/signin">
                <Nav.Link className="px-2">Sign In</Nav.Link>
              </LinkContainer>
              
              <LinkContainer to="/signup">
                <Button 
                  className="ms-2" 
                  variant="primary" 
                  size="sm"
                >
                  Sign Up
                </Button>
              </LinkContainer>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}