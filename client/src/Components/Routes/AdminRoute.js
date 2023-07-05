import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthProvider";
import { Outlet } from "react-router-dom";
import axios from "axios";
import Spinner from "../Spinner";

const AdminRoute = () => {
  const [status, setStatus] = useState(false);
  const [auth] = useAuth();
  useEffect(() => {
    const authCheck = async () => {
      const res = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/auth/admin-auth`
      );
      if (res.data.status) {
        setStatus(true);
      } else {
        setStatus(false);
      }
    };
    if (auth?.token) {
      authCheck();
    }
  }, [auth?.token]);
  return status ? <Outlet /> : <Spinner path="" />;
};

export default AdminRoute;
