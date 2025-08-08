import React from 'react';

const SuccessPage = ({ reset }) => {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">🎉 Submission Complete!</h2>
      <p className="mb-6">Thank you for completing the onboarding process.</p>
      <button onClick={reset} className="btn bg-[#C3FC68] rounded-full text-[#262626] font-bold cursor-pointer hover:bg-[#262626] hover:text-[#C3FC68] px-10 py-2 rounded mt-4 transition-all duration-300">Start Over</button>
    </div>
  );
};

export default SuccessPage;
