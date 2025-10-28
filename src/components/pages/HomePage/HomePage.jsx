




import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col, Card, Spinner, Alert, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then((resp) => {
        setProducts(resp.data);
      })
      .catch(() => {
        setProducts([]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  // Function to handle Add to Cart and navigate to order page
  const handleAddToCartAndOrder = (product) => {
    // Add product to cart in localStorage
    const savedCart = localStorage.getItem('cart');
    const cart = savedCart ? JSON.parse(savedCart) : [];
    
    const existingItem = cart.find(item => item.id === product.id);
    let updatedCart;
    
    if (existingItem) {
      updatedCart = cart.map(item =>
        item.id === product.id
          ? { ...item, qty: item.qty + 1 }
          : item
      );
    } else {
      updatedCart = [...cart, { ...product, qty: 1 }];
    }
    
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    
    // Navigate to order page with the product
    navigate("/order", { state: { product } });
  };

  // Function to handle only Add to Cart
  const handleAddToCart = (product) => {
    // Add product to cart in localStorage
    const savedCart = localStorage.getItem('cart');
    const cart = savedCart ? JSON.parse(savedCart) : [];
    
    const existingItem = cart.find(item => item.id === product.id);
    let updatedCart;
    
    if (existingItem) {
      updatedCart = cart.map(item =>
        item.id === product.id
          ? { ...item, qty: item.qty + 1 }
          : item
      );
    } else {
      updatedCart = [...cart, { ...product, qty: 1 }];
    }
    
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    
    // Show success message or navigate to cart page
    alert(`${product.name} added to cart!`);
    // Or navigate to cart page if you want:
    // navigate("/cart");
  };

  if (loading)
    return (
      <Container className="mt-5 text-center">
        <Spinner animation="border" />
        <div>Loading products...</div>
      </Container>
    );

  return (
    <Container className="mt-5">
      <h3>Products</h3>
      
      {products.length === 0 ? <Alert variant="warning">No products found.</Alert> : null}
      <Row>
        {products.map((product) => (
          <Col key={product.id} md={3} className="mb-3">
            <Card className="h-100 shadow-sm">
              <Card.Img
                variant="top"
                src={product.image}
                alt={product.name}
                style={{ objectFit: "cover", height: "200px" }}
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text className="fw-bold">₹{product.price}</Card.Text>
                
                {/* Buttons container with margin-top auto to push to bottom */}
                <div className="mt-auto pt-3">
                  <Row>
                    <Col>
                      <Button 
                        variant="warning" 
                        size="sm" 
                        className="w-100 mb-2"
                        onClick={() => handleAddToCartAndOrder(product)}
                      >
                        Add to Cart 
                      </Button>
                    </Col>
                    <Col>
                      <Link 
                        to="/buy-now" 
                        state={{ product }}
                        className="text-decoration-none"
                      >
                        <Button variant="primary" size="sm" className="w-100 mb-2">
                          Buy Now
                        </Button>
                      </Link>
                    </Col>
                  </Row>
                  {/* Optional: Separate Add to Cart only button */}
                  {/* <Row>
                    <Col>
                      <Button 
                        variant="outline-secondary" 
                        size="m" 
                        className="w-100"
                        onClick={() => handleAddToCart(product)}
                      >
                        Add to Cart Only
                      </Button>
                    </Col>
                  </Row> */}
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}