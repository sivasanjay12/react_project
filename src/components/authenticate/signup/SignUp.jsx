// import React, { useState } from "react";
// import {useNavigate} from "react-router-dom";
// import axios from "axios";

// export default function Signup() {
//   const navigate = useNavigate();
//   const [form, setForm] = useState({
//     firstname: "",
//     lastname: "",
//     username: "",
//     password: "",
//     confirm_password: "",
//   });
//   const [errors, setErrors] = useState({});
//   console.log(errors);
//   const [message, setMessage] = useState("");

//   const validate = () => {
//     const errors = {};
//     if (!form.firstname.trim()){
//          errors.firstname = "First name is required";}
//     if (!form.lastname.trim()){ 
//         errors.lastname = "Last name is required";}
//     if (!form.username.trim()){
//         errors.username = "Username is required";}
//     if (!form.password){
//         errors.password = "Password is required";}
//     if (form.password !== form.confirm_password){
//       errors.confirm_password = "Passwords do not match";
//     }
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
//       await axios.post("http://localhost:3000/users", {
//         firstname: form.firstname,
//         lastname: form.lastname,
//         username: form.username,
//         password: form.password,
//       });
//       setMessage("Signup successful! You can now sign in.");
//       setForm({
//         firstname: "",
//         lastname: "",
//         username: "",
//         password: "",
//         confirm_password: "",
//       });
//       navigate("/signin");
//     } catch (error) {
//       setMessage("Signup failed. Please try a different username.");
//     }
//   };

//   return (
//     <div className="container mt-5" style={{ maxWidth: "500px" }}>
//       <h2>Sign Up</h2>
//       {message && <div className="alert alert-info">{message}</div>}
//       <form onSubmit={handleSubmit} noValidate>
//         <div className="mb-3">
//           <label className="form-label">First Name</label>
//           <input
//             name="firstname"
//             type="text"
//             className={`form-control ${errors.firstname ? "is-invalid" : ""}`}
//             value={form.firstname}
//             onChange={handleChange}
//           />
//           <div className="invalid-feedback">{errors.firstname}</div>
//         </div>
//         <div className="mb-3">
//           <label className="form-label">Last Name</label>
//           <input
//             name="lastname"
//             type="text"
//             className={`form-control ${errors.lastname ? "is-invalid" : ""}`}
//             value={form.lastname}
//             onChange={handleChange}
//           />
//           <div className="invalid-feedback">{errors.lastname}</div>
//         </div>
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
//         <div className="mb-3">
//           <label className="form-label">Confirm Password</label>
//           <input
//             name="confirm_password"
//             type="password"
//             className={`form-control ${
//               errors.confirm_password ? "is-invalid" : ""
//             }`}
//             value={form.confirm_password}
//             onChange={handleChange}
//           />
//           <div className="invalid-feedback">{errors.confirm_password}</div>
//         </div>
//         <button className="btn btn-primary" type="submit">
//           Sign Up
//         </button>
//       </form>
//     </div>
//   );
// }


// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { Container, Form, Button, Alert } from "react-bootstrap";

// export default function Signup() {
//   const navigate = useNavigate();
//   const [form, setForm] = useState({
//     firstname: "",
//     lastname: "",
//     username: "",
//     password: "",
//     confirm_password: "",
//   });
//   const [errors, setErrors] = useState({});
//   const [message, setMessage] = useState("");

//   const validate = () => {
//     const errors = {};
//     if (!form.firstname.trim()) errors.firstname = "First name is required";
//     if (!form.lastname.trim()) errors.lastname = "Last name is required";
//     if (!form.username.trim()) errors.username = "Username is required";
//     if (!form.password) errors.password = "Password is required";
//     if (form.password !== form.confirm_password)
//       errors.confirm_password = "Passwords do not match";
//     return errors;
//   };

//   const handleChange = (e) =>
//     setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const validationErrors = validate();
//     if (Object.keys(validationErrors).length) {
//       setErrors(validationErrors);
//       return;
//     }
//     setErrors({});
//     try {
//       await axios.post("http://localhost:3000/users", {
//         firstname: form.firstname,
//         lastname: form.lastname,
//         username: form.username,
//         password: form.password,
//       });
//       setMessage("Signup successful! You can now sign in.");
//       setForm({
//         firstname: "",
//         lastname: "",
//         username: "",
//         password: "",
//         confirm_password: "",
//       });
//       navigate("/signin");
//     } catch {
//       setMessage("Signup failed. Please try a different username.");
//     }
//   };

