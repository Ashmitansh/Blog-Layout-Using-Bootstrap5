import React from 'react';
import { Search, Tag, Users, Mail } from 'lucide-react';

const Sidebar: React.FC = () => {
  const categories = [
    { name: 'Technology', count: 12 },
    { name: 'Lifestyle', count: 8 },
    { name: 'Travel', count: 6 },
    { name: 'Food', count: 4 },
    { name: 'Health', count: 7 },
    { name: 'Business', count: 5 }
  ];

  const tags = [
    'React', 'JavaScript', 'CSS', 'Design', 'Travel', 'Food', 'Health', 'Business'
  ];

  const recentPosts = [
    {
      title: 'Getting Started with React Hooks',
      date: 'Dec 10, 2024',
      image: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      title: 'Modern CSS Techniques',
      date: 'Dec 8, 2024',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      title: 'Travel Photography Tips',
      date: 'Dec 5, 2024',
      image: 'https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
  ];

  return (
    <div className="col-lg-4">
      {/* Categories Widget */}
      <div className="sidebar-widget">
        <h5 className="fw-bold mb-3">Categories</h5>
        <ul className="list-unstyled">
          {categories.map((category, index) => (
            <li key={index} className="mb-2">
              <a 
                href="#" 
                className="text-decoration-none d-flex justify-content-between align-items-center"
              >
                <span>{category.name}</span>
                <span className="badge bg-secondary">{category.count}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Recent Posts Widget */}
      <div className="sidebar-widget">
        <h5 className="fw-bold mb-3">Recent Posts</h5>
        {recentPosts.map((post, index) => (
          <div key={index} className="d-flex mb-3">
            <img 
              src={post.image} 
              alt={post.title}
              className="rounded me-3"
              style={{ width: '60px', height: '60px', objectFit: 'cover' }}
            />
            <div>
              <h6 className="mb-1">
                <a href="#" className="text-decoration-none text-dark">{post.title}</a>
              </h6>
              <small className="text-muted">{post.date}</small>
            </div>
          </div>
        ))}
      </div>

      {/* Tags Widget */}
      <div className="sidebar-widget">
        <h5 className="fw-bold mb-3">
          <Tag size={20} className="me-2" />
          Tags
        </h5>
        <div className="d-flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <a 
              key={index}
              href="#" 
              className="badge bg-light text-decoration-none text-dark border"
              style={{ padding: '8px 12px' }}
            >
              {tag}
            </a>
          ))}
        </div>
      </div>

      {/* Newsletter Widget */}
      <div className="sidebar-widget bg-primary text-white">
        <div className="text-center">
          <Mail size={48} className="mb-3" />
          <h5 className="fw-bold mb-3">Subscribe to Newsletter</h5>
          <p className="mb-3">Get the latest articles and insights delivered to your inbox.</p>
          <form>
            <div className="mb-3">
              <input 
                type="email" 
                className="form-control" 
                placeholder="Enter your email"
                required
              />
            </div>
            <button type="submit" className="btn btn-light w-100">
              Subscribe Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;