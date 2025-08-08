'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#262626] text-white px-4">
      <div className="text-center space-y-6 bg-white/10 backdrop-blur-md p-10 rounded-lg shadow-lg">
        {/* Logo Section */}
        <div className="flex justify-center">
          <Image
            src="/assets/images/brandnorth.webp"
            alt="Universal Treatment Facility Logo"
            width={250}
            height={250}
            className=""
          />
        </div>
        <h1 className="text-4xl font-bold">Universal Treatment Facility Wizard</h1>
        <p className="text-lg text-gray-200">Begin by selecting an onboarding path</p>

        <div className="space-y-4 flex flex-row gap-4 justify-center">
          <Link
            href="/onboarding/core"
            className="block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition"
          >
            Start Core Onboarding
          </Link>

          <Link
            href="/onboarding/sober-living"
            className="block bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded transition"
          >
            Sober Living Form
          </Link>

          <Link
            href="/onboarding/adwords"
            className="block bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded transition"
          >
            AdWords Campaign
          </Link>
        </div>
      </div>
    </main>
  );
}
