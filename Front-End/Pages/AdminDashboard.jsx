import React from 'react';

export const AdminDashboard = () => {
  return (
    <div className="p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-semibold mb-4">Admin Dashboard</h2>
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-gray-200 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Manage Users</h3>
          <p className="text-gray-700">Add, remove, and manage user roles (Teachers, Students).</p>
        </div>
        <div className="bg-gray-200 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Monitor Activity</h3>
          <p className="text-gray-700">View and track user interactions with the platform.</p>
        </div>
        <div className="bg-gray-200 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">System Settings</h3>
          <p className="text-gray-700">Configure system preferences and policies.</p>
        </div>
      </div>
    </div>
  );
};
