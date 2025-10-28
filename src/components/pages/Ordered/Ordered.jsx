// import React, { useState } from "react";
// import { Container, Card, Button, Alert } from "react-bootstrap";

// export default function OrderedPage({ placed, product }) {
//   const [productList, setProductList] = useState(product ? [product] : []);

//   // Only allow adding if placed is true and product exists
//   const handleAddProduct = () => {
//     if (placed && product) {
//       setProductList(prev => [...prev, product]);
//     }
//   };

//   if (!placed) {
//     return (
//       <Container className="mt-5">
//         <Card className="p-4 mb-4">
//           <Alert variant="warning">You ordered nothing.</Alert>
//         </Card>
//       </Container>
//     );
//   }

//   return (
//     <Container className="mt-5">
//       <Card className="p-4 mb-4">
//         <h4>My Orders</h4>
//         {productList.length > 0 && productList.map((prod, idx) => (
//           <Card className="mb-3 p-2" key={idx}>
//             <div className="d-flex align-items-center">
//               <img src={prod.image} alt={prod.name} width={80} style={{ objectFit: 'cover', borderRadius: 8 }} />
//               <div className="ms-3 flex-grow-1">
//                 <div className="fw-bold mb-1">{prod.name}</div>
//                 <div style={{ color: '#666' }}>{prod.description}</div>
//                 <div className="mt-2">
//                   <span style={{ fontWeight: 'bold', color: '#1a8754' }}>
//                     Delivered on Aug 15, 2023
//                   </span>
//                 </div>
//               </div>
//               <div>
//                 <Button variant="link" style={{ textDecoration: 'none', fontSize: 28, padding: 0 }}>›</Button>
//               </div>
//             </div>
//           </Card>
//         ))}
//         <Button onClick={handleAddProduct} variant="outline-success">
//           Add Another Product
//         </Button>
//       </Card>
//     </Container>
//   );
// }






// import React, { useState, useEffect } from "react";
// import { Container, Card, Button, Alert } from "react-bootstrap";

// export default function OrderedCompound() {
//   // retrieve order state from localStorage on mount
//   const [placed, setPlaced] = useState(false);
//   const [product, setProduct] = useState(null);
//   const [productList, setProductList] = useState([]);

//   useEffect(() => {
//     const orderPlaced = localStorage.getItem("orderedPlaced") === "true";
//     const orderProduct = JSON.parse(localStorage.getItem("orderedProduct") || "null");
//     setPlaced(orderPlaced);
//     setProduct(orderProduct);
//     if (orderPlaced && orderProduct) setProductList([orderProduct]);
//   }, []);

//   const handleAddProduct = () => {
//     if (placed && product) setProductList(prev => [...prev, product]);
//   };

//   if (!placed || !product) {
//     return (
//       <Container className="mt-5">
//         <Card className="p-4 mb-4">
//           <Alert variant="warning">You ordered nothing.</Alert>
//         </Card>
//       </Container>
//     );
//   }

//   return (
//     <Container className="mt-5">
//       <Card className="p-4 mb-4">
//         <h4>My Orders</h4>
//         {productList.map((prod, idx) => (
//           <Card className="mb-3 p-2" key={idx}>
//             <div className="d-flex align-items-center">
//               <img src={prod.image} alt={prod.name} width={80} style={{ objectFit: 'cover', borderRadius: 8 }} />
//               <div className="ms-3 flex-grow-1">
//                 <div className="fw-bold mb-1">{prod.name}</div>
//                 <div style={{ color: '#666' }}>{prod.description}</div>
//                 <div className="mt-2">
//                   <span style={{ fontWeight: 'bold', color: '#1a8754' }}>
//                     Delivered on Aug 15, 2023
//                   </span>
//                 </div>
//               </div>
//               <div>
//                 <Button variant="link" style={{ textDecoration: 'none', fontSize: 28, padding: 0 }}>›</Button>
//               </div>
//             </div>
//           </Card>
//         ))}
//         <Button onClick={handleAddProduct} variant="outline-success">
//           Add Another Product
//         </Button>
//       </Card>
//     </Container>
//   );
// }








// import React, { useState, useEffect } from "react";
// import { Container, Card, Button, Alert } from "react-bootstrap";

// export default function OrderedCompound() {
//   // retrieve order state from localStorage on mount
//   const [placed, setPlaced] = useState(false);
//   const [product, setProduct] = useState(null);
//   const [productList, setProductList] = useState([]);
//   const [ratings, setRatings] = useState({});

//   useEffect(() => {
//     const orderPlaced = localStorage.getItem("orderedPlaced") === "true";
//     const orderProduct = JSON.parse(localStorage.getItem("orderedProduct") || "null");
//     setPlaced(orderPlaced);
//     setProduct(orderProduct);
//     if (orderPlaced && orderProduct) {
//       setProductList([orderProduct]);
      
//       // Initialize ratings from localStorage or set to 0
//       const savedRatings = JSON.parse(localStorage.getItem("productRatings") || "{}");
//       setRatings(savedRatings);
//     }
//   }, []);

//   const handleAddProduct = () => {
//     if (placed && product) {
//       const newProduct = {
//         ...product,
//         id: Date.now() // Add unique ID for each product
//       };
//       setProductList(prev => [...prev, newProduct]);
//     }
//   };

//   const handleRatingClick = (productId, rating) => {
//     const newRatings = {
//       ...ratings,
//       [productId]: rating
//     };
//     setRatings(newRatings);
//     localStorage.setItem("productRatings", JSON.stringify(newRatings));
//   };

//   const getCurrentDateTime = () => {
//     const now = new Date();
//     const options = { 
//       year: 'numeric', 
//       month: 'short', 
//       day: 'numeric',
//       hour: '2-digit',
//       minute: '2-digit'
//     };
//     return now.toLocaleDateString('en-US', options);
//   };

//   const StarRating = ({ productId, currentRating }) => {
//     return (
//       <div className="star-rating mt-2">
//         {[1, 2, 3, 4, 5].map((star) => (
//           <span
//             key={star}
//             onClick={() => handleRatingClick(productId, star)}
//             style={{
//               cursor: 'pointer',
//               fontSize: '24px',
//               color: star <= currentRating ? '#ffc107' : '#e4e5e9',
//               marginRight: '2px',
//               transition: 'color 0.2s ease-in-out'
//             }}
//             onMouseEnter={(e) => {
//               if (star <= currentRating) return;
//               e.target.style.color = '#ffc107';
//             }}
//             onMouseLeave={(e) => {
//               if (star <= currentRating) return;
//               e.target.style.color = '#e4e5e9';
//             }}
//           >
//             ★
//           </span>
//         ))}
//         <span style={{ marginLeft: '8px', fontSize: '14px', color: '#666' }}>
//           {currentRating > 0 ? `${currentRating}/5` : 'Rate this product'}
//         </span>
//       </div>
//     );
//   };

//   if (!placed || !product) {
//     return (
//       <Container className="mt-5">
//         <Card className="p-4 mb-4">
//           <Alert variant="warning">You ordered nothing.</Alert>
//         </Card>
//       </Container>
//     );
//   }

//   return (
//     <Container className="mt-5">
//       <Card className="p-4 mb-4">
//         <h4>My Orders</h4>
//         {productList.map((prod, idx) => (
//           <Card className="mb-3 p-3" key={prod.id || idx}>
//             <div className="d-flex align-items-center">
//               <img 
//                 src={prod.image} 
//                 alt={prod.name} 
//                 width={80} 
//                 height={80}
//                 style={{ 
//                   objectFit: 'cover', 
//                   borderRadius: 8,
//                   border: '1px solid #ddd'
//                 }} 
//               />
//               <div className="ms-3 flex-grow-1">
//                 <div className="fw-bold mb-1">{prod.name}</div>
//                 <div style={{ color: '#666', fontSize: '14px' }}>
//                   {prod.description || "Product description not available"}
//                 </div>
//                 <div className="mt-2">
//                   <span style={{ fontWeight: 'bold', color: '#1a8754', fontSize: '14px' }}>
//                     Ordered on {getCurrentDateTime()}
//                   </span>
//                 </div>
//                 <StarRating 
//                   productId={prod.id || idx} 
//                   currentRating={ratings[prod.id || idx] || 0} 
//                 />
//               </div>
//               <div>
//                 <Button 
//                   variant="link" 
//                   style={{ 
//                     textDecoration: 'none', 
//                     fontSize: '28px', 
//                     padding: 0,
//                     color: '#007bff'
//                   }}
//                 >
//                   ›
//                 </Button>
//               </div>
//             </div>
//           </Card>
//         ))}
//         <div className="text-center mt-4">
//           <Button onClick={handleAddProduct} variant="outline-success" size="lg">
//             + Add Another Product
//           </Button>
//         </div>
//       </Card>
//     </Container>
//   );
// }





// import React, { useState, useEffect } from "react";
// import { Container, Card, Button, Alert, Badge, Modal } from "react-bootstrap";

