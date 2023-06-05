import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Helmet } from "react-helmet";
import { Toaster } from "react-hot-toast";

const Layout = (props) => {
  return (
    <div>
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="description" content={props.description} />
        <meta name="keywords" content={props.keywords} />
        <meta name="author" content={props.author} />
        <title>{props.title}</title>
      </Helmet>
      <Header />
      <main style={{padding:"70px", minHeight: "105vh" }}>
        <Toaster /> {props.children}
      </main>
      <Footer />
    </div>
  );
};
Layout.defaultProps = {
  title: "E-commerce app - shop now",
  description: "E-commerce app",
};

export default Layout;
