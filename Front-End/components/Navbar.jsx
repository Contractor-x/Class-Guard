// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    // Check if the user is an admin
    const checkAdminStatus = async () => {
      const response = await fetch('/api/check-admin');
      const data = await response.json();
      setIsAdmin(data.isAdmin);
    };

    checkAdminStatus();
  }, []);

  return (
    <nav>
      <Link to="/">Home</Link>
      {isAdmin && <Link to="/admin-dashboard">Admin Dashboard</Link>}
      <Link to="/student-dashboard">Student Dashboard</Link>
      <Link to="/teacher-dashboard">Teacher Dashboard</Link>
    </nav>
  );
};

export default Navbar;
