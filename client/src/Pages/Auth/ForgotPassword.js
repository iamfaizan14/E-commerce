import React from "react";
import { Form, Button } from "react-bootstrap";
import "./login.css";
import Layout from "../../Components/Layout/Layout";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/auth/forgot-password`,
        {
          email,
          newPassword,
          answer,
        }
      );
      toast.success(res.data.message);
    } catch (error) {
      toast.error("something went wrong");
    }
    setEmail("");
    setNewPassword("");
    setAnswer("");
    navigate("/login");
  };
  return (
    <Layout title="Forgot password E-com">
      <div className="login-container mt-5">
        <h1>Reset Password</h1>
        <Form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter email"
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>New Password</Form.Label>
            <Form.Control
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              type="password"
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group controlId="formBasicAnswer">
            <Form.Label>What is your hobby?</Form.Label>
            <Form.Control
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              type="text"
              placeholder="Secret answer"
            />
          </Form.Group>

          <Button className="mt-3" variant="success" type="submit">
            Reset password
          </Button>
        </Form>
      </div>
    </Layout>
  );
};

export default ForgotPassword;