// export default function OrderedCompound() {
//   const [placed, setPlaced] = useState(false);
//   const [product, setProduct] = useState(null);
//   const [productList, setProductList] = useState([]);
//   const [ratings, setRatings] = useState({});
//   const [orderStatuses, setOrderStatuses] = useState({});
//   const [showDeleteModal, setShowDeleteModal] = useState(false);
//   const [productToDelete, setProductToDelete] = useState(null);

//   useEffect(() => {
//     const orderPlaced = localStorage.getItem("orderedPlaced") === "true";
//     const orderProduct = JSON.parse(localStorage.getItem("orderedProduct") || "null");
//     setPlaced(orderPlaced);
//     setProduct(orderProduct);
    
//     if (orderPlaced && orderProduct) {
//       // Load product list from localStorage or initialize with current product
//       const savedProductList = JSON.parse(localStorage.getItem("productList") || "[]");
//       if (savedProductList.length > 0) {
//         setProductList(savedProductList);
//       } else {
//         setProductList([{...orderProduct, id: Date.now()}]);
//       }
      
//       const savedRatings = JSON.parse(localStorage.getItem("productRatings") || "{}");
//       setRatings(savedRatings);

//       // Initialize order statuses
//       const savedStatuses = JSON.parse(localStorage.getItem("orderStatuses") || "{}");
//       if (Object.keys(savedStatuses).length === 0) {
//         const initialStatus = {
//           status: "Order Placed",
//           date: new Date().toLocaleDateString('en-US', { 
//             year: 'numeric', 
//             month: 'short', 
//             day: 'numeric',
//             hour: '2-digit',
//             minute: '2-digit'
//           }),
//           color: "#007bff"
//         };
//         const productId = savedProductList.length > 0 ? savedProductList[0].id : Date.now();
//         setOrderStatuses({ [productId]: initialStatus });
//         localStorage.setItem("orderStatuses", JSON.stringify({ [productId]: initialStatus }));
//       } else {
//         setOrderStatuses(savedStatuses);
//       }
//     }
//   }, []);

//   // Save product list to localStorage whenever it changes
//   useEffect(() => {
//     if (productList.length > 0) {
//       localStorage.setItem("productList", JSON.stringify(productList));
//     }
//   }, [productList]);

//   const handleAddProduct = () => {
//     if (placed && product) {
//       const newProduct = {
//         ...product,
//         id: Date.now() + Math.random() // Unique ID
//       };
//       const updatedProductList = [...productList, newProduct];
//       setProductList(updatedProductList);
      
//       // Set initial status for new product
//       const newStatus = {
//         status: "Order Placed",
//         date: new Date().toLocaleDateString('en-US', { 
//           year: 'numeric', 
//           month: 'short', 
//           day: 'numeric',
//           hour: '2-digit',
//           minute: '2-digit'
//         }),
//         color: "#007bff"
//       };
      
//       const updatedStatuses = {
//         ...orderStatuses,
//         [newProduct.id]: newStatus
//       };
//       setOrderStatuses(updatedStatuses);
//       localStorage.setItem("orderStatuses", JSON.stringify(updatedStatuses));
//     }
//   };

//   const handleDeleteClick = (productId) => {
//     setProductToDelete(productId);
//     setShowDeleteModal(true);
//   };

//   const confirmDelete = () => {
//     if (productToDelete) {
//       // Remove product from list
//       const updatedProductList = productList.filter(prod => prod.id !== productToDelete);
//       setProductList(updatedProductList);
      
//       // Remove product rating
//       const updatedRatings = { ...ratings };
//       delete updatedRatings[productToDelete];
//       setRatings(updatedRatings);
//       localStorage.setItem("productRatings", JSON.stringify(updatedRatings));
      
//       // Remove product status
//       const updatedStatuses = { ...orderStatuses };
//       delete updatedStatuses[productToDelete];
//       setOrderStatuses(updatedStatuses);
//       localStorage.setItem("orderStatuses", JSON.stringify(updatedStatuses));
      
//       // Update localStorage for product list
//       if (updatedProductList.length === 0) {
//         localStorage.removeItem("productList");
//         setPlaced(false);
//         localStorage.setItem("orderedPlaced", "false");
//       } else {
//         localStorage.setItem("productList", JSON.stringify(updatedProductList));
//       }
      
//       setShowDeleteModal(false);
//       setProductToDelete(null);
//     }
//   };

//   const cancelDelete = () => {
//     setShowDeleteModal(false);
//     setProductToDelete(null);
//   };

//   const handleRatingClick = (productId, rating) => {
//     const newRatings = {
//       ...ratings,
//       [productId]: rating
//     };
//     setRatings(newRatings);
//     localStorage.setItem("productRatings", JSON.stringify(newRatings));
//   };

//   const updateOrderStatus = (productId, newStatus, color) => {
//     const updatedStatuses = {
//       ...orderStatuses,
//       [productId]: {
//         status: newStatus,
//         date: new Date().toLocaleDateString('en-US', { 
//           year: 'numeric', 
//           month: 'short', 
//           day: 'numeric',
//           hour: '2-digit',
//           minute: '2-digit'
//         }),
//         color: color
//       }
//     };
//     setOrderStatuses(updatedStatuses);
//     localStorage.setItem("orderStatuses", JSON.stringify(updatedStatuses));
//   };

//   const StarRating = ({ productId, currentRating }) => {
//     return (
//       <div className="star-rating mt-2">
//         {[1, 2, 3, 4, 5].map((star) => (
//           <span
//             key={star}
//             onClick={() => handleRatingClick(productId, star)}
//             style={{
//               cursor: 'pointer',
//               fontSize: '24px',
//               color: star <= currentRating ? '#ffc107' : '#e4e5e9',
//               marginRight: '2px',
//               transition: 'color 0.2s ease-in-out'
//             }}
//             onMouseEnter={(e) => {
//               if (star <= currentRating) return;
//               e.target.style.color = '#ffc107';
//             }}
//             onMouseLeave={(e) => {
//               if (star <= currentRating) return;
//               e.target.style.color = '#e4e5e9';
//             }}
//           >
//             ★
//           </span>
//         ))}
//         <span style={{ marginLeft: '8px', fontSize: '14px', color: '#666' }}>
//           {currentRating > 0 ? `${currentRating}/5` : 'Click stars to rate'}
//         </span>
//       </div>
//     );
//   };

//   if (!placed || productList.length === 0) {
//     return (
//       <Container className="mt-5">
//         <Card className="p-4 mb-4">
//           <Alert variant="warning">You haven't ordered anything yet.</Alert>
//         </Card>
//       </Container>
//     );
//   }

//   return (
//     <Container className="mt-5">
//       <Card className="p-4 mb-4">
//         <h4>My Orders</h4>
//         {productList.map((prod, idx) => {
//           const status = orderStatuses[prod.id];
//           return (
//             <Card className="mb-3 p-3 position-relative" key={prod.id}>
//               {/* Delete Button */}
//               <Button
//                 variant="outline-danger"
//                 size="sm"
//                 className="position-absolute"
//                 style={{
//                   top: '10px',
//                   right: '10px',
//                   width: '30px',
//                   height: '30px',
//                   borderRadius: '50%',
//                   display: 'flex',
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                   padding: 0,
//                   fontSize: '16px',
//                   fontWeight: 'bold'
//                 }}
//                 onClick={() => handleDeleteClick(prod.id)}
//                 title="Delete this order"
//               >
//                 ×
//               </Button>

//               <div className="d-flex align-items-center">
//                 <img 
//                   src={prod.image} 
//                   alt={prod.name} 
//                   width={80} 
//                   height={80}
//                   style={{ 
//                     objectFit: 'cover', 
//                     borderRadius: 8,
//                     border: '1px solid #ddd'
//                   }} 
//                 />
//                 <div className="ms-3 flex-grow-1">
//                   <div className="fw-bold mb-1">{prod.name}</div>
//                   <div style={{ color: '#666', fontSize: '14px' }}>
//                     {prod.description || "Product description not available"}
//                   </div>
//                   {prod.price && (
//                     <div style={{ color: '#2c5aa0', fontWeight: 'bold', fontSize: '16px' }}>
//                       ₹{prod.price.toLocaleString()}
//                     </div>
//                   )}
//                   <div className="mt-2">
//                     <Badge 
//                       bg="" 
//                       style={{ 
//                         backgroundColor: status?.color || '#007bff',
//                         fontSize: '12px',
//                         marginRight: '8px'
//                       }}
//                     >
//                       {status?.status || "Order Placed"}
//                     </Badge>
//                     <span style={{ fontWeight: 'bold', color: status?.color || '#007bff', fontSize: '14px' }}>
//                       {status?.date || new Date().toLocaleDateString('en-US', { 
//                         year: 'numeric', 
//                         month: 'short', 
//                         day: 'numeric',
//                         hour: '2-digit',
//                         minute: '2-digit'
//                       })}
//                     </span>
//                   </div>
//                   <StarRating 
//                     productId={prod.id} 
//                     currentRating={ratings[prod.id] || 0} 
//                   />
                  
