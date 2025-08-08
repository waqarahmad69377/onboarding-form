import React from 'react';

const LandingPageStep = ({ data = {}, update, back, next }) => {
  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    update({ ...data, [name]: value });
  };

  return (
    <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">📄 Landing Page Details</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <label className="block">
          <span>Primary Goal of Landing Page:</span>
          <select
            name="landing_goal"
            value={data.landing_goal || ''}
            onChange={handleChange}
            className="form-select w-full mt-1"
          >
            <option value="">-- Select --</option>
            <option value="leads">Generate Leads</option>
            <option value="calls">Phone Calls</option>
            <option value="appointments">Appointment Bookings</option>
            <option value="info">Information Requests</option>
          </select>
        </label>

        <label className="block">
          <span>Target Audience:</span>
          <input
            name="landing_audience"
            value={data.landing_audience || ''}
            onChange={handleChange}
            className="form-input w-full mt-1"
          />
        </label>

        <label className="block md:col-span-2">
          <span>Key Message / Value Proposition:</span>
          <input
            name="landing_message"
            value={data.landing_message || ''}
            onChange={handleChange}
            className="form-input w-full mt-1"
          />
        </label>

        <label className="block">
          <span>Call-to-Action Preference:</span>
          <select
            name="landing_cta"
            value={data.landing_cta || ''}
            onChange={handleChange}
            className="form-select w-full mt-1"
          >
            <option value="">-- Select --</option>
            <option value="call">Call Now</option>
            <option value="schedule">Schedule Consultation</option>
            <option value="info">Get Information</option>
            <option value="callback">Request Callback</option>
          </select>
        </label>

        <label className="block md:col-span-2">
          <span>Headline:</span>
          <input
            name="landing_headline"
            value={data.landing_headline || ''}
            onChange={handleChange}
            className="form-input w-full mt-1"
          />
        </label>

        <label className="block md:col-span-2">
          <span>Subheadline:</span>
          <input
            name="landing_subheadline"
            value={data.landing_subheadline || ''}
            onChange={handleChange}
            className="form-input w-full mt-1"
          />
        </label>

        <label className="block md:col-span-2">
          <span>Key Benefits to Highlight:</span>
          <textarea
            name="landing_benefits"
            value={data.landing_benefits || ''}
            onChange={handleChange}
            className="form-textarea w-full mt-1"
            rows={3}
          />
        </label>

        <label className="block md:col-span-2">
          <span>Pain Points to Address:</span>
          <textarea
            name="landing_painPoints"
            value={data.landing_painPoints || ''}
            onChange={handleChange}
            className="form-textarea w-full mt-1"
            rows={3}
          />
        </label>
      </div>

      <div className="flex justify-between mt-6">
        <button
          onClick={back}
          className="btn bg-gray-500 text-white px-6 py-2 rounded"
        >
          Back
        </button>
        <button
          onClick={next}
          className="btn bg-blue-600 text-white px-6 py-2 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default LandingPageStep;
