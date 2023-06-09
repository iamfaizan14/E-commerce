import React from "react";
import { NavLink } from "react-router-dom";

const AdminMenu = () => {
  return (
    <>
      <div className="text-center">
        <h3>Admin Panel</h3>
        <div className="list-group">
          <NavLink
            to="/dashboard/admin/create-category"
            className="list-group-item list-group-item-action"
          >
            Create category
          </NavLink>
          <NavLink
            to="/dashboard/admin/create-product"
            className="list-group-item list-group-item-action"
          >
            Create products
          </NavLink>
          <NavLink
            to="/dashboard/admin/users"
            className="list-group-item list-group-item-action"
          >
            Users
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default AdminMenu;