//                   {/* Status update buttons */}
//                   <div className="mt-2">
//                     <Button 
//                       size="sm" 
//                       variant="outline-primary" 
//                       onClick={() => updateOrderStatus(prod.id, "Shipped", "#17a2b8")}
//                       className="me-2"
//                     >
//                       Mark Shipped
//                     </Button>
//                     <Button 
//                       size="sm" 
//                       variant="outline-success" 
//                       onClick={() => updateOrderStatus(prod.id, "Delivered", "#28a745")}
//                       className="me-2"
//                     >
//                       Mark Delivered
//                     </Button>
//                   </div>
//                 </div>
//                 <div>
//                   <Button 
//                     variant="link" 
//                     style={{ 
//                       textDecoration: 'none', 
//                       fontSize: '28px', 
//                       padding: 0,
//                       color: '#007bff'
//                     }}
//                   >
//                     ›
//                   </Button>
//                 </div>
//               </div>
//             </Card>
//           );
//         })}
        
//         <div className="text-center mt-4">
//           <Button onClick={handleAddProduct} variant="outline-success" size="lg">
//             + Add Another Product
//           </Button>
//         </div>
//       </Card>

//       {/* Delete Confirmation Modal */}
//       <Modal show={showDeleteModal} onHide={cancelDelete} centered>
//         <Modal.Header closeButton>
//           <Modal.Title>Confirm Delete</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           Are you sure you want to remove this product from your orders? 
//           This action cannot be undone.
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={cancelDelete}>
//             Cancel
//           </Button>
//           <Button variant="danger" onClick={confirmDelete}>
//             Delete
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </Container>
//   );
// }




// import React, { useState, useEffect } from "react";
// import { Container, Card, Button, Alert, Badge, Modal, Row, Col } from "react-bootstrap";

// export default function OrderedCompound() {
//   const [placed, setPlaced] = useState(false);
//   const [product, setProduct] = useState(null);
//   const [productList, setProductList] = useState([]);
//   const [ratings, setRatings] = useState({});
//   const [orderStatuses, setOrderStatuses] = useState({});
//   const [showDeleteModal, setShowDeleteModal] = useState(false);
//   const [productToDelete, setProductToDelete] = useState(null);
//   const [showSuccessAlert, setShowSuccessAlert] = useState(false);

//   useEffect(() => {
//     const orderPlaced = localStorage.getItem("orderedPlaced") === "true";
//     const orderProduct = JSON.parse(localStorage.getItem("orderedProduct") || "null");
//     setPlaced(orderPlaced);
//     setProduct(orderProduct);
    
//     // Load all existing orders
//     const savedProductList = JSON.parse(localStorage.getItem("productList") || "[]");
//     if (savedProductList.length > 0) {
//       setProductList(savedProductList);
//       setPlaced(true);
//     } else if (orderPlaced && orderProduct) {
//       // If new order placed, add it to the list
//       const newProduct = {
//         ...orderProduct,
//         id: Date.now(),
//         orderDate: new Date().toLocaleDateString('en-US', { 
//           year: 'numeric', 
//           month: 'short', 
//           day: 'numeric',
//           hour: '2-digit',
//           minute: '2-digit'
//         })
//       };
//       setProductList([newProduct]);
//       setShowSuccessAlert(true);
//     }
    
//     const savedRatings = JSON.parse(localStorage.getItem("productRatings") || "{}");
//     setRatings(savedRatings);

//     const savedStatuses = JSON.parse(localStorage.getItem("orderStatuses") || "{}");
//     setOrderStatuses(savedStatuses);
//   }, []);

//   // Save product list to localStorage whenever it changes
//   useEffect(() => {
//     if (productList.length > 0) {
//       localStorage.setItem("productList", JSON.stringify(productList));
//     }
//   }, [productList]);

//   // Auto-hide success alert after 5 seconds
//   useEffect(() => {
//     if (showSuccessAlert) {
//       const timer = setTimeout(() => {
//         setShowSuccessAlert(false);
//       }, 5000);
//       return () => clearTimeout(timer);
//     }
//   }, [showSuccessAlert]);

//   const handleAddProduct = () => {
//     if (product) {
//       const newProduct = {
//         ...product,
//         id: Date.now() + Math.random(), // Unique ID
//         orderDate: new Date().toLocaleDateString('en-US', { 
//           year: 'numeric', 
//           month: 'short', 
//           day: 'numeric',
//           hour: '2-digit',
//           minute: '2-digit'
//         })
//       };
//       const updatedProductList = [...productList, newProduct];
//       setProductList(updatedProductList);
//       setShowSuccessAlert(true);
      
//       // Set initial status for new product
//       const newStatus = {
//         status: "Order Placed",
//         date: new Date().toLocaleDateString('en-US', { 
//           year: 'numeric', 
//           month: 'short', 
//           day: 'numeric',
//           hour: '2-digit',
//           minute: '2-digit'
//         }),
//         color: "#007bff"
//       };
      
//       const updatedStatuses = {
//         ...orderStatuses,
//         [newProduct.id]: newStatus
//       };
//       setOrderStatuses(updatedStatuses);
//       localStorage.setItem("orderStatuses", JSON.stringify(updatedStatuses));
//     }
//   };

//   const handleDeleteClick = (productId) => {
//     setProductToDelete(productId);
//     setShowDeleteModal(true);
//   };

//   const confirmDelete = () => {
//     if (productToDelete) {
//       // Remove product from list
//       const updatedProductList = productList.filter(prod => prod.id !== productToDelete);
//       setProductList(updatedProductList);
      
//       // Remove product rating
//       const updatedRatings = { ...ratings };
//       delete updatedRatings[productToDelete];
//       setRatings(updatedRatings);
//       localStorage.setItem("productRatings", JSON.stringify(updatedRatings));
      
//       // Remove product status
//       const updatedStatuses = { ...orderStatuses };
//       delete updatedStatuses[productToDelete];
//       setOrderStatuses(updatedStatuses);
//       localStorage.setItem("orderStatuses", JSON.stringify(updatedStatuses));
      
//       // Update localStorage for product list
//       if (updatedProductList.length === 0) {
//         localStorage.removeItem("productList");
//         setPlaced(false);
//         localStorage.setItem("orderedPlaced", "false");
//       } else {
//         localStorage.setItem("productList", JSON.stringify(updatedProductList));
//       }
      
//       setShowDeleteModal(false);
//       setProductToDelete(null);
//     }
//   };

//   const cancelDelete = () => {
//     setShowDeleteModal(false);
//     setProductToDelete(null);
//   };

//   const handleRatingClick = (productId, rating) => {
//     const newRatings = {
//       ...ratings,
//       [productId]: rating
//     };
//     setRatings(newRatings);
//     localStorage.setItem("productRatings", JSON.stringify(newRatings));
//   };

//   const updateOrderStatus = (productId, newStatus, color) => {
//     const updatedStatuses = {
//       ...orderStatuses,
//       [productId]: {
//         status: newStatus,
//         date: new Date().toLocaleDateString('en-US', { 
//           year: 'numeric', 
//           month: 'short', 
//           day: 'numeric',
//           hour: '2-digit',
//           minute: '2-digit'
//         }),
//         color: color
//       }
//     };
//     setOrderStatuses(updatedStatuses);
//     localStorage.setItem("orderStatuses", JSON.stringify(updatedStatuses));
//   };

//   const StarRating = ({ productId, currentRating }) => {
//     return (
//       <div className="star-rating mt-2">
//         {[1, 2, 3, 4, 5].map((star) => (
//           <span
//             key={star}
//             onClick={() => handleRatingClick(productId, star)}
//             style={{
//               cursor: 'pointer',
//               fontSize: '20px',
//               color: star <= currentRating ? '#ffc107' : '#e4e5e9',
//               marginRight: '2px',
//               transition: 'color 0.2s ease-in-out'
//             }}
//             onMouseEnter={(e) => {
//               if (star <= currentRating) return;
//               e.target.style.color = '#ffc107';
//             }}
//             onMouseLeave={(e) => {
//               if (star <= currentRating) return;
//               e.target.style.color = '#e4e5e9';
//             }}
//           >
//             ★
//           </span>
//         ))}
//         <span style={{ marginLeft: '8px', fontSize: '14px', color: '#666' }}>
//           {currentRating > 0 ? `${currentRating}/5` : 'Click stars to rate'}
//         </span>
//       </div>
//     );
//   };

//   if (!placed || productList.length === 0) {
//     return (
//       <Container className="mt-5">
//         <Card className="p-4 mb-4">
//           <Alert variant="warning">You haven't ordered anything yet.</Alert>
//         </Card>
//       </Container>
//     );
//   }

//   return (
//     <Container className="mt-4">
//       {/* Success Alert */}
//       {showSuccessAlert && (
//         <Alert variant="success" className="mb-4" dismissible onClose={() => setShowSuccessAlert(false)}>
//           <div className="d-flex align-items-center">
//             <div className="flex-grow-1">
//               <h5 className="mb-1">🎉 Order Placed Successfully!</h5>
//               <p className="mb-0">Your order has been confirmed. Track your orders below.</p>
//             </div>
//             <Badge bg="light" text="dark" className="ms-2">
//               {productList.length} {productList.length === 1 ? 'item' : 'items'}
//             </Badge>
//           </div>
//         </Alert>
//       )}

