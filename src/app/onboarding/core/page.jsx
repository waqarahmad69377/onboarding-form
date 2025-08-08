'use client';

import React from 'react';
import Wizard from '@/components/Wizard';

import Image from 'next/image';

const CoreOnboarding = () => {
  return (
    <div className="min-h-screen 3xl:p-20 2xl:p-20 xl:p-20 lg:p-20 bg-[#262626] text-white">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        {/* logo and title section */}
        <div className="flex justify-center">
          <Image
            src="/assets/images/brandnorth.webp"
            alt="Universal Treatment Facility Logo"
            width={110}
            height={110}
            className=""
          />
        </div>
        {/* Header Section */}
        <h1 className="text-4xl font-bold text-[#C3FC68]">Universal Treatment Facility Wizard</h1>
        <p className="text-lg text-gray-300">Begin your onboarding process by following
          the steps below.</p>
      </div>
      {/* Render the Wizard component */}
      <Wizard />
    </div>
  );
};

export default CoreOnboarding;
