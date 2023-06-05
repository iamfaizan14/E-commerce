import React from "react";
import Layout from "../Components/Layout/Layout";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div>
      <Layout title="Page not found">
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-6 offset-md-3 text-center">
              <h1>404 - Page Not Found</h1>
              <p>The page you are looking for does not exist.</p>
              <Link to="/">
                <button className="btn btn-secondary">Go back</button>
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default PageNotFound;
