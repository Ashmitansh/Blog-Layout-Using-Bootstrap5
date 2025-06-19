import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import BlogCard from './components/BlogCard';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

function App() {
  const blogPosts = [
    {
      id: 1,
      title: "The Rise of Sustainable Technology",
      excerpt: "Discover how green technology is revolutionizing industries and creating a more sustainable future for our planet.",
      author: "Sarah Johnson",
      date: "Dec 12, 2024",
      category: "Technology",
      image: "https://images.pexels.com/photos/9028759/pexels-photo-9028759.jpeg?auto=compress&cs=tinysrgb&w=600",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Minimalist Living: Less is More",
      excerpt: "Learn how embracing minimalism can lead to a more fulfilling and stress-free lifestyle in our modern world.",
      author: "Michael Chen",
      date: "Dec 10, 2024",
      category: "Lifestyle",
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600",
      readTime: "4 min read"
    },
    {
      id: 3,
      title: "Hidden Gems of Southeast Asia",
      excerpt: "Explore breathtaking destinations off the beaten path that offer authentic cultural experiences and natural beauty.",
      author: "Emma Williams",
      date: "Dec 8, 2024",
      category: "Travel",
      image: "https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=600",
      readTime: "7 min read"
    },
    {
      id: 4,
      title: "The Art of Mindful Cooking",
      excerpt: "Transform your relationship with food by practicing mindfulness in the kitchen and creating nourishing meals.",
      author: "David Rodriguez",
      date: "Dec 6, 2024",
      category: "Food",
      image: "https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=600",
      readTime: "6 min read"
    },
    {
      id: 5,
      title: "Building Healthy Habits That Stick",
      excerpt: "Science-backed strategies for creating lasting positive changes in your daily routine and overall well-being.",
      author: "Dr. Lisa Park",
      date: "Dec 4, 2024",
      category: "Health",
      image: "https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=600",
      readTime: "8 min read"
    },
    {
      id: 6,
      title: "The Future of Remote Work",
      excerpt: "How digital transformation is reshaping the workplace and creating new opportunities for flexible careers.",
      author: "Alex Thompson",
      date: "Dec 2, 2024",
      category: "Business",
      image: "https://images.pexels.com/photos/4065876/pexels-photo-4065876.jpeg?auto=compress&cs=tinysrgb&w=600",
      readTime: "5 min read"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      
      <div className="container my-5">
        <div className="row">
          <div className="col-lg-8">
            <div className="mb-5">
              <h2 className="fw-bold mb-4">Latest Articles</h2>
              <div className="row">
                {blogPosts.map((post) => (
                  <div key={post.id} className="col-md-6 mb-4">
                    <BlogCard post={post} />
                  </div>
                ))}
              </div>
            </div>
            
            <div className="d-flex justify-content-center">
              <nav>
                <ul className="pagination">
                  <li className="page-item disabled">
                    <a className="page-link" href="#" tabIndex={-1}>Previous</a>
                  </li>
                  <li className="page-item active">
                    <a className="page-link" href="#">1</a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">2</a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">3</a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">Next</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          
          <Sidebar />
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

export default App;