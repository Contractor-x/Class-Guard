import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components';
import {
  Login,
  AdminDashboard,
  StudentDashboard,
  TeacherDashboard,
} from './Pages';

const App = () => {
  return (
    <Router>
      <Navbar />
      <main style={{ padding: '2rem' }}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/student" element={<StudentDashboard />} />
          <Route path="/teacher" element={<TeacherDashboard />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
