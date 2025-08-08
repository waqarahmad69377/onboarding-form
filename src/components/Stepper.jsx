import React from 'react';

const Stepper = ({ currentStep, steps, goToStep, allowFuture = false }) => {
  return (
    <div className="flex flex-wrap justify-center mt-6 gap-4">
      {steps.map((label, index) => {
        const isActive = index === currentStep;
        const isClickable = allowFuture || index <= currentStep;
        return (
          <div key={label} className="flex flex-col items-center space-y-1 w-20">
            <button
              onClick={() => isClickable && goToStep(index)}
              disabled={!isClickable}
              className={`rounded-full w-9 h-9 flex items-center justify-center text-sm font-bold transition-all duration-300
                ${isActive
                  ? 'bg-[#C3FC68] text-[#262626] scale-110 shadow-lg'
                  : isClickable
                  ? 'bg-[#C3FC68] text-gray-800 hover:bg-[#C3FC68]/50 cursor-pointer hover:text-white'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
              title={label}
            >
              {index + 1}
            </button>
            <span className="text-xs text-center text-[#C3FC68] font-bold text-wrap">{label}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Stepper;
