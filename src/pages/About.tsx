import React from 'react';

const About: React.FC = () => {
  return (
    <div className="flex-1 py-8">
      <div className="max-w-4xl mx-auto px-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">About This Blog</h1>
        <div className="space-y-6 text-gray-600 leading-relaxed">
          <p className="text-lg">
            Welcome to my personal blog! This is a space where I share my thoughts, 
            experiences, and knowledge about web development, programming, and technology.
          </p>
          <p className="text-lg">
            I'm passionate about creating clean, efficient, and user-friendly applications. 
            Through this blog, I aim to help others learn and grow in their development journey.
          </p>
          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Topics I Write About</h2>
          <ul className="space-y-3">
            <li className="bg-gray-100 p-4 rounded-md border-l-4 border-blue-500">
              React and modern JavaScript frameworks
            </li>
            <li className="bg-gray-100 p-4 rounded-md border-l-4 border-blue-500">
              TypeScript and type-safe development
            </li>
            <li className="bg-gray-100 p-4 rounded-md border-l-4 border-blue-500">
              CSS and responsive design
            </li>
            <li className="bg-gray-100 p-4 rounded-md border-l-4 border-blue-500">
              Web performance optimization
            </li>
            <li className="bg-gray-100 p-4 rounded-md border-l-4 border-blue-500">
              Best practices and design patterns
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
