// import React, { useState, useEffect } from "react";
// import Navbar from "./components/layout/navbar/navbar";
// import Signup from "./components/authenticate/signup/SignUp";
// import Signin from "./components/authenticate/signin/SignIn";
// import ProductList from "./components/pages/HomePage/HomePage";


// export default function App() {
//   const [user, setUser] = useState(null);
//   const [view, setView] = useState("signin"); // or "signup" or "products"

//   useEffect(() => {
//     const authUser = localStorage.getItem("authUser");
//     if (authUser) {
//       setUser(authUser);
//       setView("products");
//     }
//   }, []);

//   const handleLogin = (username) => {
//     setUser(username);
//     setView("products");
//   };

//   const handleLogout = () => {
//     localStorage.removeItem("authUser");
//     setUser(null);
//     setView("signin");
//   };

//   return (
//     <>
//       <Navbar user={user} onLogout={handleLogout} />
//       {view === "signup" && <Signup />}
//       {view === "signin" && <Signin onLogin={handleLogin} />}
//       {view === "products" && <ProductList />}
//       {!user && (
//         <div className="container mt-3">
//           {view === "signin" ? (
//             <p>
//               Don't have an account?{" "}
//               <button
//                 className="btn btn-link"
//                 onClick={() => setView("signup")}
//               >
//                 Sign Up
//               </button>
//             </p>
//           ) : (
//             <p>
//               Already have an account?{" "}
//               <button
//                 className="btn btn-link"
//                 onClick={() => setView("signin")}
//               >
//                 Sign In
//               </button>
//             </p>
//           )}
//         </div>
//       )}
//     </>
//   );
// }


// import React, { useEffect, useState } from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import Navbar from "./components/layout/navbar/navbar";
// import Signup from "./components/authenticate/signup/SignUp";
// import Signin from "./components/authenticate/signin/SignIn";
// import ProductList from "./components/pages/HomePage/HomePage";
// import Footer from "./components/layout/footer/footer";

// export default function App() {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const authUser = localStorage.getItem("authUser");
//     if (authUser) {
//       setUser(authUser);
//     }
//   }, []);

//   const handleLogin = (username) => {
//     setUser(username);
//     localStorage.setItem("authUser", username);
//   };

//   const handleLogout = () => {
//     localStorage.removeItem("authUser");
//     setUser(null);
//   };

//   return (
//     <Router>
//       <Navbar user={user} onLogout={handleLogout} />
//       <Routes>
//         <Route
//           path="/"
//           element={
//             user ? <Navigate to="/products" /> : <Navigate to="/signin" />
//           }
//         />
//         <Route
//           path="/signin"
//           element={
//             user ? <Navigate to="/products" /> : <Signin onLogin={handleLogin} />
//           }
//         />
//         <Route
//           path="/signup"
//           element={
//             user ? <Navigate to="/products" /> : <Signup />
//           }
//         />
//         <Route
//           path="/products"
//           element={
//             user ? <ProductList /> : <Navigate to="/signin" />
//           }
//         />
//         {/* Fallback for unmatched routes */}
//         <Route path="*" element={<Navigate to="/" />} />

//         {/* <Route
//           path="/footer"
//           element={
//             user ? <Footer/> : <Navigate to="/signin" />
//           }
//         />
//         Fallback for unmatched routes
//         <Route path="*" element={<Navigate to="/" />} /> */}

// <Route  
// path="/footer"
// element={
//   user?<Footer/>:<Navigate to="/signin" />}
//   />
//         <Route path="*" element={<Navigate to="/" />} />
//       </Routes>
//     </Router>
    
//   );
// }




// import React, { useEffect, useState } from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import Navbar from "./components/layout/navbar/navbar";
// import Signup from "./components/authenticate/signup/SignUp";
// import Signin from "./components/authenticate/signin/SignIn";
// import ProductList from "./components/pages/HomePage/HomePage";
// import Footer from "./components/layout/footer/footer";

// export default function App() {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const authUser = localStorage.getItem("authUser");
//     if (authUser) {
//       setUser(authUser);
//     }
//   }, []);

