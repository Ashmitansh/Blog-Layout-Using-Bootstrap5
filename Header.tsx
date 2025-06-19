import React from 'react';
import { Search, Menu } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container">
        <a className="navbar-brand" href="#">
          BlogHub
        </a>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <Menu size={24} />
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link active" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Technology</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Lifestyle</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Travel</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact</a>
            </li>
          </ul>
          
          <form className="d-flex">
            <div className="input-group">
              <input 
                className="form-control" 
                type="search" 
                placeholder="Search articles..." 
                aria-label="Search"
              />
              <button className="btn btn-outline-light" type="submit">
                <Search size={18} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Header;