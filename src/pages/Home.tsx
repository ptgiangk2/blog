import React from 'react';
import BlogPost from '../components/BlogPost';

const Home: React.FC = () => {
  const posts = [
    {
      id: 1,
      title: 'Getting Started with React',
      excerpt: 'Learn the basics of React and how to build your first component. This comprehensive guide covers everything you need to know to get started.',
      date: '2025-01-15',
      author: 'John Doe'
    },
    {
      id: 2,
      title: 'TypeScript Best Practices',
      excerpt: 'Discover the best practices for writing clean and maintainable TypeScript code. From type definitions to advanced patterns.',
      date: '2025-01-10',
      author: 'Jane Smith'
    },
    {
      id: 3,
      title: 'Modern CSS Techniques',
      excerpt: 'Explore modern CSS techniques including Flexbox, Grid, and custom properties. Take your styling skills to the next level.',
      date: '2025-01-05',
      author: 'Mike Johnson'
    }
  ];

  return (
    <div className="flex-1 py-8">
      <div className="max-w-6xl mx-auto px-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to My Blog</h1>
        <p className="text-lg text-gray-600 mb-12">
          Discover articles about web development, programming, and technology.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map(post => (
            <BlogPost key={post.id} {...post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
