import React from 'react';

const Footer = () => {
    return (
        <div>
            <p className='text-center'><small>copyright of my news</small></p>
            <footer className="news-footer bg-secondary pt-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h3>About Us</h3>
            <p>We are a leading news source providing the latest news from around the world.</p>
          </div>
          <div className="col-md-4">
            <h3>Contact Us</h3>
            <p>123 Main St<br /> New York, NY 10001<br /> Phone: (123) 456-7890<br /> Email: info@news.com</p>
          </div>
          <div className="col-md-4">
            <h3>Follow Us</h3>
            <ul className="list-inline social-links">
              <li><a href="#"><i className="fa fa-facebook"></i></a></li>
              <li><a href="#"><i className="fa fa-twitter"></i></a></li>
              <li><a href="#"><i className="fa fa-instagram"></i></a></li>
              <li><a href="#"><i className="fa fa-youtube"></i></a></li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="text-center">
              <p>&copy; 2023 News Website. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>

        </div>
    );
};

export default Footer;