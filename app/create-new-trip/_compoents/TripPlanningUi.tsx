"use client";

import React from "react";

interface TripPlanningUiProps {
  loading: boolean;
  tripGenerated: boolean;
  onViewTrip: () => void;
  isFetchingFinalPlan: boolean;
}

const TripPlanningUi: React.FC<TripPlanningUiProps> = ({
  loading,
  tripGenerated,
  onViewTrip,
  isFetchingFinalPlan,
}) => {
  // Define custom keyframe animations within a <style> tag.
  // This makes the component self-contained.
  const customAnimationStyle = `
    @keyframes progress-local {
      from { width: 0%; }
      to { width: 100%; }
    }
    @keyframes bounce-slow-local {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
    }
  `;

  if (loading) {
    return (
      <>
        <style>{customAnimationStyle}</style>
        <div className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-lg border border-gray-200">
          {/* Paper Plane Icon */}
          <div className="mb-4">
            <svg
              className="w-16 h-16 text-orange-500"
              style={{ animation: 'bounce-slow-local 2s infinite ease-in-out' }} // Apply custom animation
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              />
            </svg>
          </div>

          {/* Loading Texts */}
          <p className="text-xl font-semibold text-gray-800 mb-2">
            Planning your dream trip...
          </p>
          <p className="text-sm text-gray-600 text-center max-w-sm mb-4">
            Gathering best destinations, activities, and travel details for you.
          </p>

          {/* Loading Bar */}
          <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
            <div
              className="bg-orange-500 h-2.5 rounded-full"
              style={{ animation: 'progress-local 3s ease-in-out forwards' }} // Apply custom animation
            ></div>
          </div>
        </div>
      </>
    );
  }

  if (tripGenerated) {
    return (
      <div className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-lg border border-gray-200">
        <button
          className="bg-orange-500 text-white px-8 py-3 rounded-full font-semibold shadow-md hover:bg-orange-600 transition-colors duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={onViewTrip}
          disabled={isFetchingFinalPlan}
        >
          {isFetchingFinalPlan ? "Generating..." : "Generate Trip"}
        </button>
      </div>
    );
  }

  return null;
};

export default TripPlanningUi;