//       <Card className="p-4 mb-4">
//         <div className="d-flex justify-content-between align-items-center mb-4">
//           <h4 className="mb-0">My Orders ({productList.length})</h4>
//           <Button onClick={handleAddProduct} variant="outline-primary" size="sm">
//             + Add New Product
//           </Button>
//         </div>

//         {/* Order Summary */}
//         <Card className="mb-4 bg-light">
//           <Card.Body className="py-3">
//             <Row className="text-center">
//               <Col>
//                 <div className="fw-bold text-primary">{productList.length}</div>
//                 <div className="small text-muted">Total Orders</div>
//               </Col>
//               <Col>
//                 <div className="fw-bold text-success">
//                   {productList.filter(prod => orderStatuses[prod.id]?.status === "Delivered").length}
//                 </div>
//                 <div className="small text-muted">Delivered</div>
//               </Col>
//               <Col>
//                 <div className="fw-bold text-warning">
//                   {productList.filter(prod => orderStatuses[prod.id]?.status === "Shipped").length}
//                 </div>
//                 <div className="small text-muted">Shipped</div>
//               </Col>
//               <Col>
//                 <div className="fw-bold text-info">
//                   {productList.filter(prod => orderStatuses[prod.id]?.status === "Order Placed").length}
//                 </div>
//                 <div className="small text-muted">Processing</div>
//               </Col>
//             </Row>
//           </Card.Body>
//         </Card>

//         {/* Products Grid */}
//         <Row>
//           {productList.map((prod) => {
//             const status = orderStatuses[prod.id];
//             return (
//               <Col lg={6} key={prod.id} className="mb-3">
//                 <Card className="h-100 position-relative product-card">
//                   {/* Delete Button */}
//                   <Button
//                     variant="outline-danger"
//                     size="sm"
//                     className="position-absolute"
//                     style={{
//                       top: '10px',
//                       right: '10px',
//                       width: '28px',
//                       height: '28px',
//                       borderRadius: '50%',
//                       display: 'flex',
//                       alignItems: 'center',
//                       justifyContent: 'center',
//                       padding: 0,
//                       fontSize: '14px',
//                       fontWeight: 'bold',
//                       zIndex: 10
//                     }}
//                     onClick={() => handleDeleteClick(prod.id)}
//                     title="Delete this order"
//                   >
//                     ×
//                   </Button>

//                   <Card.Body>
//                     <div className="d-flex">
//                       <img 
//                         src={prod.image} 
//                         alt={prod.name} 
//                         width={80} 
//                         height={80}
//                         style={{ 
//                           objectFit: 'cover', 
//                           borderRadius: 8,
//                           border: '1px solid #ddd'
//                         }} 
//                       />
//                       <div className="ms-3 flex-grow-1">
//                         <h6 className="fw-bold mb-1">{prod.name}</h6>
//                         <div style={{ color: '#666', fontSize: '13px' }} className="mb-1">
//                           {prod.description || "Product description not available"}
//                         </div>
                        
//                         {prod.price && (
//                           <div style={{ color: '#2c5aa0', fontWeight: 'bold', fontSize: '15px' }} className="mb-2">
//                             ₹{prod.price.toLocaleString()}
//                           </div>
//                         )}

//                         {/* Order Date */}
//                         <div className="small text-muted mb-2">
//                           Ordered on: {prod.orderDate || new Date().toLocaleDateString()}
//                         </div>

//                         {/* Status */}
//                         <div className="mb-2">
//                           <Badge 
//                             bg="" 
//                             style={{ 
//                               backgroundColor: status?.color || '#007bff',
//                               fontSize: '11px',
//                             }}
//                           >
//                             {status?.status || "Order Placed"}
//                           </Badge>
//                           <span style={{ fontSize: '12px', color: '#666', marginLeft: '8px' }}>
//                             {status?.date || 'Just now'}
//                           </span>
//                         </div>

//                         {/* Star Rating */}
//                         <StarRating 
//                           productId={prod.id} 
//                           currentRating={ratings[prod.id] || 0} 
//                         />
                        
//                         {/* Status update buttons */}
//                         <div className="mt-3">
//                           <Button 
//                             size="sm" 
//                             variant="outline-primary" 
//                             onClick={() => updateOrderStatus(prod.id, "Shipped", "#17a2b8")}
//                             className="me-1 mb-1"
//                             style={{ fontSize: '11px' }}
//                           >
//                             Shipped
//                           </Button>
//                           <Button 
//                             size="sm" 
//                             variant="outline-success" 
//                             onClick={() => updateOrderStatus(prod.id, "Delivered", "#28a745")}
//                             className="me-1 mb-1"
//                             style={{ fontSize: '11px' }}
//                           >
//                             Delivered
//                           </Button>
//                         </div>
//                       </div>
//                     </div>
//                   </Card.Body>
//                 </Card>
//               </Col>
//             );
//           })}
//         </Row>

//         {/* Load More Button for large collections */}
//         {productList.length > 0 && (
//           <div className="text-center mt-4">
//             <Button onClick={handleAddProduct} variant="success" size="lg">
//               + Add Another Product
//             </Button>
//           </div>
//         )}
//       </Card>

//       {/* Delete Confirmation Modal */}
//       <Modal show={showDeleteModal} onHide={cancelDelete} centered>
//         <Modal.Header closeButton>
//           <Modal.Title>Confirm Delete</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           Are you sure you want to remove this product from your orders? 
//           This action cannot be undone.
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={cancelDelete}>
//             Cancel
//           </Button>
//           <Button variant="danger" onClick={confirmDelete}>
//             Delete
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </Container>
//   );
// }





// import React, { useState, useEffect } from "react";
// import { Container, Card, Button, Alert, Badge, Modal, Row, Col } from "react-bootstrap";

// export default function OrderedCompound() {
//   const [placed, setPlaced] = useState(false);
//   const [product, setProduct] = useState(null);
//   const [productList, setProductList] = useState([]);
//   const [ratings, setRatings] = useState({});
//   const [orderStatuses, setOrderStatuses] = useState({});
//   const [showDeleteModal, setShowDeleteModal] = useState(false);
//   const [productToDelete, setProductToDelete] = useState(null);
//   const [showSuccessAlert, setShowSuccessAlert] = useState(false);

//   useEffect(() => {
//     const orderPlaced = localStorage.getItem("orderedPlaced") === "true";
//     const orderProduct = JSON.parse(localStorage.getItem("orderedProduct") || "null");
//     setPlaced(orderPlaced);
//     setProduct(orderProduct);
    
//     // Load all existing orders
//     const savedProductList = JSON.parse(localStorage.getItem("productList") || "[]");
//     if (savedProductList.length > 0) {
//       setProductList(savedProductList);
//       setPlaced(true);
//     }
    
//     const savedRatings = JSON.parse(localStorage.getItem("productRatings") || "{}");
//     setRatings(savedRatings);

//     const savedStatuses = JSON.parse(localStorage.getItem("orderStatuses") || "{}");
//     setOrderStatuses(savedStatuses);
//   }, []);

//   // Check for new orders automatically
//   useEffect(() => {
//     const checkForNewOrders = () => {
//       const orderPlaced = localStorage.getItem("orderedPlaced") === "true";
//       const orderProduct = JSON.parse(localStorage.getItem("orderedProduct") || "null");
      
//       if (orderPlaced && orderProduct) {
//         // Check if this product already exists in the list
//         const productExists = productList.some(prod => 
//           prod.name === orderProduct.name && 
//           prod.price === orderProduct.price
//         );

//         if (!productExists) {
//           const newProduct = {
//             ...orderProduct,
//             id: Date.now(),
//             orderDate: new Date().toLocaleDateString('en-US', { 
//               year: 'numeric', 
//               month: 'short', 
//               day: 'numeric',
//               hour: '2-digit',
//               minute: '2-digit'
//             })
//           };
          
//           const updatedProductList = [...productList, newProduct];
//           setProductList(updatedProductList);
//           setPlaced(true);
//           setShowSuccessAlert(true);

//           // Set initial status for new product
//           const newStatus = {
//             status: "Order Placed",
//             date: new Date().toLocaleDateString('en-US', { 
//               year: 'numeric', 
//               month: 'short', 
//               day: 'numeric',
//               hour: '2-digit',
//               minute: '2-digit'
//             }),
//             color: "#007bff"
//           };
          
//           const updatedStatuses = {
//             ...orderStatuses,
//             [newProduct.id]: newStatus
//           };
//           setOrderStatuses(updatedStatuses);
//           localStorage.setItem("orderStatuses", JSON.stringify(updatedStatuses));

//           // Clear the order flag after processing
//           localStorage.setItem("orderedPlaced", "false");
//         }
//       }
//     };

