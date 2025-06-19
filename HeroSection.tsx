import React from 'react';
import { ArrowRight, Calendar, User } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h1 className="display-4 fw-bold mb-4">
              Discover Amazing Stories & Ideas
            </h1>
            <p className="lead mb-4">
              Explore our collection of insightful articles, expert opinions, and trending topics 
              that matter to you. Stay informed and inspired with our curated content.
            </p>
            <button className="btn btn-primary btn-lg">
              Start Reading <ArrowRight className="ms-2" size={20} />
            </button>
          </div>
          <div className="col-lg-6">
            <div className="card featured-post text-white">
              <img 
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600" 
                className="card-img" 
                alt="Featured post"
                style={{ height: '400px', objectFit: 'cover' }}
              />
              <div className="card-img-overlay d-flex flex-column justify-content-end">
                <span className="category-badge mb-2 align-self-start">Technology</span>
                <h5 className="card-title fw-bold">The Future of Artificial Intelligence</h5>
                <p className="card-text">
                  Exploring how AI is transforming industries and shaping our digital future.
                </p>
                <div className="d-flex align-items-center post-meta">
                  <User size={16} className="me-1" />
                  <span className="me-3">John Doe</span>
                  <Calendar size={16} className="me-1" />
                  <span>Dec 15, 2024</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;