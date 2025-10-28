import React, { useState } from "react";
import { Container, Card, Button, Form, Alert, ProgressBar } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";

const paymentStages = [
  "Order Initiated",
  "Payment Processing",
  "Payment Successful",
  "Order Placed",
  "Order Shipped"
];


export default function BuyNow() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [placed, setPlaced] = useState(false);

  const { product, qty } = state || {};
  const total = product ? product.price * qty : 0;

  if (!state) return <Alert variant="danger">No order found.</Alert>;

  const handlePayment = (e) => {
    e.preventDefault();
    setStep(2);
    setTimeout(() => {
      setStep(4);
      setPlaced(true);
    }, 1800);
  };
if (placed) {
  localStorage.setItem("orderedPlaced", "true");
  localStorage.setItem("orderedProduct", JSON.stringify(product));
}
  return (
    <Container className="mt-5">
      <Button variant="link" onClick={() => navigate(-1)}>&larr; Back</Button>
      <Card className="p-4 mb-4">
        <h4>Checkout</h4>
        <div className="mb-3">product: {product.name}</div>
        <div>Unit Price: &#8377;{product.price.toLocaleString()}</div>
        <div>Quantity: {qty}</div>
        <div className="fw-bold mb-2">Total: &#8377;{total.toLocaleString()}</div>
        {!placed ? (
          <Form onSubmit={handlePayment}>
            <Form.Group className="mb-3">
              <Form.Label>Select Payment Method</Form.Label>
              <Form.Select value={paymentMethod} onChange={e => setPaymentMethod(e.target.value)} required>
                <option value="">Choose...</option>
                <option value="credit">Credit Card</option>
                <option value="debit">Debit Card</option>
                <option value="upi">UPI</option>
                <option value="cod">Cash on Delivery</option>
              </Form.Select>
            </Form.Group>
            {(paymentMethod === "credit" || paymentMethod === "debit") && (
              <>
                <Form.Group className="mb-2">
                  <Form.Label>Card Number</Form.Label>
                  <Form.Control type="text" required placeholder="Card Number" />
                </Form.Group>
                <Form.Group className="mb-2">
                  <Form.Label>Name on Card</Form.Label>
                  <Form.Control type="text" required placeholder="Name on Card" />
                </Form.Group>
                <Form.Group className="mb-2">
                  <Form.Label>Expiry Date</Form.Label>
                  <Form.Control type="text" required placeholder="MM/YY" />
                </Form.Group>
                <Form.Group className="mb-4">
                  <Form.Label>CVV</Form.Label>
                  <Form.Control type="password" required placeholder="CVV" />
                </Form.Group>
              </>
            )}
            <Button type="submit" variant="primary">
              Pay & Place Order
            </Button>
          </Form>
        ) : (
          <Alert variant="success">
            Order Placed Successfully! <br />
            <strong>Track your order below.</strong>
          </Alert>
        )}
        <hr />
        <h5>Order Timeline</h5>
        <ProgressBar now={(step / (paymentStages.length - 1)) * 100} label={paymentStages[step]} className="mb-3" />
        <ul>
          {paymentStages.map((s, idx) => (
            <li key={s} style={{ color: idx <= step ? "#28a745" : "#aaa" }}>
              {s}
            </li>
          ))}
        </ul>
      </Card>
    </Container>
  );
}
