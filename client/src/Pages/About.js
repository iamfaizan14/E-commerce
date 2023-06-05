import React from "react";
import Layout from "../Components/Layout/Layout";
// import aboutImage from "../../public/images/aboutus.png";

const About = () => {
  return (
    <div>
      <Layout title='About us - e-com'>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img
                src="/aboutus.png"
                alt="About Us"
                className="img-fluid"
              />
            </div>
            <div className="col-md-6">
              <h1>About Us</h1>
              <p>
                Welcome to our e-commerce website! We are a team of passionate
                individuals who love bringing you the best products and shopping
                experience. Our mission is to provide high-quality products and
                exceptional customer service.
              </p>
              <p>
                At our online store, you'll find a wide range of products in
                various categories, including electronics, fashion, home goods,
                and more. We carefully curate our selection to ensure that we
                offer only the best products from reputable brands.
              </p>
              <p>
                We believe in providing a seamless shopping experience for our
                customers. Our website is designed to be user-friendly, making
                it easy for you to browse and find the items you're looking for.
                We also offer secure payment options and fast shipping to ensure
                your satisfaction.
              </p>
              <p>
                If you have any questions or need assistance, our customer
                support team is here to help. You can reach out to us through
                our contact page or by email or phone. We value your feedback
                and strive to continuously improve our services to better serve
                you.
              </p>
              <p>
                Thank you for choosing our e-commerce website. Happy shopping!
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default About;
