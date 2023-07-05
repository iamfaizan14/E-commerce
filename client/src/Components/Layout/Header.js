import React from "react";
import { Link, NavLink } from "react-router-dom";
import { AiFillShop } from "react-icons/ai";
import "./header.css";
import { useAuth } from "../../context/AuthProvider";
import { toast } from "react-hot-toast";

const Header = () => {
  const [auth, setAuth] = useAuth();
  const handleLogout = () => {
    toast.success("user logged out successfully");
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand p-2" to="/">
          <AiFillShop /> E-commerce app
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto px-2">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category">
                Category
              </Link>
            </li>

            {!auth.user ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/register">
                    Register
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item dropdown">
                  <NavLink
                    className="nav-link dropdown-toggle"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {auth?.user?.name}
                  </NavLink>
                  <ul className="dropdown-menu">
                    <li>
                      <Link
                        to={`/dashboard/${
                          auth?.user?.role === 1 ? "admin" : "user"
                        }`}
                        className="dropdown-item"
                      >
                        Dashboard
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={handleLogout}
                        className="dropdown-item"
                        to="/login"
                      >
                        Logout
                      </Link>
                    </li>
                  </ul>
                </li>
              </>
            )}

            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">
                Cart(0)
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
