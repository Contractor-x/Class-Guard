import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center text-white">
        <h1 className="text-2xl font-semibold">Class Guard</h1>
        <div>
          <Link to="/" className="px-4 py-2 hover:bg-blue-500 rounded">Home</Link>
          <Link to="/admin" className="px-4 py-2 hover:bg-blue-500 rounded">Admin</Link>
          <Link to="/teacher" className="px-4 py-2 hover:bg-blue-500 rounded">Teacher</Link>
          <Link to="/student" className="px-4 py-2 hover:bg-blue-500 rounded">Student</Link>
        </div>
      </div>
    </nav>
  );
};
