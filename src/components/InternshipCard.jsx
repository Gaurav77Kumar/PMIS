import React from 'react';
import { MapPin, Calendar, CheckCircle } from 'lucide-react';

const InternshipCard = ({ internship, onApply, isApplied }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 overflow-hidden">
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{internship.title}</h3>
            <p className="text-lg font-medium text-blue-600">{internship.company}</p>
          </div>
          <div className="text-right">
            <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
              {internship.stipend}
            </span>
          </div>
        </div>

        <div className="space-y-3 mb-4">
          <div className="flex items-center text-gray-600">
            <MapPin className="w-4 h-4 mr-2 text-gray-400" />
            <span className="text-sm">{internship.location}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Calendar className="w-4 h-4 mr-2 text-gray-400" />
            <span className="text-sm">{internship.duration}</span>
          </div>
        </div>

        <p className="text-gray-700 text-sm mb-4 line-clamp-2">{internship.description}</p>

        <div className="mb-4">
          <p className="text-sm font-medium text-gray-900 mb-2">Requirements:</p>
          <div className="flex flex-wrap gap-2">
            {internship.requirements.slice(0, 3).map((skill, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-md"
              >
                {skill}
              </span>
            ))}
            {internship.requirements.length > 3 && (
              <span className="px-2 py-1 bg-gray-50 text-gray-600 text-xs font-medium rounded-md">
                +{internship.requirements.length - 3} more
              </span>
            )}
          </div>
        </div>

        <button
          onClick={() => onApply(internship.id)}
          disabled={isApplied}
          className={`w-full py-3 px-4 rounded-lg font-medium text-sm transition-all duration-200 ${
            isApplied
              ? 'bg-green-100 text-green-700 border border-green-200 cursor-not-allowed'
              : 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 shadow-md hover:shadow-lg'
          }`}
        >
          {isApplied ? (
            <span className="flex items-center justify-center">
              <CheckCircle className="w-4 h-4 mr-2" />
              Applied
            </span>
          ) : (
            'Apply Now'
          )}
        </button>
      </div>
    </div>
  );
};

export default InternshipCard;
