import React from "react";
import { Form, Button } from "react-bootstrap";
import "./login.css";
import Layout from "../../Components/Layout/Layout";
import { Link } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../context/AuthProvider";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();
  const location=useLocation()
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/auth/login`,
        {
          email,
          password,
        }
      );
      if (res && res.data.success) {
        toast.success(res && res.data.message);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate(location.state||"/");
      } else {
        toast.error("Invalid credentials");
      }
    } catch (error) {
      toast.error("something went wrong");
    }
    setEmail("");
    setPassword("");
  };
  return (
    <Layout title="Login into your account">
      <div className="login-container mt-5">
        <h1>Login</h1>
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
            <Form.Label>Password</Form.Label>
            <Form.Control
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
            />
          </Form.Group>

          <Button className="mt-3" variant="success" type="submit">
            Login
          </Button>
          <p className="mt-3">
            <span
              style={{
                marginRight: "10px",
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              Forgot Password?
            </span>
            <span>
              <Link to="/forgot-password">click here to reset your password</Link>
            </span>
          </p>
          <p className="mt-3">
            <span
              style={{
                marginRight: "10px",
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              Don't have an account
            </span>
            <span>
              <Link to="/register">Register here</Link>
            </span>
          </p>
        </Form>
      </div>
    </Layout>
  );
};

export default LoginPage;