//   return (
//     <Container className="mt-5" style={{ maxWidth: "500px" }}>
//       <h2>Sign Up</h2>
//       {message && <Alert variant="info">{message}</Alert>}
//       <Form onSubmit={handleSubmit} noValidate>
//         {["firstname", "lastname", "username", "password", "confirm_password"].map((field) => (
//           <Form.Group key={field} className="mb-3" controlId={field}>
//             <Form.Label>
//               {field === "confirm_password" ? "Confirm Password" : field.charAt(0).toUpperCase() + field.slice(1)}
//             </Form.Label>
//             <Form.Control
//               type={field.includes("password") ? "password" : "text"}
//               name={field}
//               value={form[field]}
//               onChange={handleChange}
//               isInvalid={!!errors[field]}
//             />
//             <Form.Control.Feedback type="invalid">{errors[field]}</Form.Control.Feedback>
//           </Form.Group>
//         ))}
//         <Button variant="primary" type="submit">
//           Sign Up
//         </Button>
//       </Form>
//     </Container>
//   );
// }



import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Container, Form, Button, Alert } from "react-bootstrap";

export default function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    confirm_password: "",
  });
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");

  const validate = () => {
    const errors = {};
    if (!form.firstname.trim()) errors.firstname = "First name is required";
    if (!form.lastname.trim()) errors.lastname = "Last name is required";
    if (!form.username.trim()) errors.username = "Username is required";
    if (!form.password) errors.password = "Password is required";
    if (form.password !== form.confirm_password)
      errors.confirm_password = "Passwords do not match";
    return errors;
  };

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setMessage(""); // Clear previous messages
    
    try {
      const response = await axios.post("http://localhost:3000/users", {
        firstname: form.firstname,
        lastname: form.lastname,
        username: form.username,
        password: form.password,
      });
      
      console.log("Signup successful:", response.data);
      setMessage("Signup successful! You can now sign in.");
      
      // Reset form
      setForm({
        firstname: "",
        lastname: "",
        username: "",
        password: "",
        confirm_password: "",
      });
      
      // Navigate after successful signup
      setTimeout(() => navigate("/signin"), 2000); // Give user time to see success message
      console.log(1)
    } catch (error) {
      console.error("Signup error:", error);
      
      // Handle different types of errors
      if (error.response) {
        // Server responded with error status
        if (error.response.status === 409) {
          setMessage("Username already exists. Please try a different username.");
        } else if (error.response.status === 400) {
          setMessage("Invalid data. Please check your input.");
        } else {
          setMessage(`Signup failed: ${error.response.data?.message || "Server error"}`);
        }
      } else if (error.request) {
        // Request was made but no response received
        setMessage("Network error. Please check if the server is running.");
      } else {
        // Something else happened
        setMessage("Signup failed. Please try again.");
      }
    }
  };

  return (
    <Container className="mt-5" style={{ maxWidth: "500px" }}>
      <h2>Sign Up</h2>
      {message && (
        <Alert variant={message.includes("successful") ? "success" : "danger"}>
          {message}
        </Alert>
      )}
      <Form onSubmit={handleSubmit} noValidate>
        {["firstname", "lastname", "username", "password", "confirm_password"].map((field) => (
          <Form.Group key={field} className="mb-3" controlId={field}>
            <Form.Label>
              {field === "confirm_password" ? "Confirm Password" : field.charAt(0).toUpperCase() + field.slice(1)}
            </Form.Label>
            <Form.Control
              type={field.includes("password") ? "password" : "text"}
              name={field}
              value={form[field]}
              onChange={handleChange}
              isInvalid={!!errors[field]}
            />
            <Form.Control.Feedback type="invalid">{errors[field]}</Form.Control.Feedback>
          </Form.Group>
        ))}
        <Button variant="primary" type="submit">
          Sign Up
        </Button>
      </Form>
    </Container>
  );
}