//   const handleLogin = (username) => {
//     setUser(username);
//     localStorage.setItem("authUser", username);
//   };

//   const handleLogout = () => {
//     localStorage.removeItem("authUser");
//     setUser(null);
//   };

//   return (
//     <Router>
//       <div className="app-container">
//         <Navbar user={user} onLogout={handleLogout} />
//         <div className="main-content">
//           <Routes>
//             <Route
//               path="/"
//               element={
//                 user ? <Navigate to="/products" /> : <Navigate to="/signin" />
//               }
//             />
//             <Route
//               path="/signin"
//               element={
//                 user ? <Navigate to="/products" /> : <Signin onLogin={handleLogin} />
//               }
//             />
//             <Route
//               path="/signup"
//               element={
//                 user ? <Navigate to="/products" /> : <Signup />
//               }
//             />
//             <Route
//               path="/products"
//               element={
//                 user ? <ProductList /> : <Navigate to="/signin" />
//               }
//             />

// {/*             
//         <Route path="/" element={<ProductList />} />
//         <Route path="/order" element={<OrderPage />} />
//         <Route path="/buy-now" element={<BuyNow />} /> */}

//          <Route path="/order" element={<OrderPage />} />
      
//             {/* Footer page route */}
//             <Route
//               path="/footer"
//               element={
//                 user ? <Footer /> : <Navigate to="/signin" />
//               }
//             />
//             {/* Fallback for unmatched routes */}
//             <Route path="*" element={<Navigate to="/" />} />
//           </Routes>
//         </div>
//         {/* Add Footer to appear on all pages (optional) */}
//         <Footer />
//       </div>
//     </Router>
//   );
// }






import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/layout/navbar/navbar";
import Signup from "./components/authenticate/signup/SignUp";
import Signin from "./components/authenticate/signin/SignIn";
import ProductList from "./components/pages/HomePage/HomePage";
import Footer from "./components/layout/footer/footer";
import OrderPage from "./components/pages/OrderPage/OrderPage";
import BuyNow from "./components/pages/BuyNow/BuyNow"; // Import these components
import { CardText } from "react-bootstrap";
import Cart from "./components/pages/Cart/Cart";
import OrderedCompound from "./components/pages/Ordered/Ordered";


export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const authUser = localStorage.getItem("authUser");
    if (authUser) {
      setUser(authUser);
    }
  }, []);

  const handleLogin = (username) => {
    setUser(username);
    localStorage.setItem("authUser", username);
  };

  const handleLogout = () => {
    localStorage.removeItem("authUser");
    setUser(null);
  };

  return (
    <Router>
      <div className="app-container">
        <Navbar user={user} onLogout={handleLogout} />
        <div className="main-content">
          <Routes>
            <Route
              path="/"
              element={
                user ? <Navigate to="/products" /> : <Navigate to="/signin" />
              }
            />
            <Route
              path="/signin"
              element={
                user ? <Navigate to="/products" /> : <Signin onLogin={handleLogin} />
              }
            />
            <Route
              path="/signup"
              element={
                user ? <Navigate to="/products" /> : <Signup />
              }
            />
            <Route
              path="/products"
              element={
                user ? <ProductList /> : <Navigate to="/signin" />
              }
            />
            {/* Add Order and Payment routes below */}
            <Route
              path="/order"
              element={
                user ? <OrderPage /> : <Navigate to="/signin" />
              }
            />
            <Route
              path="/buy-now"
              element={
                user ? <BuyNow /> : <Navigate to="/signin" />
              }
            />
            <Route
              path="/cart"
              element={
                user ? <Cart /> : <Navigate to="/signin" />
              }
            />
             <Route
              path="/ordered"
              element={
                user ? <OrderedCompound /> : <Navigate to="/signin" />
              }
            />
            {/* Footer page route */}
            <Route
              path="/footer"
              element={
                user ? <Footer /> : <Navigate to="/signin" />
              }
            />
            {/* Fallback for unmatched routes */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
        {/* Add Footer to appear on all pages (optional) */}
        <Footer />
      </div>
    </Router>
  );
}