//     // Check for new orders every 2 seconds
//     const interval = setInterval(checkForNewOrders, 2000);
//     return () => clearInterval(interval);
//   }, [productList, orderStatuses]);

//   // Save product list to localStorage whenever it changes
//   useEffect(() => {
//     if (productList.length > 0) {
//       localStorage.setItem("productList", JSON.stringify(productList));
//     }
//   }, [productList]);

//   // Auto-hide success alert after 5 seconds
//   useEffect(() => {
//     if (showSuccessAlert) {
//       const timer = setTimeout(() => {
//         setShowSuccessAlert(false);
//       }, 5000);
//       return () => clearTimeout(timer);
//     }
//   }, [showSuccessAlert]);

//   const handleDeleteClick = (productId) => {
//     setProductToDelete(productId);
//     setShowDeleteModal(true);
//   };

//   const confirmDelete = () => {
//     if (productToDelete) {
//       // Remove product from list
//       const updatedProductList = productList.filter(prod => prod.id !== productToDelete);
//       setProductList(updatedProductList);
      
//       // Remove product rating
//       const updatedRatings = { ...ratings };
//       delete updatedRatings[productToDelete];
//       setRatings(updatedRatings);
//       localStorage.setItem("productRatings", JSON.stringify(updatedRatings));
      
//       // Remove product status
//       const updatedStatuses = { ...orderStatuses };
//       delete updatedStatuses[productToDelete];
//       setOrderStatuses(updatedStatuses);
//       localStorage.setItem("orderStatuses", JSON.stringify(updatedStatuses));
      
//       // Update localStorage for product list
//       if (updatedProductList.length === 0) {
//         localStorage.removeItem("productList");
//         setPlaced(false);
//       } else {
//         localStorage.setItem("productList", JSON.stringify(updatedProductList));
//       }
      
//       setShowDeleteModal(false);
//       setProductToDelete(null);
//     }
//   };

//   const cancelDelete = () => {
//     setShowDeleteModal(false);
//     setProductToDelete(null);
//   };

//   const handleRatingClick = (productId, rating) => {
//     const newRatings = {
//       ...ratings,
//       [productId]: rating
//     };
//     setRatings(newRatings);
//     localStorage.setItem("productRatings", JSON.stringify(newRatings));
//   };

//   const StarRating = ({ productId, currentRating }) => {
//     return (
//       <div className="star-rating mt-2">
//         {[1, 2, 3, 4, 5].map((star) => (
//           <span
//             key={star}
//             onClick={() => handleRatingClick(productId, star)}
//             style={{
//               cursor: 'pointer',
//               fontSize: '20px',
//               color: star <= currentRating ? '#ffc107' : '#e4e5e9',
//               marginRight: '2px',
//               transition: 'color 0.2s ease-in-out'
//             }}
//             onMouseEnter={(e) => {
//               if (star <= currentRating) return;
//               e.target.style.color = '#ffc107';
//             }}
//             onMouseLeave={(e) => {
//               if (star <= currentRating) return;
//               e.target.style.color = '#e4e5e9';
//             }}
//           >
//             ★
//           </span>
//         ))}
//         <span style={{ marginLeft: '8px', fontSize: '14px', color: '#666' }}>
//           {currentRating > 0 ? `${currentRating}/5` : 'Click stars to rate'}
//         </span>
//       </div>
//     );
//   };

//   if (!placed || productList.length === 0) {
//     return (
//       <Container className="mt-5">
//         <Card className="p-4 mb-4">
//           <Alert variant="warning">You haven't ordered anything yet.</Alert>
//         </Card>
//       </Container>
//     );
//   }

//   return (
//     <Container className="mt-4">
//       {/* Success Alert */}
//       {showSuccessAlert && (
//         <Alert variant="success" className="mb-4" dismissible onClose={() => setShowSuccessAlert(false)}>
//           <div className="d-flex align-items-center">
//             <div className="flex-grow-1">
//               <h5 className="mb-1">🎉 Order Placed Successfully!</h5>
//               <p className="mb-0">Your order has been confirmed. Track your orders below.</p>
//             </div>
//             <Badge bg="light" text="dark" className="ms-2">
//               {productList.length} {productList.length === 1 ? 'item' : 'items'}
//             </Badge>
//           </div>
//         </Alert>
//       )}

//       <Card className="p-4 mb-4">
//         <div className="d-flex justify-content-between align-items-center mb-4">
//           <h4 className="mb-0">My Orders ({productList.length})</h4>
//           {/* <div className="text-muted small">
//             Orders update automatically
//           </div> */}
//         </div>

//         {/* Order Summary */}
//         {/* <Card className="mb-4 bg-light">
//           <Card.Body className="py-1 w-50%">
//             <Row className="text-center">
//               <Col>
//                 <div className="fw-bold text-primary">{productList.length}</div>
//                 <div className="small text-muted">Total Orders</div>
//               </Col>
//               <Col>
//                 <div className="fw-bold text-success">
//                   {productList.filter(prod => orderStatuses[prod.id]?.status === "Delivered").length}
//                 </div>
//                 <div className="small text-muted">Delivered</div>
//               </Col>
//               <Col>
//                 <div className="fw-bold text-warning">
//                   {productList.filter(prod => orderStatuses[prod.id]?.status === "Shipped").length}
//                 </div>
//                 <div className="small text-muted">Shipped</div>
//               </Col>
//               <Col>
//                 <div className="fw-bold text-info">
//                   {productList.filter(prod => orderStatuses[prod.id]?.status === "Order Placed").length}
//                 </div>
//                 <div className="small text-muted">Processing</div>
//               </Col>
//             </Row>
//           </Card.Body>
//         </Card> */}

//         {/* Products Grid */}
//         <Row>
//           {productList.map((prod) => {
//             const status = orderStatuses[prod.id];
//             return (
//               <Col lg={6} key={prod.id} className="mb-3">
//                 <Card className="h-100 position-relative product-card">
//                   {/* Delete Button */}
//                   <Button
//                     variant="outline-danger"
//                     size="m"
//                     className="position-absolute"
//                     style={{
//                       top: '10px',
//                       right: '10px',
//                       width: '28px',
//                       height: '28px',
//                       borderRadius: '50%',
//                       display: 'flex',
//                       alignItems: 'center',
//                       justifyContent: 'center',
//                       padding: 0,
//                       fontSize: '14px',
//                       fontWeight: 'bold',
//                       zIndex: 10
//                     }}
//                     onClick={() => handleDeleteClick(prod.id)}
//                     title="Delete this order"
//                   >
//                     ×
//                   </Button>

//                   <Card.Body>
//                     <div className="d-flex ">
//                       <img 
//                         src={prod.image} 
//                         alt={prod.name} 
//                         width={80} 
//                         height={80}
//                         style={{ 
//                           objectFit: 'cover', 
//                           borderRadius: 8,
//                           border: '1px solid #ddd'
//                         }} 
//                       />
//                       <div className="ms-3 flex-grow-1">
//                         <h6 className="fw-bold mb-1 mt-4">{prod.name}</h6>
//                         <div style={{ color: '#666', fontSize: '13px' }} className="mb-1">
//                           {prod.description || "Product description not available"}
//                         </div>
                        
//                         {prod.price && (
//                           <div style={{ color: '#2c5aa0', fontWeight: 'bold', fontSize: '15px' }} className="mb-2">
//                             ₹{prod.price.toLocaleString()}
//                           </div>
//                         )}

//                         {/* Order Date */}
//                         <div className="small text-muted mb-2">
//                           Ordered on: {prod.orderDate || new Date().toLocaleDateString()}
//                         </div>

//                         {/* Status */}
//                         <div className="mb-2">
//                           <Badge 
//                             bg="" 
//                             style={{ 
//                               backgroundColor: status?.color || '#007bff',
//                               fontSize: '11px',
//                             }}
//                           >
//                             {status?.status || "Order Placed"}
//                           </Badge>
//                           <span style={{ fontSize: '12px', color: '#666', marginLeft: '8px' }}>
//                             {status?.date || 'Just now'}
//                           </span>
//                         </div>

//                         {/* Star Rating */}
//                         <StarRating 
//                           productId={prod.id} 
//                           currentRating={ratings[prod.id] || 0} 
//                         />
//                       </div>
//                     </div>
//                   </Card.Body>
//                 </Card>
//               </Col>
//             );
//           })}
//         </Row>
//       </Card>

//       {/* Delete Confirmation Modal */}
//       <Modal show={showDeleteModal} onHide={cancelDelete} centered>
//         <Modal.Header closeButton>
//           <Modal.Title>Confirm Delete</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           Are you sure you want to remove this product from your orders? 
//           This action cannot be undone.
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={cancelDelete}>
//             Cancel
//           </Button>
//           <Button variant="danger" onClick={confirmDelete}>
//             Delete
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </Container>
//   );
// }





// import React, { useState, useEffect } from "react";
// import { Container, Card, Button, Alert, Badge, Modal, Row, Col } from "react-bootstrap";

