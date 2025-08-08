import React, { useEffect } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';

const LandingPageStep = ({ setShowLandingStep }) => {
  const { register, control } = useFormContext();

  // 🔍 Watch checkbox field value
  const landingSelected = useWatch({ control, name: 'landingPageCheckbox' });

  // ✅ Side effect instead of direct call during render
  useEffect(() => {
    setShowLandingStep(!!landingSelected);
  }, [landingSelected, setShowLandingStep]);

  return (
    <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">📄 Landing Page Details</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <label className="block">
          <span>Primary Goal of Landing Page:</span>
          <select {...register('landingPage.goal')} className="form-select w-full mt-1">
            <option value="">-- Select --</option>
            <option value="leads">Generate Leads</option>
            <option value="calls">Phone Calls</option>
            <option value="appointments">Appointment Bookings</option>
            <option value="info">Information Requests</option>
          </select>
        </label>

        <label className="block">
          <span>Target Audience:</span>
          <input {...register('landingPage.audience')} className="form-input w-full mt-1" />
        </label>

        <label className="block">
          <span>Key Message / Value Proposition:</span>
          <input {...register('landingPage.message')} className="form-input w-full mt-1" />
        </label>

        <label className="block">
          <span>Call-to-Action Preference:</span>
          <select {...register('landingPage.cta')} className="form-select w-full mt-1">
            <option value="">-- Select --</option>
            <option value="call">Call Now</option>
            <option value="schedule">Schedule Consultation</option>
            <option value="info">Get Information</option>
            <option value="callback">Request Callback</option>
          </select>
        </label>

        <label className="block col-span-2">
          <span>Headline:</span>
          <input {...register('landingPage.headline')} className="form-input w-full mt-1" />
        </label>

        <label className="block col-span-2">
          <span>Subheadline:</span>
          <input {...register('landingPage.subheadline')} className="form-input w-full mt-1" />
        </label>

        <label className="block col-span-2">
          <span>Key Benefits to Highlight:</span>
          <textarea {...register('landingPage.benefits')} className="form-textarea w-full mt-1" rows={3} />
        </label>

        <label className="block col-span-2">
          <span>Pain Points to Address:</span>
          <textarea {...register('landingPage.painPoints')} className="form-textarea w-full mt-1" rows={3} />
        </label>
      </div>
    </div>
  );
};

export default LandingPageStep;
