import React, { useState } from 'react';
import LoginForm from './pages/Login';
import MainLayout from './components/MainLayout';
import { dummyUser, dummyApplications, internships } from './data/dummyData';

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [user, setUser] = useState(dummyUser);
  const [applications, setApplications] = useState(dummyApplications);

  // Login handler
  const handleLogin = (email, name) => {
    setUser(prev => ({ ...prev, email, name }));
    setIsLoggedIn(true);
  };

  // Logout handler
  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(dummyUser);
    setApplications(dummyApplications);
  };

  // Update user profile handler
  const handleUpdateUser = (updatedUser) => {
    setUser(updatedUser);
  };

  // Apply for an internship
  const handleApply = (internshipId) => {
    const internship = internships.find((i) => i.id === internshipId);
    if (!internship) return;

    const newApplication = {
      id: Date.now().toString(),
      internshipId,
      internshipTitle: internship.title,
      company: internship.company,
      dateApplied: new Date().toISOString().split('T')[0],
      status: 'Applied',
    };

    setApplications((prev) => [...prev, newApplication]);
  };

  if (!isLoggedIn) {
    return <LoginForm onLogin={handleLogin} />;
  }

  return (
    <MainLayout
      user={user}
      applications={applications}
      onUpdateUser={handleUpdateUser}
      onApply={handleApply}
      onLogout={handleLogout}
    />
  );
}

export default App;
