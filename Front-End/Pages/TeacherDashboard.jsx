import React from 'react';

export const TeacherDashboard = () => {
  return (
    <div className="p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-semibold mb-4">Teacher Dashboard</h2>
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-gray-200 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Upload Materials</h3>
          <p className="text-gray-700">Add course materials and assignments for students.</p>
        </div>
        <div className="bg-gray-200 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Class Management</h3>
          <p className="text-gray-700">Manage your classroom sessions and monitor student progress.</p>
        </div>
      </div>
    </div>
  );
};
