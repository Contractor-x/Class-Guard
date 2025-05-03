import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TeacherDashboard = () => {
  const [accessAllowed, setAccessAllowed] = useState(null);

  useEffect(() => {
    const checkPermission = async () => {
      try {
        const response = await axios.post('http://localhost:5000/api/check-permission', {
          resource: 'teacher-dashboard',
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
  if (!accessAllowed) return <p>🚫 Access Denied to Teacher Dashboard</p>;

  return (
    <div>
      <h1> Teacher Dashboard</h1>
      <p>Welcome, Teacher. You’re clear to proceed.</p>
      {/* Teacher-specific content here */}
    </div>
  );
};

export default TeacherDashboard;
