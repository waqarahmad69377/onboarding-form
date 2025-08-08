import React from 'react';
import { exportPDF } from '@/utils/pdfExport';
import { exportJSON, exportCSV, zipAndDownload } from '@/utils/exportAll';

const ReviewStep = ({ data = {}, back, next }) => {
  const { core = {}, eos = {}, digital = {}, technical = {}, services = {}, landing = {} } = data;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Review Your Information</h2>

      <div className="bg-white/10 p-4 rounded shadow mb-4">
        <h3 className="font-semibold text-lg">🏢 Basic Facility Info</h3>
        <p><strong>Company Name:</strong> {core.companyName || 'N/A'}</p>
      </div>

      <div className="bg-white/10 p-4 rounded shadow mb-4">
        <h3 className="font-semibold text-lg">📊 EOS Summary</h3>
        <p><strong>Years in Operation:</strong> {eos.years || 'N/A'}</p>
      </div>

      <div className="bg-white/10 p-4 rounded shadow mb-4">
        <h3 className="font-semibold text-lg">💻 Digital Presence</h3>
        <p><strong>Website Platform:</strong> {digital.websitePlatform || 'N/A'}</p>
      </div>

      <div className="bg-white/10 p-4 rounded shadow mb-4">
        <h3 className="font-semibold text-lg">🛠 Technical Info</h3>
        <p><strong>Domain Provider:</strong> {technical.domain || 'N/A'}</p>
      </div>

      <div className="bg-white/10 p-4 rounded shadow mb-4">
        <h3 className="font-semibold text-lg">🧩 Services</h3>
        <p><strong>Landing Page:</strong> {services.landingPage ? 'Yes' : 'No'}</p>
        <p><strong>Sober Living:</strong> {services.soberLiving ? 'Yes' : 'No'}</p>
        <p><strong>AdWords:</strong> {services.adwords ? 'Yes' : 'No'}</p>
      </div>

      {services.landingPage && (
        <div className="bg-white/10 p-4 rounded shadow mb-4">
          <h3 className="font-semibold text-lg">📄 Landing Page Info</h3>
          <p><strong>Headline:</strong> {landing.headline || 'N/A'}</p>
        </div>
      )}

      <div className="mt-6 flex flex-wrap gap-4">
        <button
          onClick={() => exportPDF(data)}
          className="bg-rose-600 hover:bg-rose-700 text-white px-4 py-2 rounded"
        >
          Download PDF
        </button>
        <button
          onClick={() => exportJSON(data)}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
        >
          Download JSON
        </button>
        <button
          onClick={() => exportCSV(data)}
          className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded"
        >
          Download CSV
        </button>
        <button
          onClick={() => zipAndDownload(data)}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded"
        >
          Export All (ZIP)
        </button>
      </div>

      <div className="flex justify-between mt-8">
        <button
          onClick={back}
          className="btn bg-[#262626] rounded-full text-[#C3FC68] font-bold cursor-pointer hover:bg-[#C3FC68] hover:text-[#262626] px-10 py-2 rounded mt-4 transition-all duration-300"
        >
          Back
        </button>
        <button
          onClick={next}
          className="btn bg-[#C3FC68] rounded-full text-[#262626] font-bold cursor-pointer hover:bg-[#262626] hover:text-[#C3FC68] px-10 py-2 rounded mt-4 transition-all duration-300"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default ReviewStep;
