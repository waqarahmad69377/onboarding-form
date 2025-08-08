import React from 'react';

const SuccessPage = ({ reset }) => {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">🎉 Submission Complete!</h2>
      <p className="mb-6">Thank you for completing the onboarding process.</p>
      <button onClick={reset} className="btn">Start Over</button>
    </div>
  );
};

export default SuccessPage;
