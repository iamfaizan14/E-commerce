import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h4>About</h4>
            <p>
              At our online store, you'll find a wide range of products in
              various categories, including electronics, fashion, home goods,
              and more. We carefully curate our selection to ensure that we
              offer only the best products from reputable brands.
            </p>
          </div>
          <div className="col-md-4">
            <h4>Contact</h4>
            <p>
              Email: our.e-com@example.com
              <br />
              Phone: +91 7820963100
            </p>
          </div>
          <div className="col-md-4">
            <h4>Privacy Policy</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              mauris dolor, gravida a varius blandit, auctor eget purus.
            </p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <p>&copy; 2023 Tekisky Pvt. Ltd. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer