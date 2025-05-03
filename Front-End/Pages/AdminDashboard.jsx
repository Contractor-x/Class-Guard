import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [accessAllowed, setAccessAllowed] = useState(null);

  useEffect(() => {
    const checkPermission = async () => {
      try {
        const response = await axios.post('http://localhost:5000/api/check-permission', {
          resource: 'admin-dashboard',
        });
        setAccessAllowed(response.data.permitted);
      } catch (error) {
        console.error('Permission check failed:', error);
        setAccessAllowed(false);
      }
    };

    checkPermission();
  }, []);

  if (accessAllowed === null) return <p>⏳ Checking permission...</p>;
  if (!accessAllowed) return <p>🚫 Access Denied to Admin Dashboard</p>;

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <p>Welcome, Admin. You have access.</p>
      {/* Admin-specific content here */}
    </div>
  );
};

export default AdminDashboard;
