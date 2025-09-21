import React from 'react';
import LoginForm from './pages/Login';
import MainLayout from './components/MainLayout';
import { useAuth } from './context/AuthContext';

function App() {
  const { isLoggedIn, login } = useAuth();

  if (!isLoggedIn) {
    return <LoginForm onLogin={login} />;
  }

  return (
    <MainLayout />
  );
}

export default App;
