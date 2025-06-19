import React from 'react';
import { Heart, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mb-4">
            <h5 className="fw-bold mb-3">BlogHub</h5>
            <p className="mb-3">
              Your go-to destination for insightful articles, expert opinions, and trending topics. 
              We bring you the latest in technology, lifestyle, travel, and more.
            </p>
            <div className="social-links">
              <a href="#" className="text-white">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div className="col-lg-2 mb-4">
            <h6 className="fw-bold mb-3">Quick Links</h6>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">Home</a></li>
              <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">About</a></li>
              <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">Services</a></li>
              <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">Contact</a></li>
              <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div className="col-lg-2 mb-4">
            <h6 className="fw-bold mb-3">Categories</h6>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">Technology</a></li>
              <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">Lifestyle</a></li>
              <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">Travel</a></li>
              <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">Food</a></li>
              <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">Health</a></li>
            </ul>
          </div>
          
          <div className="col-lg-4 mb-4">
            <h6 className="fw-bold mb-3">Contact Info</h6>
            <div className="d-flex align-items-center mb-2">
              <MapPin size={16} className="me-2" />
              <span className="text-white-50">123 Blog Street, Content City, CC 12345</span>
            </div>
            <div className="d-flex align-items-center mb-2">
              <Phone size={16} className="me-2" />
              <span className="text-white-50">+1 (555) 123-4567</span>
            </div>
            <div className="d-flex align-items-center mb-2">
              <Mail size={16} className="me-2" />
              <span className="text-white-50">hello@bloghub.com</span>
            </div>
          </div>
        </div>
        
        <hr className="my-4" style={{ borderColor: 'rgba(255,255,255,0.1)' }} />
        
        <div className="row align-items-center">
          <div className="col-md-6">
            <p className="mb-0 text-white-50">
              © 2024 BlogHub. All rights reserved.
            </p>
          </div>
          <div className="col-md-6 text-md-end">
            <p className="mb-0 text-white-50">
              Made with <Heart size={16} className="text-danger mx-1" /> by BlogHub Team
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;