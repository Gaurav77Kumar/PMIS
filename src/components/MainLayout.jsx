import React, { useState } from "react";
import Navbar from "./Navbar";  
import InternshipRecommendations from "../pages/InternshipRecommendation";  
import ProfileDashboard from "../pages/ProfileDashBoard";  
import ApplicationDashboard from "../pages/ApplicationDashboard";  

import { useAuth } from "../context/AuthContext";

const MainLayout = () => {
  const [activeTab, setActiveTab] = React.useState('recommendations');
  const { user, applications, updateUser, applyForInternship, logout } = useAuth();
  const renderContent = () => {
    switch (activeTab) {
      case 'profile':
        return <ProfileDashboard user={user} onUpdateUser={updateUser} />;
      case 'applications':
        return <ApplicationDashboard applications={applications} />;
      case 'recommendations':
      default:
        return (
          <InternshipRecommendations
            applications={applications}
            onApply={applyForInternship}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar
        activeTab={activeTab}
        onTabChange={setActiveTab}
        onLogout={logout}
      />
      <main>{renderContent()}</main>
    </div>
  );
};

export default MainLayout;
