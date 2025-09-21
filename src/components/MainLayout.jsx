import React, { useState } from "react";
import Navbar from "./Navbar";  
import InternshipRecommendations from "../pages/InternshipRecommendation";  
import ProfileDashboard from "../pages/ProfileDashBoard";  
import ApplicationDashboard from "../pages/ApplicationDashboard";  


const MainLayout = ({ user, applications, onUpdateUser, onApply, onLogout }) => {
  const [activeTab, setActiveTab] = React.useState('recommendations');
  
  const renderContent = () => {
    switch (activeTab) {
      case 'profile':
        return <ProfileDashboard user={user} onUpdateUser={onUpdateUser} />;
      case 'applications':
        return <ApplicationDashboard applications={applications} />;
      case 'recommendations':
      default:
        return (
          <InternshipRecommendations
            applications={applications}
            onApply={onApply}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar
        activeTab={activeTab}
        onTabChange={setActiveTab}
        onLogout={onLogout}
      />
      <main>{renderContent()}</main>
    </div>
  );
};

export default MainLayout;
