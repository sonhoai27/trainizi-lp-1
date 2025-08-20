import React from 'react';

const Blog = () => {
  const blogPosts = [
    {
      title: "The Future of AI-Powered Microlearning",
      excerpt: "Exploring how artificial intelligence is revolutionizing the way we learn and retain information in bite-sized formats.",
      date: "December 15, 2024",
      category: "AI & Technology",
      readTime: "5 min read",
      image: "https://via.placeholder.com/400x250/6366f1/ffffff?text=AI+Learning"
    },
    {
      title: "Cultural Adaptation in Global Training Programs",
      excerpt: "How localization and cultural sensitivity can dramatically improve learning outcomes across different regions.",
      date: "December 10, 2024",
      category: "Enterprise Learning",
      readTime: "7 min read",
      image: "https://via.placeholder.com/400x250/8b5cf6/ffffff?text=Cultural+Learning"
    },
    {
      title: "Measuring ROI in Corporate Learning",
      excerpt: "A comprehensive guide to tracking and demonstrating the business impact of your learning and development initiatives.",
      date: "December 5, 2024",
      category: "Business Impact",
      readTime: "6 min read",
      image: "https://via.placeholder.com/400x250/06b6d4/ffffff?text=ROI+Metrics"
    },
    {
      title: "The Science Behind Adaptive Learning",
      excerpt: "Understanding the cognitive science and machine learning principles that make personalized education possible.",
      date: "November 28, 2024",
      category: "Learning Science",
      readTime: "8 min read",
      image: "https://via.placeholder.com/400x250/10b981/ffffff?text=Learning+Science"
    },
    {
      title: "Mobile Learning Trends for 2025",
      excerpt: "Key trends shaping the future of mobile learning and how organizations can prepare for the next evolution.",
      date: "November 20, 2024",
      category: "Trends",
      readTime: "4 min read",
      image: "https://via.placeholder.com/400x250/f59e0b/ffffff?text=Mobile+Trends"
    },
    {
      title: "Building Engaging Microlearning Content",
      excerpt: "Best practices for creating bite-sized learning experiences that stick and drive real behavior change.",
      date: "November 15, 2024",
      category: "Content Strategy",
      readTime: "6 min read",
      image: "https://via.placeholder.com/400x250/ef4444/ffffff?text=Content+Strategy"
    }
  ];

  const categories = ["All", "AI & Technology", "Enterprise Learning", "Business Impact", "Learning Science", "Trends", "Content Strategy"];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-framer-light-purple py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl text-black mb-6">
            Trainizi Blog
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Insights, research, and best practices on AI-powered learning, educational technology, and the future of training.
          </p>
          <div className="max-w-md mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full py-3 px-4 pr-12 rounded-lg focus:outline-none focus:ring-2 focus:ring-framer-purple"
              />
              <svg className="absolute right-4 top-3 w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`py-2 px-4 rounded-full transition-colors duration-200 ${
                  index === 0 
                    ? 'bg-framer-purple text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <span className="bg-framer-purple text-white px-3 py-1 rounded-full text-sm">Featured</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={blogPosts[0].image} 
                alt={blogPosts[0].title}
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
            <div>
              <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                <span className="bg-framer-light-purple text-framer-purple px-2 py-1 rounded">
                  {blogPosts[0].category}
                </span>
                <span>{blogPosts[0].date}</span>
                <span>{blogPosts[0].readTime}</span>
              </div>
              <h2 className="text-3xl text-black mb-4">{blogPosts[0].title}</h2>
              <p className="text-lg text-gray-600 mb-6">{blogPosts[0].excerpt}</p>
              <a
                href="#"
                className="bg-framer-purple text-white py-3 px-6 rounded-lg hover:opacity-90 transition-opacity duration-200 inline-block"
              >
                Read Full Article
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl text-black mb-4">Recent Articles</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Stay up to date with the latest insights and research in AI-powered learning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <article key={index} className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-200">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3 text-sm text-gray-500">
                    <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                      {post.category}
                    </span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl text-black mb-3 hover:text-framer-purple transition-colors duration-200">
                    <a href="#">{post.title}</a>
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{post.date}</span>
                    <a
                      href="#"
                      className="text-framer-purple hover:underline text-sm"
                    >
                      Read more →
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-framer-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl text-white mb-4">
            Stay Updated with Our Latest Insights
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Get the latest articles, research, and industry insights delivered to your inbox.
          </p>
          <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-black focus:outline-none"
              required
            />
            <button
              type="submit"
              className="bg-framer-purple text-white py-3 px-6 rounded-lg hover:opacity-90 transition-opacity duration-200 whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
          <p className="text-gray-400 text-sm mt-4">
            No spam, unsubscribe at any time.
          </p>
        </div>
      </section>

      {/* Load More */}
      <section className="py-16 bg-white">
        <div className="text-center">
          <button className="bg-transparent text-framer-purple py-3 px-8 rounded-lg border border-framer-purple hover:bg-framer-purple hover:text-white transition-colors duration-200">
            Load More Articles
          </button>
        </div>
      </section>
    </main>
  );
};

export default Blog;