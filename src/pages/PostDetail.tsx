import React from 'react';
import { useParams, Link } from 'react-router-dom';

const PostDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const posts: { [key: number]: any } = {
    1: {
      title: 'Getting Started with React',
      content: `
        <p>React is a powerful JavaScript library for building user interfaces. It was developed by Facebook and has become one of the most popular choices for web development.</p>
        <h2>What is React?</h2>
        <p>React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called "components."</p>
        <h2>Key Concepts</h2>
        <ul>
          <li><strong>Components:</strong> Building blocks of React applications</li>
          <li><strong>Props:</strong> Read-only data passed to components</li>
          <li><strong>State:</strong> Mutable data that affects component rendering</li>
          <li><strong>Hooks:</strong> Functions that let you use state and other React features</li>
        </ul>
        <h2>Getting Started</h2>
        <p>To get started with React, you'll need Node.js installed on your system. Then you can create a new React application using Create React App.</p>
      `,
      date: '2025-01-15',
      author: 'John Doe'
    },
    2: {
      title: 'TypeScript Best Practices',
      content: `
        <p>TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.</p>
        <h2>Why Use TypeScript?</h2>
        <p>TypeScript offers several advantages over plain JavaScript:</p>
        <ul>
          <li>Static type checking</li>
          <li>Better IDE support</li>
          <li>Improved code documentation</li>
          <li>Enhanced refactoring capabilities</li>
        </ul>
        <h2>Best Practices</h2>
        <p>When working with TypeScript, follow these best practices to write clean and maintainable code.</p>
      `,
      date: '2025-01-10',
      author: 'Jane Smith'
    },
    3: {
      title: 'Modern CSS Techniques',
      content: `
        <p>CSS has evolved significantly over the years, introducing powerful new features that make styling more efficient and maintainable.</p>
        <h2>Modern Layout Techniques</h2>
        <p>Flexbox and Grid have revolutionized how we create layouts in CSS.</p>
        <h2>CSS Custom Properties</h2>
        <p>Variables in CSS allow for more dynamic and maintainable stylesheets.</p>
      `,
      date: '2025-01-05',
      author: 'Mike Johnson'
    }
  };

  const post = posts[parseInt(id || '1')];

  if (!post) {
    return (
      <div className="flex-1 py-8">
        <div className="max-w-4xl mx-auto px-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Post Not Found</h1>
          <p className="text-gray-600 mb-6">The post you're looking for doesn't exist.</p>
          <Link to="/" className="inline-block text-blue-500 font-medium hover:text-blue-600 transition-colors duration-300">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 py-8">
      <div className="max-w-4xl mx-auto px-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">{post.title}</h1>
        <div className="flex gap-4 mb-8 text-sm text-gray-500 border-b border-gray-200 pb-4">
          <span className="post-date">{post.date}</span>
          <span className="post-author">by {post.author}</span>
        </div>
        <div 
          className="prose prose-lg max-w-none text-gray-600 leading-relaxed mb-12"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        <Link 
          to="/" 
          className="inline-block text-blue-500 font-medium hover:text-blue-600 transition-colors duration-300 px-4 py-2 border-2 border-blue-500 rounded-md hover:bg-blue-500 hover:text-white"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
};

export default PostDetail;