// export default function OrderedCompound() {
//   const [placed, setPlaced] = useState(false);
//   const [product, setProduct] = useState(null);
//   const [productList, setProductList] = useState([]);
//   const [ratings, setRatings] = useState({});
//   const [orderStatuses, setOrderStatuses] = useState({});
//   const [showDeleteModal, setShowDeleteModal] = useState(false);
//   const [productToDelete, setProductToDelete] = useState(null);
//   const [showSuccessAlert, setShowSuccessAlert] = useState(false);
//   const [selectedOrder, setSelectedOrder] = useState(null);

//   useEffect(() => {
//     const orderPlaced = localStorage.getItem("orderedPlaced") === "true";
//     const orderProduct = JSON.parse(localStorage.getItem("orderedProduct") || "null");
//     setPlaced(orderPlaced);
//     setProduct(orderProduct);
    
//     // Load all existing orders
//     const savedProductList = JSON.parse(localStorage.getItem("productList") || "[]");
//     if (savedProductList.length > 0) {
//       setProductList(savedProductList);
//       setPlaced(true);
//     }
    
//     const savedRatings = JSON.parse(localStorage.getItem("productRatings") || "{}");
//     setRatings(savedRatings);

//     const savedStatuses = JSON.parse(localStorage.getItem("orderStatuses") || "{}");
//     setOrderStatuses(savedStatuses);
//   }, []);

//   // Check for new orders automatically
//   useEffect(() => {
//     const checkForNewOrders = () => {
//       const orderPlaced = localStorage.getItem("orderedPlaced") === "true";
//       const orderProduct = JSON.parse(localStorage.getItem("orderedProduct") || "null");
      
//       if (orderPlaced && orderProduct) {
//         // Check if this product already exists in the list
//         const productExists = productList.some(prod => 
//           prod.name === orderProduct.name && 
//           prod.price === orderProduct.price
//         );

//         if (!productExists) {
//           const newProduct = {
//             ...orderProduct,
//             id: Date.now(),
//             orderDate: new Date().toLocaleDateString('en-US', { 
//               year: 'numeric', 
//               month: 'short', 
//               day: 'numeric',
//               hour: '2-digit',
//               minute: '2-digit'
//             })
//           };
          
//           const updatedProductList = [...productList, newProduct];
//           setProductList(updatedProductList);
//           setPlaced(true);
//           setShowSuccessAlert(true);

//           // Set initial status for new product
//           const newStatus = {
//             status: "Order Placed",
//             date: new Date().toLocaleDateString('en-US', { 
//               year: 'numeric', 
//               month: 'short', 
//               day: 'numeric',
//               hour: '2-digit',
//               minute: '2-digit'
//             }),
//             color: "#007bff"
//           };
          
//           const updatedStatuses = {
//             ...orderStatuses,
//             [newProduct.id]: newStatus
//           };
//           setOrderStatuses(updatedStatuses);
//           localStorage.setItem("orderStatuses", JSON.stringify(updatedStatuses));

//           // Clear the order flag after processing
//           localStorage.setItem("orderedPlaced", "false");
//         }
//       }
//     };

//     // Check for new orders every 2 seconds
//     const interval = setInterval(checkForNewOrders, 2000);
//     return () => clearInterval(interval);
//   }, [productList, orderStatuses]);

//   // Save product list to localStorage whenever it changes
//   useEffect(() => {
//     if (productList.length > 0) {
//       localStorage.setItem("productList", JSON.stringify(productList));
//     }
//   }, [productList]);

//   // Auto-hide success alert after 5 seconds
//   useEffect(() => {
//     if (showSuccessAlert) {
//       const timer = setTimeout(() => {
//         setShowSuccessAlert(false);
//       }, 5000);
//       return () => clearTimeout(timer);
//     }
//   }, [showSuccessAlert]);

//   const handleDeleteClick = (productId) => {
//     setProductToDelete(productId);
//     setShowDeleteModal(true);
//   };

//   const confirmDelete = () => {
//     if (productToDelete) {
//       // Remove product from list
//       const updatedProductList = productList.filter(prod => prod.id !== productToDelete);
//       setProductList(updatedProductList);
      
//       // Remove product rating
//       const updatedRatings = { ...ratings };
//       delete updatedRatings[productToDelete];
//       setRatings(updatedRatings);
//       localStorage.setItem("productRatings", JSON.stringify(updatedRatings));
      
//       // Remove product status
//       const updatedStatuses = { ...orderStatuses };
//       delete updatedStatuses[productToDelete];
//       setOrderStatuses(updatedStatuses);
//       localStorage.setItem("orderStatuses", JSON.stringify(updatedStatuses));
      
//       // Update localStorage for product list
//       if (updatedProductList.length === 0) {
//         localStorage.removeItem("productList");
//         setPlaced(false);
//       } else {
//         localStorage.setItem("productList", JSON.stringify(updatedProductList));
//       }
      
//       setShowDeleteModal(false);
//       setProductToDelete(null);
//     }
//   };

//   const cancelDelete = () => {
//     setShowDeleteModal(false);
//     setProductToDelete(null);
//   };

//   const handleRatingClick = (productId, rating) => {
//     const newRatings = {
//       ...ratings,
//       [productId]: rating
//     };
//     setRatings(newRatings);
//     localStorage.setItem("productRatings", JSON.stringify(newRatings));
//   };

//   const handleCardClick = (product) => {
//     setSelectedOrder(product);
//   };

//   const handleBackToOrders = () => {
//     setSelectedOrder(null);
//   };

//   const StarRating = ({ productId, currentRating }) => {
//     return (
//       <div className="star-rating mt-2">
//         {[1, 2, 3, 4, 5].map((star) => (
//           <span
//             key={star}
//             onClick={() => handleRatingClick(productId, star)}
//             style={{
//               cursor: 'pointer',
//               fontSize: '20px',
//               color: star <= currentRating ? '#ffc107' : '#e4e5e9',
//               marginRight: '2px',
//               transition: 'color 0.2s ease-in-out'
//             }}
//             onMouseEnter={(e) => {
//               if (star <= currentRating) return;
//               e.target.style.color = '#ffc107';
//             }}
//             onMouseLeave={(e) => {
//               if (star <= currentRating) return;
//               e.target.style.color = '#e4e5e9';
//             }}
//           >
//             ★
//           </span>
//         ))}
//         <span style={{ marginLeft: '8px', fontSize: '14px', color: '#666' }}>
//           {currentRating > 0 ? `${currentRating}/5` : 'Click stars to rate'}
//         </span>
//       </div>
//     );
//   };

//   // Order Details Page
//   if (selectedOrder) {
//     const status = orderStatuses[selectedOrder.id];
//     const orderUpdates = [
//       { status: "Order Confirmed", date: selectedOrder.orderDate || "Aug 13, 2023" },
//       { status: "Shipped", date: "Aug 14, 2023" },
//       { status: "Delivered", date: "Aug 15, 2023" }
//     ];

//     return (
//       <Container className="mt-4">
//         <Button variant="link" onClick={handleBackToOrders} className="mb-3 p-0">
//           &larr; Back to Orders
//         </Button>
        
//         <Card className="p-4">
//           <h4 className="mb-4">Order Details</h4>
          
//           {/* Product Info */}
//           <div className="mb-4 p-3 border rounded">
//             <Row className="align-items-center">
//               <Col md={2}>
//                 <img 
//                   src={selectedOrder.image} 
//                   alt={selectedOrder.name}
//                   style={{ 
//                     width: '80px', 
//                     height: '80px', 
//                     objectFit: 'cover',
//                     borderRadius: '8px'
//                   }}
//                 />
//               </Col>
//               <Col md={6}>
//                 <h6 className="fw-bold mb-1">{selectedOrder.name}</h6>
//                 <div className="text-muted small mb-2">
//                   {selectedOrder.size && `Size: ${selectedOrder.size}`}
//                   {selectedOrder.color && ` | Color: ${selectedOrder.color}`}
//                 </div>
//                 {selectedOrder.price && (
//                   <div className="fw-bold text-primary">
//                     ₹{selectedOrder.price.toLocaleString()}
//                   </div>
//                 )}
//               </Col>
//               <Col md={4} className="text-end">
//                 <Badge 
//                   bg="" 
//                   style={{ 
//                     backgroundColor: status?.color || '#28a745',
//                     fontSize: '12px',
//                   }}
//                 >
//                   {status?.status || "Delivered"}
//                 </Badge>
//                 <div className="mt-2">
//                   <strong className="text-success">Delivered on Aug 15, 2023</strong>
//                 </div>
//               </Col>
//             </Row>
//           </div>

//           <hr />

//           {/* Delivery Status */}
//           <Alert variant="success" className="mb-4">
//             <strong>Delivered, Aug 15, 2023</strong><br />
//             Your item has been delivered
//           </Alert>

//           {/* Order Timeline */}
//           <h5 className="mb-3">Order Timeline</h5>
//           <div className="mb-4">
//             {orderUpdates.map((update, index) => (
//               <div key={index} className="d-flex justify-content-between align-items-center mb-3 p-2 border-bottom">
//                 <div>
//                   <strong>{update.status}</strong>
//                 </div>
//                 <div className="text-muted">{update.date}</div>
//               </div>
//             ))}
//           </div>

