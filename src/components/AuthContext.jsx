import React, { createContext, useState, useContext } from 'react';
import { dummyUser, dummyApplications, internships } from '../data/dummyData';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(dummyUser);
  const [applications, setApplications] = useState(dummyApplications);

  const login = (email, name) => {
    setUser(prev => ({ ...prev, email, name }));
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
    // Reset to dummy data on logout for this example
    setUser(dummyUser);
    setApplications(dummyApplications);
  };

  const updateUser = (updatedUser) => {
    setUser(updatedUser);
  };

  const applyForInternship = (internshipId) => {
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

  const value = {
    isLoggedIn,
    user,
    applications,
    login,
    logout,
    updateUser,
    applyForInternship,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};