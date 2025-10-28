// import React from "react";
// import { Card, Container, Button, Row, Col, Alert } from "react-bootstrap";
// import { useLocation, useNavigate } from "react-router-dom";

// export default function OrderPage() {
//   const { state } = useLocation();
//   const navigate = useNavigate();

//   if (!state) return <Alert variant="danger">No product in cart.</Alert>;

//   const { product, qty } = state;
//   const total = product.price * qty;
// console.log(20)
//   return (
     
  
//     <Container className="mt-4">
//       <Button variant="link" onClick={() => navigate(-1)}>&larr; Back</Button>
//       <Card className="p-3 mb-4">
//         <Row>
//           <Col md={4} sm={12} className="text-center">
//             <img src={product.image} alt={product.name} style={{ maxWidth: "180px", borderRadius: 8 }} />
//           </Col>
//           <Col md={8} sm={12}>
//             <h5>{product.name}</h5>
//             <div>{product.description}</div>
//             <div>Color: {product.selectedColor}</div>
//             <div>Memory: {product.selectedMemory}</div>
//             <div>Storage: {product.selectedStorage}</div>
//             <div>Unit Price: &#8377;{product.price.toLocaleString()}</div>
//             <div>Quantity: {qty}</div>
//             <div className="fw-bold mt-2">Total: &#8377;{total.toLocaleString()}</div>
//             <Button variant="primary" className="mt-3"
//               onClick={() => navigate("/buy-now", { state: { product, qty } })}
//             >Proceed to Buy</Button>
//           </Col>
//         </Row>
//       </Card>
//     </Container>
//   );
// }




// import React from "react";
// import { Card, Container, Button, Row, Col, Alert } from "react-bootstrap";
// import { useLocation, useNavigate } from "react-router-dom";

// export default function OrderPage() {
//   const { state } = useLocation();
//   const navigate = useNavigate();

//   if (!state) return <Alert variant="danger">No product in cart.</Alert>;

//   const { product, qty } = state;
//   const total = product.price * qty;
  
//   console.log(20); // This is fine

//   return (
//     <Container className="mt-4">
//       <Button variant="link" onClick={() => navigate(-1)}>&larr; Back</Button>
//       <Card className="p-3 mb-4">
//         <Row>
//           <Col md={4} sm={12} className="text-center">
//             <img 
//               src={product.image} 
//               alt={product.name} 
//               style={{ maxWidth: "180px", borderRadius: 8 }} 
//             />
//           </Col>
//           <Col md={8} sm={12}>
//             <h5>{product.name}</h5>
//             <div>{product.description}</div>
//             <div>Category: {product.category}</div>
//             {/* Remove these lines if they don't exist in your product data */}
//             <div>Color: {product.colors}</div>
//             <div>Memory: {product.memory}</div>
//             <div>Storage: {product.storage}</div>
//             <div>Unit Price: &#8377;{product.price.toLocaleString()}</div>
//             <div>Quantity: {qty}</div>
//             <div className="fw-bold mt-2">Total: &#8377;{total.toLocaleString()}</div>
//             <Button 
//               variant="primary" 
//               className="mt-3"
//               onClick={() => navigate("/buy-now", { state: { product, qty } })}
//             >
//               Proceed to Buy
//             </Button>
//           </Col>
//         </Row>
//       </Card>
//     </Container>
//   );
// }

 






import React, { useState } from "react";
import { Card, Container, Button, Row, Col, Alert, Form } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";