//           {/* Star Rating in Order Details */}
//           <div className="mb-4">
//             <h6>Rate this product</h6>
//             <StarRating 
//               productId={selectedOrder.id} 
//               currentRating={ratings[selectedOrder.id] || 0} 
//             />
//           </div>

//           <div className="text-center">
//             <Button variant="outline-primary">See all updates</Button>
//           </div>
//         </Card>
//       </Container>
//     );
//   }

//   if (!placed || productList.length === 0) {
//     return (
//       <Container className="mt-5">
//         <Card className="p-4 mb-4">
//           <Alert variant="warning">You haven't ordered anything yet.</Alert>
//         </Card>
//       </Container>
//     );
//   }

//   return (
//     <Container className="mt-4">
//       {/* Success Alert */}
//       {showSuccessAlert && (
//         <Alert variant="success" className="mb-4" dismissible onClose={() => setShowSuccessAlert(false)}>
//           <div className="d-flex align-items-center">
//             <div className="flex-grow-1">
//               <h5 className="mb-1">🎉 Order Placed Successfully!</h5>
//               <p className="mb-0">Your order has been confirmed. Track your orders below.</p>
//             </div>
//             <Badge bg="light" text="dark" className="ms-2">
//               {productList.length} {productList.length === 1 ? 'item' : 'items'}
//             </Badge>
//           </div>
//         </Alert>
//       )}

//       <Card className="p-4 mb-4">
//         <div className="d-flex justify-content-between align-items-center mb-4">
//           <h4 className="mb-0">My Orders ({productList.length})</h4>
//         </div>

//         {/* Products Grid */}
//         <Row>
//           {productList.map((prod) => {
//             const status = orderStatuses[prod.id];
//             return (
//               <Col lg={6} key={prod.id} className="mb-3">
//                 <Card 
//                   className="h-100 position-relative product-card"
//                   style={{ cursor: 'pointer' }}
//                   onClick={() => handleCardClick(prod)}
//                 >
//                   {/* Delete Button */}
//                   <Button
//                     variant="outline-danger"
//                     size="sm"
//                     className="position-absolute"
//                     style={{
//                       top: '10px',
//                       right: '10px',
//                       width: '28px',
//                       height: '28px',
//                       borderRadius: '50%',
//                       display: 'flex',
//                       alignItems: 'center',
//                       justifyContent: 'center',
//                       padding: 0,
//                       fontSize: '14px',
//                       fontWeight: 'bold',
//                       zIndex: 10
//                     }}
//                     onClick={(e) => {
//                       e.stopPropagation(); // Prevent card click when deleting
//                       handleDeleteClick(prod.id);
//                     }}
//                     title="Delete this order"
//                   >
//                     ×
//                   </Button>

//                   <Card.Body>
//                     <div className="d-flex">
//                       <img 
//                         src={prod.image} 
//                         alt={prod.name} 
//                         width={80} 
//                         height={80}
//                         style={{ 
//                           objectFit: 'cover', 
//                           borderRadius: 8,
//                           border: '1px solid #ddd'
//                         }} 
//                       />
//                       <div className="ms-3 flex-grow-1">
//                         <h6 className="fw-bold mb-1 mt-4">{prod.name}</h6>
//                         <div style={{ color: '#666', fontSize: '13px' }} className="mb-1">
//                           {prod.description || "Product description not available"}
//                         </div>
                        
//                         {prod.price && (
//                           <div style={{ color: '#2c5aa0', fontWeight: 'bold', fontSize: '15px' }} className="mb-2">
//                             ₹{prod.price.toLocaleString()}
//                           </div>
//                         )}

//                         {/* Order Date */}
//                         <div className="small text-muted mb-2">
//                           Ordered on: {prod.orderDate || new Date().toLocaleDateString()}
//                         </div>

//                         {/* Status */}
//                         <div className="mb-2">
//                           <Badge 
//                             bg="" 
//                             style={{ 
//                               backgroundColor: status?.color || '#007bff',
//                               fontSize: '11px',
//                             }}
//                           >
//                             {status?.status || "Order Placed"}
//                           </Badge>
//                           <span style={{ fontSize: '12px', color: '#666', marginLeft: '8px' }}>
//                             {status?.date || 'Just now'}
//                           </span>
//                         </div>

//                         {/* Star Rating */}
//                         <StarRating 
//                           productId={prod.id} 
//                           currentRating={ratings[prod.id] || 0} 
//                         />

//                         {/* Click hint */}
//                         <div className="mt-2 text-primary small">
//                           Click to view order details →
//                         </div>
//                       </div>
//                     </div>
//                   </Card.Body>
//                 </Card>
//               </Col>
//             );
//           })}
//         </Row>
//       </Card>

//       {/* Delete Confirmation Modal */}
//       <Modal show={showDeleteModal} onHide={cancelDelete} centered>
//         <Modal.Header closeButton>
//           <Modal.Title>Confirm Delete</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           Are you sure you want to remove this product from your orders? 
//           This action cannot be undone.
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={cancelDelete}>
//             Cancel
//           </Button>
//           <Button variant="danger" onClick={confirmDelete}>
//             Delete
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </Container>
//   );
// }





import React, { useState, useEffect } from "react";
import { Container, Card, Button, Alert, Badge, Modal, Row, Col } from "react-bootstrap";

