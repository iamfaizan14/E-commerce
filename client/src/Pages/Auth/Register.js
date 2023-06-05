import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import "./register.css";
import Layout from "../../Components/Layout/Layout";
import axios from "axios";
import { toast } from "react-hot-toast";

const RegistrationPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/auth/register`,
        {
          name,
          email,
          password,
          phone,
          address,
        }
      );
      if (res && res.data.success) {
        toast.success(res && res.data.message);
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error("something went wrong", error);
    }
    setName("");
    setEmail("");
    setPassword("");
    setPhone("");
    setAddress("");
  };
  return (
    <Layout title="Register here - e-com">
      <div className="registration-container mt-5">
        <h1>Registration</h1>
        <Form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <Form.Group controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              placeholder="Enter your name"
              required
            />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              placeholder="Enter email"
              required
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              placeholder="Password"
              required
            />
          </Form.Group>
          <Form.Group controlId="formBasicPhone">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
              type="number"
              placeholder="Phone"
              required
            />
          </Form.Group>
          <Form.Group controlId="formBasicAddress">
            <Form.Label>Address</Form.Label>
            <Form.Control
              onChange={(e) => setAddress(e.target.value)}
              value={address}
              type="address"
              placeholder="Address"
              required
            />
          </Form.Group>
          <Form.Group controlId="formBasicAddress">
            <Form.Label>What is your hobby?</Form.Label>
            <Form.Control
              onChange={(e) => setAnswer(e.target.value)}
              value={answer}
              type="answer"
              placeholder="Answer"
              required
            />
          </Form.Group>
          <Button className="mt-3" variant="success" type="submit">
            Register
          </Button>
          <p className="mt-2" style={{ fontFamily: "'poppins', sans-serif" }}>
            <span>Already registered</span>{" "}
            <span>
              <Link to="/login">Login here</Link>
            </span>
          </p>
        </Form>
      </div>
    </Layout>
  );
};

export default RegistrationPage;
