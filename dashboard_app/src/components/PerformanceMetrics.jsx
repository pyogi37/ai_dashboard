import React from "react";

const PerformanceMetrics = ({ metrics }) => {
  const calculatePercentage = (value) => Math.round(value * 100);

  return (
    <div className="mb-8">
      <h2 className="text-lg font-semibold text-center mb-2">
        Performance Metrics
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center items-center">
        <div className="bg-gray-800 p-4 shadow rounded-full relative flex flex-col justify-center items-center">
          <div className="progress-bar bg-teal-500 h-6 w-full rounded-full">
            <div
              className="progress-indicator bg-teal-300 h-full rounded-full"
              style={{ width: `${calculatePercentage(metrics.accuracy)}%` }}
            ></div>
          </div>
          <div className="progress-label text-center mt-2 text-gray-600">
            {calculatePercentage(metrics.accuracy)}% Accuracy
          </div>
        </div>
        <div className="bg-gray-800 p-4 shadow rounded-full relative flex flex-col justify-center items-center">
          <div className="progress-bar bg-blue-500 h-6 w-full rounded-full">
            <div
              className="progress-indicator bg-blue-300 h-full rounded-full"
              style={{ width: `${calculatePercentage(metrics.precision)}%` }}
            ></div>
          </div>
          <div className="progress-label text-center mt-2 text-gray-600">
            {calculatePercentage(metrics.precision)}% Precision
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceMetrics;
