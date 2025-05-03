import React, { useState, useEffect } from 'react';

const TeacherDashboard = () => {
  const [permitted, setPermitted] = useState(false);

  useEffect(() => {
    const checkPermission = async () => {
      const response = await fetch('http://localhost:5000/api/check-permission', {
        method: 'POST',
        body: JSON.stringify({ resource: 'teacher-dashboard' }),
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
      <h1>Teacher Dashboard</h1>
      {/* Teacher Dashboard content goes here */}
    </div>
  );
};

export default TeacherDashboard;
