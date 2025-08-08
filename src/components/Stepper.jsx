import React from 'react';

const Stepper = ({ currentStep, steps, goToStep, allowFuture = false }) => {
  return (
    <div className="flex flex-wrap justify-center mt-6 gap-4">
      {steps.map((label, index) => {
        const isActive = index === currentStep;
        const isClickable = allowFuture || index <= currentStep;

        return (
          <div key={label} className="flex flex-col items-center space-y-1">
            <button
              onClick={() => isClickable && goToStep(index)}
              disabled={!isClickable}
              className={`rounded-full w-9 h-9 flex items-center justify-center text-sm font-bold transition-all duration-300
                ${isActive
                  ? 'bg-blue-600 text-white scale-110 shadow-lg'
                  : isClickable
                  ? 'bg-gray-300 text-gray-800 hover:bg-blue-400 hover:text-white'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
              title={label}
            >
              {index + 1}
            </button>
            <span className="text-xs text-center text-white">{label}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Stepper;
