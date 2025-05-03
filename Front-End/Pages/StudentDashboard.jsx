import React, { useEffect, useState } from 'react';
import axios from 'axios';

const StudentDashboard = () => {
  const [accessAllowed, setAccessAllowed] = useState(null);

  useEffect(() => {
    const checkPermission = async () => {
      try {
        const response = await axios.post('http://localhost:5000/api/check-permission', {
          resource: 'student-dashboard',
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
  if (!accessAllowed) return <p>🚫 Access Denied to Student Dashboard</p>;

  return (
    <div>
      <h1> Student Dashboard</h1>
      <p>Welcome, Student. You're in.</p>
      {/* Student-specific content here */}
    </div>
  );
};

export default StudentDashboard;

