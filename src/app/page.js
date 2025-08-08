'use client';

import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-700 via-blue-800 to-black text-white px-4">
      <div className="text-center space-y-6 bg-white/10 backdrop-blur-md p-10 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold">Universal Treatment Facility Wizard</h1>
        <p className="text-lg text-gray-200">Begin by selecting an onboarding path</p>

        <div className="space-y-4">
          <Link
            href="/onboarding/core"
            className="block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition"
          >
            🧩 Start Core Onboarding
          </Link>

          <Link
            href="/onboarding/sober-living"
            className="block bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded transition"
          >
            🏠 Sober Living Form
          </Link>

          <Link
            href="/onboarding/adwords"
            className="block bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded transition"
          >
            📱 AdWords Campaign Setup
          </Link>
        </div>
      </div>
    </main>
  );
}
