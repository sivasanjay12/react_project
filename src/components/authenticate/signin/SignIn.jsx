// import React, { useState } from "react";
// import axios from "axios";

// export default function Signin({ onLogin }) {
//   const [form, setForm] = useState({ username: "", password: "" });
//   const [errors, setErrors] = useState({});
//   const [message, setMessage] = useState("");

//   const validate = () => {
//     const errors = {};
//     if (!form.username.trim()) errors.username = "Username is required";
//     if (!form.password) errors.password = "Password is required";
//     return errors;
//   };

//   const handleChange = (e) => {
//     setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const validationErrors = validate();
//     if (Object.keys(validationErrors).length) {
//       setErrors(validationErrors);
//       return;
//     }
//     setErrors({});
//     try {
//       const response = await axios.get(
//         `http://localhost:3000/users?username=${form.username}&password=${form.password}`
//       );
//       if (response.data.length > 0) {
//         localStorage.setItem("authUser", form.username);
//         onLogin(form.username);
//       } else {
//         setMessage("Invalid username or password.");
//       }
//     } catch (error) {
//       setMessage("Error in signing in. Try again.");
//     }
//   };

//   return (
//     <div className="container mt-5" style={{ maxWidth: "400px" }}>
//       <h2>Sign In</h2>
//       {message && <div className="alert alert-danger">{message}</div>}
//       <form onSubmit={handleSubmit} noValidate>
//         <div className="mb-3">
//           <label className="form-label">Username</label>
//           <input
//             name="username"
//             type="text"
//             className={`form-control ${errors.username ? "is-invalid" : ""}`}
//             value={form.username}
//             onChange={handleChange}
//           />
//           <div className="invalid-feedback">{errors.username}</div>
//         </div>
//         <div className="mb-3">
//           <label className="form-label">Password</label>
//           <input
//             name="password"
//             type="password"
//             className={`form-control ${errors.password ? "is-invalid" : ""}`}
//             value={form.password}
//             onChange={handleChange}
//           />
//           <div className="invalid-feedback">{errors.password}</div>
//         </div>
//         <button className="btn btn-primary" type="submit">
//           Sign In
//         </button>
//       </form>
//     </div>
//   );
// }


import React, { useState } from "react";
import axios from "axios";
import { Container, Form, Button, Alert } from "react-bootstrap";

export default function Signin({ onLogin }) {
  const [form, setForm] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");

  const validate = () => {
    const errs = {};
    if (!form.username.trim()) errs.username = "Username is required";
    if (!form.password) errs.password = "Password is required";
    return errs;
  };

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    try {
      const response = await axios.get(
        `http://localhost:3000/users?username=${form.username}&password=${form.password}`
      );
      if (response.data.length > 0) {
        localStorage.setItem("authUser", form.username);
        onLogin(form.username);
      } else {
        setMessage("Invalid username or password.");
      }
    } catch {
      setMessage("Error in signing in. Try again.");
    }
  };

  return (
    <Container className="mt-5" style={{ maxWidth: "400px" }}>
      <h2>Sign In</h2>
      {message && <Alert variant="danger">{message}</Alert>}
      <Form onSubmit={handleSubmit} noValidate>
        <Form.Group className="mb-3" controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            name="username"
            type="text"
            value={form.username}
            onChange={handleChange}
            isInvalid={!!errors.username}
          />
          <Form.Control.Feedback type="invalid">
            {errors.username}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            isInvalid={!!errors.password}
          />
          <Form.Control.Feedback type="invalid">
            {errors.password}
          </Form.Control.Feedback>
        </Form.Group>

        <Button type="submit" variant="primary">
          Sign In
        </Button>
      </Form>
    </Container>
  );
}
