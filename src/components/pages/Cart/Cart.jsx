
import React, { useState, useEffect } from "react";
import { Container, Card, Row, Col, Button, Alert, Table } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";

export default function Cart() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  // Load cart from localStorage on component mount
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);
 
  // Add product to cart when coming from product list
  useEffect(() => {
    if (location.state?.product) {
      const product = location.state.product;
      addToCart(product);
      
      // Clear the navigation state to prevent adding again on refresh
      window.history.replaceState({}, document.title);
    }
  }, [location.state]);

  // Save cart to localStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
    // Notify navbar about cart update
    window.dispatchEvent(new Event('cartUpdated'));
  }, [cart]);

  const addToCart = (product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, qty: 1 }];
      }
    });
  };

  const handleDelete = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const handleOrder = (product) => {
    navigate("/buy-now", { state: { product, qty: product.qty } });
  };

  const increaseQty = (id) => {
    setCart(cart.map(item =>
      item.id === id ? { ...item, qty: item.qty + 1 } : item
    ));
  };

  const decreaseQty = (id) => {
    setCart(cart.map(item =>
      item.id === id && item.qty > 1 
        ? { ...item, qty: item.qty - 1 } 
        : item
    ));
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.qty), 0);
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem('cart');
    window.dispatchEvent(new Event('cartUpdated'));
  };

  // For mobile view - Card layout with line by line layout
  const MobileCartView = () => (
    <Row>
      {cart.map((item) => (
        <Col xs={12} key={item.id} className="mb-3">
          <Card className="h-100 shadow-sm">
            <div className="d-flex p-3">
              <Card.Img
                variant="top"
                src={item.image}
                alt={item.name}
                style={{ 
                  width: "80px", 
                  height: "80px",
                  objectFit: "cover" 
                }}
                className="me-3"
              />
              <div className="flex-grow-1">
                <Card.Title className="h6 mb-1">{item.name}</Card.Title>
                <Card.Text className="text-muted small mb-2">
                  {item.description}
                </Card.Text>
                
                {/* Price - Line 1 */}
                <div className="mb-2">
                  <span className="fw-bold text-primary">${item.price}</span>
                  <span className="text-muted ms-2">each</span>
                </div>
                
                {/* Quantity Controls - Line 2 */}
                <div className="d-flex align-items-center mb-3">
                  <span className="small me-2 fw-bold">Quantity:</span>
                  <Button 
                    variant="outline-secondary" 
                    size="sm" 
                    onClick={() => decreaseQty(item.id)}
                    disabled={item.qty <= 1}
                    style={{ padding: "0.15rem 0.4rem", fontSize: "0.75rem" }}
                  >
                    -
                  </Button>
                  <span className="mx-2 small fw-bold">{item.qty}</span>
                  <Button 
                    variant="outline-secondary" 
                    size="sm" 
                    onClick={() => increaseQty(item.id)}
                    style={{ padding: "0.15rem 0.4rem", fontSize: "0.75rem" }}
                  >
                    +
                  </Button>
                </div>

                {/* Item Total - Line 3 */}
                <div className="mb-3">
                  <span className="fw-bold">Item Total: </span>
                  <span className="fw-bold text-success">${(item.price * item.qty).toFixed(2)}</span>
                </div>

                {/* Buttons - Line 4 */}
                <div className="d-flex gap-2">
                  <Button
                    variant="outline-danger"
                    size="sm"
                    onClick={() => handleDelete(item.id)}
                    className="flex-fill"
                  >
                    <i className="fa fa-trash me-1"></i>
                    Delete
                  </Button>
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() => handleOrder(item)}
                    className="flex-fill"
                  >
                    <i className="fa fa-shopping-bag me-1"></i>
                    Order Now
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </Col>
      ))}
    </Row>
  );

  // For desktop view - Table layout
  const DesktopCartView = () => (
    <Card className="shadow-sm">
      <Card.Body className="p-0">
        <Table responsive className="mb-0">
          <thead className="bg-light">
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item.id}>
                <td>
                  <div className="d-flex align-items-center">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      style={{
                        width: "60px",
                        height: "60px",
                        objectFit: "cover",
                        borderRadius: "0.375rem"
                      }}
                      className="me-3"
                    />
                    <div>
                      <div className="fw-bold">{item.name}</div>
                      <small className="text-muted">{item.description}</small>
                    </div>
                  </div>
                </td>
                <td className="align-middle">
                  <strong>${item.price}</strong>
                </td>
                <td className="align-middle">
                  <div className="d-flex align-items-center">
                    <Button 
                      variant="outline-secondary" 
                      size="sm" 
                      onClick={() => decreaseQty(item.id)}
                      disabled={item.qty <= 1}
                      style={{ padding: "0.25rem 0.5rem" }}
                    >
                      -
                    </Button>
                    <span className="mx-3 fw-bold">{item.qty}</span>
                    <Button 
                      variant="outline-secondary" 
                      size="sm" 
                      onClick={() => increaseQty(item.id)}
                      style={{ padding: "0.25rem 0.5rem" }}
                    >
                      +
                    </Button>
                  </div>
                </td>
                <td className="align-middle">
                  <strong className="text-success">${(item.price * item.qty).toFixed(2)}</strong>
                </td>
                <td className="align-middle">
                  <div className="d-flex gap-2">
                    <Button
                      variant="outline-danger"
                      size="sm"
                      onClick={() => handleDelete(item.id)}
                    >
                      <i className="fa fa-trash me-1"></i>
                      Delete
                    </Button>
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={() => handleOrder(item)}
                    >
                      <i className="fa fa-shopping-bag me-1"></i>
                      Order
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );

  return (
    <Container className="mt-3 mb-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3 className="mb-0">Shopping Cart</h3>
        {cart.length > 0 && (
          <Button 
            variant="outline-danger" 
            size="sm"
            onClick={clearCart}
          >
            <i className="fa fa-trash me-1"></i>
            Clear Cart
          </Button>
        )}
      </div>
      
      {cart.length === 0 ? (
        <Alert variant="info" className="text-center py-4">
          <i className="fa fa-shopping-cart fa-3x mb-3 text-muted"></i>
          <h5>Your cart is empty</h5>
          <p className="text-muted mb-3">Start shopping to add items to your cart</p>
          <Button 
            variant="primary" 
            onClick={() => navigate("/")}
          >
            <i className="fa fa-shopping-bag me-2"></i>
            Continue Shopping
          </Button>
        </Alert>
      ) : (
        <>
          {/* Mobile View */}
          <div className="d-block d-lg-none">
            <MobileCartView />
          </div>
          
          {/* Desktop View */}
          <div className="d-none d-lg-block">
            <DesktopCartView />
          </div>
          
          {/* Cart Summary */}
          <Row className="mt-4">
            <Col lg={{ span: 6, offset: 6 }} md={{ span: 8, offset: 4 }} xs={12}>
              <Card className="bg-light border-0">
                <Card.Body>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h5 className="mb-0">Subtotal:</h5>
                    <h5 className="mb-0">${getTotalPrice().toFixed(2)}</h5>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <small className="text-muted">Shipping:</small>
                    <small className="text-muted">Calculated at checkout</small>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <h4 className="mb-0">Total:</h4>
                    <h4 className="mb-0 text-primary">${getTotalPrice().toFixed(2)}</h4>
                  </div>
                  <div className="d-grid gap-2">
                    <Button 
                      variant="success" 
                      size="lg"
                      onClick={() => navigate("/checkout")}
                    >
                      <i className="fa fa-credit-card me-2"></i>
                      Proceed to Checkout
                    </Button>
                    <Button 
                      variant="outline-primary" 
                      onClick={() => navigate("/")}
                    >
                      <i className="fa fa-arrow-left me-2"></i>
                      Continue Shopping
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
}