export default function OrderPage() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedMemory, setSelectedMemory] = useState("");
  const [selectedStorage, setSelectedStorage] = useState("");
  const [quantity, setQuantity] = useState(1);

  if (!state) return <Alert variant="danger">No product in cart.</Alert>;

  const { product } = state;
  
  // Initialize selections if they exist in product data
  React.useEffect(() => {
    if (product.colors && product.colors.length > 0) {
      setSelectedColor(product.colors[0]);
    }
    if (product.memory && product.memory.length > 0) {
      setSelectedMemory(product.memory[0]);
    }
    if (product.storage && product.storage.length > 0) {
      setSelectedStorage(product.storage[0]);
    }
    if (state.qty) {
      setQuantity(state.qty);
    }
  }, [product, state.qty]);

  const total = product.price * quantity;

  const increaseQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decreaseQuantity = () => {
    setQuantity(prev => (prev > 1 ? prev - 1 : 1));
  };

  const handleProceedToBuy = () => {
    navigate("/buy-now", { 
      state: { 
        product, 
        qty: quantity,
        selectedOptions: {
          color: selectedColor,
          memory: selectedMemory,
          storage: selectedStorage
        }
      } 
    });
  };

  return (
    <Container className="mt-4">
      <Button variant="link" onClick={() => navigate(-1)}>&larr; Back</Button>
      <Card className="p-3 mb-4">
        <Row>
          <Col md={4} sm={12} className="text-center">
            <img 
              src={product.image} 
              alt={product.name} 
              style={{ maxWidth: "180px", borderRadius: 8 }} 
            />
          </Col>
          <Col md={8} sm={12}>
            <h5>{product.name}</h5>
            <div>{product.description}</div>
            <div>Category: {product.category}</div>
            
            {/* Color Selection */}
            {product.colors && product.colors.length > 0 && (
              <div className="mb-3">
                <Form.Label className="fw-bold">Color:</Form.Label>
                <div>
                  {product.colors.map((color, index) => (
                    <Form.Check
                      key={index}
                      type="radio"
                      id={`color-${index}`}
                      name="color"
                      label={color}
                      checked={selectedColor === color}
                      onChange={() => setSelectedColor(color)}
                      inline
                      className="me-3"
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Memory Selection */}
            {product.memory && product.memory.length > 0 && (
              <div className="mb-3">
                <Form.Label className="fw-bold">Memory:</Form.Label>
                <div>
                  {product.memory.map((memory, index) => (
                    <Form.Check
                      key={index}
                      type="radio"
                      id={`memory-${index}`}
                      name="memory"
                      label={memory}
                      checked={selectedMemory === memory}
                      onChange={() => setSelectedMemory(memory)}
                      inline
                      className="me-3"
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Storage Selection */}
            {product.storage && product.storage.length > 0 && (
              <div className="mb-3">
                <Form.Label className="fw-bold">Storage:</Form.Label>
                <div>
                  {product.storage.map((storage, index) => (
                    <Form.Check
                      key={index}
                      type="radio"
                      id={`storage-${index}`}
                      name="storage"
                      label={storage}
                      checked={selectedStorage === storage}
                      onChange={() => setSelectedStorage(storage)}
                      inline
                      className="me-3"
                    />
                  ))}
                </div>
              </div>
            )}

            <div className="mb-3">
              <Form.Label className="fw-bold">Unit Price: &#8377;{product.price.toLocaleString()}</Form.Label>
            </div>

            {/* Quantity Controls */}
            <div className="mb-3">
              <Form.Label className="fw-bold">Quantity:</Form.Label>
              <div className="d-flex align-items-center">
                <Button 
                  variant="outline-secondary" 
                  size="sm" 
                  onClick={decreaseQuantity}
                  disabled={quantity <= 1}
                >
                  -
                </Button>
                <span className="mx-3 fw-bold">{quantity}</span>
                <Button 
                  variant="outline-secondary" 
                  size="sm" 
                  onClick={increaseQuantity}
                >
                  +
                </Button>
              </div>
            </div>

            <div className="fw-bold mt-2 fs-5">Total: &#8377;{total.toLocaleString()}</div>
            
            <Button 
              variant="primary" 
              className="mt-3"
              onClick={handleProceedToBuy}
            >
              Proceed to Buy
            </Button>
          </Col>
        </Row>
      </Card>
    </Container>
  );
}