export default function OrderedCompound() {
  const [placed, setPlaced] = useState(false);
  const [product, setProduct] = useState(null);
  const [productList, setProductList] = useState([]);
  const [ratings, setRatings] = useState({});
  const [orderStatuses, setOrderStatuses] = useState({});
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [productToDelete, setProductToDelete] = useState(null);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  // Function to format date
  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric'
    });
  };

  // Function to get delivered date (one day after order date)
  const getDeliveredDate = (orderDate) => {
    const delivered = new Date(orderDate);
    delivered.setDate(delivered.getDate() + 1);
    return formatDate(delivered);
  };

  // Function to get shipped date (same day as order)
  const getShippedDate = (orderDate) => {
    return formatDate(new Date(orderDate));
  };

  useEffect(() => {
    const orderPlaced = localStorage.getItem("orderedPlaced") === "true";
    const orderProduct = JSON.parse(localStorage.getItem("orderedProduct") || "null");
    setPlaced(orderPlaced);
    setProduct(orderProduct);
    
    // Load all existing orders
    const savedProductList = JSON.parse(localStorage.getItem("productList") || "[]");
    if (savedProductList.length > 0) {
      setProductList(savedProductList);
      setPlaced(true);
    }
    
    const savedRatings = JSON.parse(localStorage.getItem("productRatings") || "{}");
    setRatings(savedRatings);

    const savedStatuses = JSON.parse(localStorage.getItem("orderStatuses") || "{}");
    setOrderStatuses(savedStatuses);
  }, []);

  // Check for new orders automatically
  useEffect(() => {
    const checkForNewOrders = () => {
      const orderPlaced = localStorage.getItem("orderedPlaced") === "true";
      const orderProduct = JSON.parse(localStorage.getItem("orderedProduct") || "null");
      
      if (orderPlaced && orderProduct) {
        // Check if this product already exists in the list
        const productExists = productList.some(prod => 
          prod.name === orderProduct.name && 
          prod.price === orderProduct.price
        );

        if (!productExists) {
          const currentDate = new Date();
          const newProduct = {
            ...orderProduct,
            id: Date.now(),
            orderDate: formatDate(currentDate),
            orderedDateTime: currentDate.toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'short', 
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
            })
          };
          
          const updatedProductList = [...productList, newProduct];
          setProductList(updatedProductList);
          setPlaced(true);
          setShowSuccessAlert(true);

          // Set initial status for new product
          const newStatus = {
            status: "Order Placed",
            date: formatDate(currentDate),
            color: "#007bff"
          };
          
          const updatedStatuses = {
            ...orderStatuses,
            [newProduct.id]: newStatus
          };
          setOrderStatuses(updatedStatuses);
          localStorage.setItem("orderStatuses", JSON.stringify(updatedStatuses));

          // Clear the order flag after processing
          localStorage.setItem("orderedPlaced", "false");
        }
      }
    };

    // Check for new orders every 2 seconds
    const interval = setInterval(checkForNewOrders, 2000);
    return () => clearInterval(interval);
  }, [productList, orderStatuses]);

  // Save product list to localStorage whenever it changes
  useEffect(() => {
    if (productList.length > 0) {
      localStorage.setItem("productList", JSON.stringify(productList));
    }
  }, [productList]);

  // Auto-hide success alert after 5 seconds
  useEffect(() => {
    if (showSuccessAlert) {
      const timer = setTimeout(() => {
        setShowSuccessAlert(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [showSuccessAlert]);

  const handleDeleteClick = (productId) => {
    setProductToDelete(productId);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    if (productToDelete) {
      // Remove product from list
      const updatedProductList = productList.filter(prod => prod.id !== productToDelete);
      setProductList(updatedProductList);
      
      // Remove product rating
      const updatedRatings = { ...ratings };
      delete updatedRatings[productToDelete];
      setRatings(updatedRatings);
      localStorage.setItem("productRatings", JSON.stringify(updatedRatings));
      
      // Remove product status
      const updatedStatuses = { ...orderStatuses };
      delete updatedStatuses[productToDelete];
      setOrderStatuses(updatedStatuses);
      localStorage.setItem("orderStatuses", JSON.stringify(updatedStatuses));
      
      // Update localStorage for product list
      if (updatedProductList.length === 0) {
        localStorage.removeItem("productList");
        setPlaced(false);
      } else {
        localStorage.setItem("productList", JSON.stringify(updatedProductList));
      }
      
      setShowDeleteModal(false);
      setProductToDelete(null);
    }
  };

  const cancelDelete = () => {
    setShowDeleteModal(false);
    setProductToDelete(null);
  };

  const handleRatingClick = (productId, rating) => {
    const newRatings = {
      ...ratings,
      [productId]: rating
    };
    setRatings(newRatings);
    localStorage.setItem("productRatings", JSON.stringify(newRatings));
  };

  const handleCardClick = (product) => {
    setSelectedOrder(product);
  };

  const handleBackToOrders = () => {
    setSelectedOrder(null);
  };

  const StarRating = ({ productId, currentRating }) => {
    return (
      <div className="star-rating mt-2">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            onClick={() => handleRatingClick(productId, star)}
            style={{
              cursor: 'pointer',
              fontSize: '20px',
              color: star <= currentRating ? '#ffc107' : '#e4e5e9',
              marginRight: '2px',
              transition: 'color 0.2s ease-in-out'
            }}
            onMouseEnter={(e) => {
              if (star <= currentRating) return;
              e.target.style.color = '#ffc107';
            }}
            onMouseLeave={(e) => {
              if (star <= currentRating) return;
              e.target.style.color = '#e4e5e9';
            }}
          >
            ★
          </span>
        ))}
        <span style={{ marginLeft: '8px', fontSize: '14px', color: '#666' }}>
          {currentRating > 0 ? `${currentRating}/5` : '     Click  to rate'}
        </span>
      </div>
    );
  };

  // Order Details Page
  if (selectedOrder) {
    const status = orderStatuses[selectedOrder.id];
    const orderedDate = selectedOrder.orderDate || formatDate(new Date());
    const shippedDate = getShippedDate(selectedOrder.orderDate || new Date());
    const deliveredDate = getDeliveredDate(selectedOrder.orderDate || new Date());
    
    const orderUpdates = [
      { status: "Order Confirmed", date: orderedDate },
      { status: "Shipped", date: shippedDate },
      { status: "Delivered", date: deliveredDate }
    ];

    return (
      <Container className="mt-4">
        <Button variant="link" onClick={handleBackToOrders} className="mb-3 p-0">
          &larr; Back to Orders
        </Button>
        
        <Card className="p-4">
          <h4 className="mb-4">Order Details</h4>
          
          {/* Product Info */}
          <div className="mb-4 p-3 border rounded">
            <Row className="align-items-center">
              <Col md={2}>
                <img 
                  src={selectedOrder.image} 
                  alt={selectedOrder.name}
                  style={{ 
                    width: '80px', 
                    height: '80px', 
                    objectFit: 'cover',
                    borderRadius: '8px'
                  }}
                />
              </Col>
              <Col md={6}>
                <h6 className="fw-bold mb-1">{selectedOrder.name}</h6>
                <div className="text-muted small mb-2">
                  {selectedOrder.size && `Size: ${selectedOrder.size}`}
                  {selectedOrder.color && ` | Color: ${selectedOrder.color}`}
                </div>
                {selectedOrder.price && (
                  <div className="fw-bold text-primary">
                    ₹{selectedOrder.price.toLocaleString()}
                  </div>
                )}
              </Col>
              <Col md={4} className="text-end">
                <Badge 
                  bg="" 
                  style={{ 
                    backgroundColor: '#28a745',
                    fontSize: '12px',
                  }}
                >
                  Delivered
                </Badge>
                <div className="mt-2">
                  <strong className="text-success">Delivered on {deliveredDate}</strong>
                </div>
              </Col>
            </Row>
          </div>

          <hr />

          {/* Delivery Status */}
          <Alert variant="success" className="mb-4">
            <strong>Delivered, {deliveredDate}</strong><br />
            Your item has been delivered
          </Alert>

          {/* Order Timeline */}
          <h5 className="mb-3">Order Timeline</h5>
          <div className="mb-4">
            {orderUpdates.map((update, index) => (
              <div key={index} className="d-flex justify-content-between align-items-center mb-3 p-2 border-bottom">
                <div>
                  <strong>{update.status}</strong>
                </div>
                <div className="text-muted">{update.date}</div>
              </div>
            ))}
          </div>

          {/* Star Rating in Order Details */}
          <div className="mb-4">
            <h6>Rate this product</h6>
            <StarRating 
              productId={selectedOrder.id} 
              currentRating={ratings[selectedOrder.id] || 0} 
            />
          </div>

          <div className="text-center">
            <a href="/products">
            <Button variant="outline-primary">See all updates</Button>
            </a>
          </div>
        </Card>
      </Container>
    );
  }

  if (!placed || productList.length === 0) {
    return (
      <Container className="mt-5">
        <Card className="p-4 mb-4">
          <Alert variant="warning">You haven't ordered anything yet.</Alert>
        </Card>
      </Container>
    );
  }

  return (
    <Container className="mt-4">
      {/* Success Alert */}
      {showSuccessAlert && (
        <Alert variant="success" className="mb-4" dismissible onClose={() => setShowSuccessAlert(false)}>
          <div className="d-flex align-items-center">
            <div className="flex-grow-1">
              <h5 className="mb-1">🎉 Order Placed Successfully!</h5>
              <p className="mb-0">Your order has been confirmed. Track your orders below.</p>
            </div>
            <Badge bg="light" text="dark" className="ms-2">
              {productList.length} {productList.length === 1 ? 'item' : 'items'}
            </Badge>
          </div>
        </Alert>
      )}

      <Card className="p-4 mb-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h4 className="mb-0">My Orders ({productList.length})</h4>
        </div>

        {/* Products Grid */}
        <Row>
          {productList.map((prod) => {
            const status = orderStatuses[prod.id];
            const deliveredDate = getDeliveredDate(prod.orderDate || new Date());
            
            return (
              <Col lg={6} key={prod.id} className="mb-3">
                <Card 
                  className="h-100 position-relative product-card"
                  style={{ cursor: 'pointer' }}
                  onClick={() => handleCardClick(prod)}
                >
                  {/* Delete Button */}
                  <Button
                    variant="outline-danger"
                    size="sm"
                    className="position-absolute"
                    style={{
                      top: '10px',
                      right: '10px',
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: 0,
                      fontSize: '14px',
                      fontWeight: 'bold',
                      zIndex: 10
                    }}
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent card click when deleting
                      handleDeleteClick(prod.id);
                    }}
                    title="Delete this order"
                  >
                    ×
                  </Button>

                  <Card.Body>
                    <div className="d-flex">
                      <img 
                        src={prod.image} 
                        alt={prod.name} 
                        width={80} 
                        height={80}
                        style={{ 
                          objectFit: 'cover', 
                          borderRadius: 8,
                          border: '1px solid #ddd'
                        }} 
                      />
                      <div className="ms-3 flex-grow-1">
                        <h6 className="fw-bold mb-1 mt-4">{prod.name}</h6>
                        <div style={{ color: '#666', fontSize: '13px' }} className="mb-1">
                          {prod.description || "Product description not available"}
                        </div>
                        
                        {prod.price && (
                          <div style={{ color: '#2c5aa0', fontWeight: 'bold', fontSize: '15px' }} className="mb-2">
                            ₹{prod.price.toLocaleString()}
                          </div>
                        )}

                        {/* Order Date */}
                        <div className="small text-muted mb-2">
                          Ordered on: {prod.orderDate || formatDate(new Date())}
                        </div>

                        {/* Status */}
                        <div className="mb-2">
                          <Badge 
                            bg="" 
                            style={{ 
                              backgroundColor: '#28a745',
                              fontSize: '11px',
                            }}
                          >
                            Delivered
                          </Badge>
                          <span style={{ fontSize: '12px', color: '#666', marginLeft: '8px' }}>
                            Delivered on {deliveredDate}
                          </span>
                        </div>

                        {/* Star Rating */}
                        <StarRating 
                          productId={prod.id} 
                          currentRating={ratings[prod.id] || 0} 
                        />

                        {/* Click hint */}
                        <div className="mt-2 text-primary small">
                          Click to view order details →
                        </div>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Card>

      {/* Delete Confirmation Modal */}
      <Modal show={showDeleteModal} onHide={cancelDelete} centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to remove this product from your orders? 
          This action cannot be undone.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={cancelDelete}>
            Cancel
          </Button>
          <Button variant="danger" onClick={confirmDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}