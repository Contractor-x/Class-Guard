// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AdminDashboard from './Pages/AdminDashboard';
import Login from './Pages/Login';
import StudentDashboard from './Pages/StudentDashboard';
import TeacherDashboard from './Pages/TeacherDashboard';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/admin-dashboard" component={AdminDashboard} />
        <Route path="/student-dashboard" component={StudentDashboard} />
        <Route path="/teacher-dashboard" component={TeacherDashboard} />
      </Switch>
    </Router>
  );
};

export default App;
