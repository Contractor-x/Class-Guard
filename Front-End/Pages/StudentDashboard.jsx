import React from 'react';

export const StudentDashboard = () => {
  return (
    <div className="p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-semibold mb-4">Student Dashboard</h2>
      <div className="grid grid-cols-1 gap-6">
        <div className="bg-gray-200 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Access Materials</h3>
          <p className="text-gray-700">View and download course materials from your enrolled classes.</p>
        </div>
        <div className="bg-gray-200 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Submit Assignments</h3>
          <p className="text-gray-700">Submit your assignments and track your progress.</p>
        </div>
      </div>
    </div>
  );
};
