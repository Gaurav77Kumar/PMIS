import React from "react";
import {
  Calendar,
  Building,
  FileText,
  CheckCircle,
  Clock,
  XCircle,
  AlertCircle,
} from "lucide-react";

const ApplicationDashboard = ({ applications }) => {
  const getStatusIcon = (status) => {
    switch (status) {
      case "Applied":
        return <FileText className="w-5 h-5 text-blue-500" />;
      case "Under Review":
        return <Clock className="w-5 h-5 text-yellow-500" />;
      case "Selected":
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case "Rejected":
        return <XCircle className="w-5 h-5 text-red-500" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Applied":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "Under Review":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "Selected":
        return "bg-green-100 text-green-800 border-green-200";
      case "Rejected":
        return "bg-red-100 text-red-800 border-red-200";
      default:
        return "";
    }
  };

  if (applications.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Application Dashboard
          </h1>
          <p className="text-gray-600">Track your internship applications</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-12 text-center">
          <AlertCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            No Applications Yet
          </h3>
          <p className="text-gray-600">
            Start applying to internships from the recommendations page to see
            them here.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Application Dashboard
        </h1>
        <p className="text-gray-600">Track your internship applications</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {applications.map((application) => (
          <div
            key={application.id}
            className="bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {application.internshipTitle}
                  </h3>
                  <div className="flex items-center text-gray-600 mb-3">
                    <Building className="w-4 h-4 mr-2 text-gray-400" />
                    <span className="text-sm">{application.company}</span>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <div className="flex items-center text-gray-600 mb-2">
                  <Calendar className="w-4 h-4 mr-2 text-gray-400" />
                  <span className="text-sm">
                    Applied on{" "}
                    {new Date(application.dateApplied).toLocaleDateString()}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span
                  className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(
                    application.status
                  )}`}
                >
                  <span className="mr-2">{getStatusIcon(application.status)}</span>
                  {application.status}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApplicationDashboard;
