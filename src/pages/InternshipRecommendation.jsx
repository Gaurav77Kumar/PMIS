import React from "react";
import { internships } from "../data/dummyData";
import InternshipCard from "../components/InternshipCard";

const InternshipRecommendations = ({ applications, onApply }) => {
  const appliedIds = applications.map((app) => app.internshipId);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Recommended Internships
        </h1>
        <p className="text-gray-600">
          Discover exciting opportunities tailored for you
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {internships.map((internship) => (
          <InternshipCard
            key={internship.id}
            internship={internship}
            onApply={onApply}
            isApplied={appliedIds.includes(internship.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default InternshipRecommendations;
