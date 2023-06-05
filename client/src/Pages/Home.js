import React from "react";
import Layout from "../Components/Layout/Layout";
import { useAuth } from "../context/AuthProvider";

const Home = () => {
  const [auth, setAuth]=useAuth()
  return (
    <div>
      <Layout title="Best offers - e-com">
        <h1>Home Page</h1>
        <pre>{JSON.stringify(auth, null,4)}</pre>
      </Layout>
    </div>
  );
};

export default Home;
