import React, { useState } from 'react';
import Section from "@/components/Section";

const ServicesStep = ({ data = {}, update, next, back, renderExtras }) => {
  const [form, setForm] = useState(data || {});
  const services = form.services || {};

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    const updatedServices = { ...services, [name]: checked };
    const updated = { ...form, services: updatedServices };
    setForm(updated);
    update(updated);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const updated = { ...form, [name]: value };
    setForm(updated);
    update(updated);
  };

  const renderCheckbox = (label, name, key) => (
    <div className="flex items-center gap-2 mb-2" key={key}>
      <label className="flex items-center cursor-pointer">
        <input
          type="checkbox"
          name={name}
          checked={services[name] || false}
          onChange={handleCheckboxChange}
          className="peer sr-only"
        />
        <span className="w-5 h-5 flex items-center justify-center border-2 border-[#969696] rounded transition-colors peer-checked:bg-[#C3FC68] peer-checked:border-[#C3FC68]">
          {services[name] && (
            <svg className="w-4 h-4 text-[#262626]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          )}
        </span>
        <span className="ml-2">{label}</span>
      </label>
    </div>
  );

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Service Selection</h2>
      <div className='flex flex-col gap-2 mb-6'>
        {renderCheckbox("Landing Page Creation", "landingPage", "landingPage")}
        {renderCheckbox("Sober Living Website", "soberLiving", "soberLiving")}
        {renderCheckbox("AdWords Campaign Setup", "adwords", "adwords")}
      </div>

      {/* Landing Page Form */}
      {services.landingPage && (
        <>
          <Section id={"contentRequirement"} title="2. Content Requirements">
            <input name="headline" placeholder="Headline" value={form.headline || ''} onChange={handleInputChange} className="input border p-2 rounded w-full" />
            <input name="subheadline" placeholder="Subheadline" value={form.subheadline || ''} onChange={handleInputChange} className="input border p-2 rounded w-full" />
            <textarea name="keyBenefits" placeholder="Key Benefits (3-5 bullets)" value={form.keyBenefits || ''} onChange={handleInputChange} className="input border p-2 rounded w-full" rows={3} />
            <textarea name="painPoints" placeholder="Pain Points to Address" value={form.painPoints || ''} onChange={handleInputChange} className="input border p-2 rounded w-full" rows={3} />
            <div className="mb-2">
              <label className="block font-semibold mb-1">Social Proof Elements:</label>
              {['Testimonials', 'Awards', 'Certifications', 'Statistics'].map((item) => (
                <label key={item} className="mr-4">
                  <input type="checkbox" name={`proof_${item.toLowerCase()}`} checked={form[`proof_${item.toLowerCase()}`] || false} onChange={(e) => handleInputChange({ target: { name: `proof_${item.toLowerCase()}`, value: e.target.checked } })} /> {item}
                </label>
              ))}
            </div>
            <div className="mb-2">
              <label className="block font-semibold mb-1">Form Fields Needed:</label>
              {['Name', 'Phone', 'Email', 'Insurance'].map((item) => (
                <label key={item} className="mr-4">
                  <input type="checkbox" name={`formField_${item.toLowerCase()}`} checked={form[`formField_${item.toLowerCase()}`] || false} onChange={(e) => handleInputChange({ target: { name: `formField_${item.toLowerCase()}`, value: e.target.checked } })} /> {item}
                </label>
              ))}
              <input name="formField_other" placeholder="Other..." value={form.formField_other || ''} onChange={handleInputChange} className="input border p-2 rounded w-full mt-2" />
            </div>
          </Section>

          <Section id={"designPreferences"} title="3. Design Preferences">
            <input name="colorScheme" placeholder="Color Scheme" value={form.colorScheme || ''} onChange={handleInputChange} className="input border p-2 rounded w-full" />
            <label className="block font-semibold mt-2 mb-1">Mood/Feel:</label>
            {['Professional', 'Warm/Welcoming', 'Modern', 'Trustworthy', 'Hope-focused'].map((mood) => (
              <label key={mood} className="mr-4">
                <input type="checkbox" name={`mood_${mood.toLowerCase().replace(/[/\s]/g, '')}`} checked={form[`mood_${mood.toLowerCase().replace(/[/\s]/g, '')}`] || false} onChange={(e) => handleInputChange({ target: { name: `mood_${mood.toLowerCase().replace(/[/\s]/g, '')}`, value: e.target.checked } })} /> {mood}
              </label>
            ))}
            <label className="block font-semibold mt-2 mb-1">Images Needed:</label>
            {['Facility Photos', 'Staff Photos', 'Stock Images', 'Client Photos (anonymized)'].map((img) => (
              <label key={img} className="mr-4">
                <input type="checkbox" name={`image_${img.toLowerCase().replace(/\s+/g, '_')}`} checked={form[`image_${img.toLowerCase().replace(/\s+/g, '_')}`] || false} onChange={(e) => handleInputChange({ target: { name: `image_${img.toLowerCase().replace(/\s+/g, '_')}`, value: e.target.checked } })} /> {img}
              </label>
            ))}
            <label className="block font-semibold mt-2 mb-1">Video Requirements:</label>
            {['Welcome Video', 'Testimonial', 'Virtual Tour', 'None'].map((vid) => (
              <label key={vid} className="mr-4">
                <input type="checkbox" name={`video_${vid.toLowerCase().replace(/\s+/g, '_')}`} checked={form[`video_${vid.toLowerCase().replace(/\s+/g, '_')}`] || false} onChange={(e) => handleInputChange({ target: { name: `video_${vid.toLowerCase().replace(/\s+/g, '_')}`, value: e.target.checked } })} /> {vid}
              </label>
            ))}
          </Section>

          <Section id={"conversionTracking"} title="4. Conversion Tracking">
            <input name="submissionEmail" placeholder="Form Submission Email" value={form.submissionEmail || ''} onChange={handleInputChange} className="input border p-2 rounded w-full" />
            <input name="thankYouMessage" placeholder="Thank You Page Message" value={form.thankYouMessage || ''} onChange={handleInputChange} className="input border p-2 rounded w-full" />
            <textarea name="followUpProcess" placeholder="Follow-up Process" value={form.followUpProcess || ''} onChange={handleInputChange} className="input border p-2 rounded w-full" rows={3} />
            <input name="successMetrics" placeholder="Success Metrics" value={form.successMetrics || ''} onChange={handleInputChange} className="input border p-2 rounded w-full" />
          </Section>
        </>
      )}

      {/* Sober Living Form */}
      {services.soberLiving && (
        <Section id="soberLiving" title="🏠 Sober Living Website">
          <p className="mb-2">Check if creating sober living website</p>
          <button className="btn bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Proceed to Sober Living Form</button>
          <p className="mt-2 text-sm text-gray-600">Existing Clients: <a href="https://brandnorth.com/onboarding/sober-living" target="_blank" className="text-blue-600 underline">brandnorth.com/onboarding/sober-living</a></p>
        </Section>
      )}

      {/* AdWords Campaign Form */}
      {services.adwords && (
        <Section id="adwords" title="📱 AdWords Campaign">
          <p className="mb-2">Check if creating AdWords campaign</p>
          <button className="btn bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Proceed to AdWords Setup</button>
          <p className="mt-2 text-sm text-gray-600">You'll configure: Budget, Audience, Targeting, Conversion Metrics</p>
        </Section>
      )}

      <div className="flex justify-between mt-8">
        <button onClick={back} className="btn bg-[#262626] rounded-full text-[#C3FC68] font-bold hover:bg-[#C3FC68] hover:text-[#262626] px-10 py-2 transition-all duration-300">
          Back
        </button>
        <div className="flex gap-2">
          {renderExtras?.(services)}
          <button onClick={next} className="btn bg-[#C3FC68] rounded-full text-[#262626] font-bold hover:bg-[#262626] hover:text-[#C3FC68] px-10 py-2 transition-all duration-300">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesStep;
