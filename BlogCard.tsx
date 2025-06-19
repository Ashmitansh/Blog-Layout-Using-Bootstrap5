import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  image: string;
  readTime: string;
}

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <div className="card h-100">
      <img 
        src={post.image} 
        className="card-img-top" 
        alt={post.title}
        style={{ height: '250px', objectFit: 'cover' }}
      />
      <div className="card-body d-flex flex-column">
        <div className="mb-2">
          <span className="category-badge">{post.category}</span>
        </div>
        <h5 className="card-title fw-bold">{post.title}</h5>
        <p className="card-text text-muted flex-grow-1">{post.excerpt}</p>
        
        <div className="d-flex justify-content-between align-items-center post-meta mt-auto">
          <div className="d-flex align-items-center">
            <User size={16} className="me-1" />
            <span className="me-3">{post.author}</span>
            <Calendar size={16} className="me-1" />
            <span>{post.date}</span>
          </div>
          <small className="text-muted">{post.readTime}</small>
        </div>
        
        <div className="mt-3">
          <a href="#" className="btn btn-outline-primary btn-sm">
            Read More <ArrowRight size={14} className="ms-1" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;