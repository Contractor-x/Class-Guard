// src/pages/AdminDashboard.jsx
import React, { useState, useEffect } from 'react';

const AdminDashboard = () => {
  const [permitted, setPermitted] = useState(false);

  useEffect(() => {
    // Call the API to check if the user has permission to access the Admin Dashboard
    const checkPermission = async () => {
      const response = await fetch('/api/check-permission', {
        method: 'POST',
        body: JSON.stringify({ resource: 'admin-dashboard' }),
        headers: { 'Content-Type': 'application/json' },
      });

      const data = await response.json();
      setPermitted(data.permitted); // true or false
    };

    checkPermission();
  }, []);

  if (!permitted) {
    return <p>You do not have permission to access this page.</p>;
  }

  return (
    <div>
      <h1>Admin Dashboard</h1>
      {/* Admin Dashboard content goes here */}
    </div>
  );
};

export default AdminDashboard;
