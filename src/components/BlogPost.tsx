import React from 'react';
import { Link } from 'react-router-dom';

interface BlogPostProps {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  author: string;
}

const BlogPost: React.FC<BlogPostProps> = ({ id, title, excerpt, date, author }) => {
  return (
    <article className="bg-white rounded-lg p-8 mb-8 shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
      <div className="post-content">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          <Link to={`/post/${id}`} className="hover:text-blue-500 transition-colors duration-300">
            {title}
          </Link>
        </h2>
        <div className="flex gap-4 mb-4 text-sm text-gray-500">
          <span className="post-date">{date}</span>
          <span className="post-author">by {author}</span>
        </div>
        <p className="text-gray-600 leading-relaxed mb-6">{excerpt}</p>
        <Link 
          to={`/post/${id}`} 
          className="inline-block text-blue-500 font-medium hover:text-blue-600 transition-colors duration-300"
        >
          Read More
        </Link>
      </div>
    </article>
  );
};

export default BlogPost;
