import React from 'react';

const ProgressBar = ({ currentStep, totalSteps }) => {
  const percentage = ((currentStep + 1) / totalSteps) * 100;

  return (
    <div className="w-full h-2 bg-gray-200 rounded overflow-hidden mt-6">
      <div
        className="h-full bg-[#C3FC68] transition-all duration-500"
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
