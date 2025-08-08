import React, { useState } from 'react';

const Section = ({ title, children }) => {
  const [open, setOpen] = useState(true);
  return (
    <div className="mb-6">
      <button
        className="text-lg font-semibold mb-2 underline"
        onClick={() => setOpen(!open)}
      >
        {title} {open ? '▲' : '▼'}
      </button>
      {open && <div className="space-y-4">{children}</div>}
    </div>
  );
};

const ServicesStep = ({ data = {}, update, next, back, renderExtras }) => {
  const services = data.services || {};
  const landing = services.landingPage || false;

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    update({ services: { ...services, [name]: checked } });
  };

  const handleInputChange = (e) => {
    update({ [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Service Selection</h2>

      <label className="block mb-2">
        <input
          type="checkbox"
          name="landingPage"
          checked={landing}
          onChange={handleCheckboxChange}
          className="mr-2"
        />
        Landing Page Creation
      </label>

      <label className="block mb-2">
        <input
          type="checkbox"
          name="soberLiving"
          checked={services.soberLiving || false}
          onChange={handleCheckboxChange}
          className="mr-2"
        />
        Sober Living Website
      </label>

      <label className="block mb-2">
        <input
          type="checkbox"
          name="adwords"
          checked={services.adwords || false}
          onChange={handleCheckboxChange}
          className="mr-2"
        />
        AdWords Campaign Setup
      </label>

      {landing && (
        <>
          <Section title="2. Content Requirements">
            <input name="headline" placeholder="Headline" value={data.headline || ''} onChange={handleInputChange} className="input border p-2 rounded w-full" />
            <input name="subheadline" placeholder="Subheadline" value={data.subheadline || ''} onChange={handleInputChange} className="input border p-2 rounded w-full" />
            <textarea name="keyBenefits" placeholder="Key Benefits (3-5 bullets)" value={data.keyBenefits || ''} onChange={handleInputChange} className="input border p-2 rounded w-full" rows={3} />
            <textarea name="painPoints" placeholder="Pain Points to Address" value={data.painPoints || ''} onChange={handleInputChange} className="input border p-2 rounded w-full" rows={3} />

            <div className="mb-2">
              <label className="block font-semibold mb-1">Social Proof Elements:</label>
              {['Testimonials', 'Awards', 'Certifications', 'Statistics'].map((item) => (
                <label key={item} className="mr-4">
                  <input
                    type="checkbox"
                    name={`proof_${item.toLowerCase()}`}
                    checked={data[`proof_${item.toLowerCase()}`] || false}
                    onChange={(e) => update({ [`proof_${item.toLowerCase()}`]: e.target.checked })}
                  />{' '}
                  {item}
                </label>
              ))}
            </div>

            <div className="mb-2">
              <label className="block font-semibold mb-1">Form Fields Needed:</label>
              {['Name', 'Phone', 'Email', 'Insurance'].map((item) => (
                <label key={item} className="mr-4">
                  <input
                    type="checkbox"
                    name={`formField_${item.toLowerCase()}`}
                    checked={data[`formField_${item.toLowerCase()}`] || false}
                    onChange={(e) => update({ [`formField_${item.toLowerCase()}`]: e.target.checked })}
                  />{' '}
                  {item}
                </label>
              ))}
              <input name="formField_other" placeholder="Other..." value={data.formField_other || ''} onChange={handleInputChange} className="input border p-2 rounded w-full mt-2" />
            </div>
          </Section>

          <Section title="3. Design Preferences">
            <input name="colorScheme" placeholder="Color Scheme" value={data.colorScheme || ''} onChange={handleInputChange} className="input border p-2 rounded w-full" />
            <label className="block font-semibold mt-2 mb-1">Mood/Feel:</label>
            {['Professional', 'Warm/Welcoming', 'Modern', 'Trustworthy', 'Hope-focused'].map((mood) => (
              <label key={mood} className="mr-4">
                <input
                  type="checkbox"
                  name={`mood_${mood.toLowerCase().replace(/[/\s]/g, '')}`}
                  checked={data[`mood_${mood.toLowerCase().replace(/[/\s]/g, '')}`] || false}
                  onChange={(e) => update({ [`mood_${mood.toLowerCase().replace(/[/\s]/g, '')}`]: e.target.checked })}
                />{' '}
                {mood}
              </label>
            ))}

            <label className="block font-semibold mt-2 mb-1">Images Needed:</label>
            {['Facility Photos', 'Staff Photos', 'Stock Images', 'Client Photos (anonymized)'].map((img) => (
              <label key={img} className="mr-4">
                <input
                  type="checkbox"
                  name={`image_${img.toLowerCase().replace(/\s+/g, '_')}`}
                  checked={data[`image_${img.toLowerCase().replace(/\s+/g, '_')}`] || false}
                  onChange={(e) => update({ [`image_${img.toLowerCase().replace(/\s+/g, '_')}`]: e.target.checked })}
                />{' '}
                {img}
              </label>
            ))}

            <label className="block font-semibold mt-2 mb-1">Video Requirements:</label>
            {['Welcome Video', 'Testimonial', 'Virtual Tour', 'None'].map((vid) => (
              <label key={vid} className="mr-4">
                <input
                  type="checkbox"
                  name={`video_${vid.toLowerCase().replace(/\s+/g, '_')}`}
                  checked={data[`video_${vid.toLowerCase().replace(/\s+/g, '_')}`] || false}
                  onChange={(e) => update({ [`video_${vid.toLowerCase().replace(/\s+/g, '_')}`]: e.target.checked })}
                />{' '}
                {vid}
              </label>
            ))}
          </Section>

          <Section title="4. Conversion Tracking">
            <input name="submissionEmail" placeholder="Form Submission Email" value={data.submissionEmail || ''} onChange={handleInputChange} className="input border p-2 rounded w-full" />
            <input name="thankYouMessage" placeholder="Thank You Page Message" value={data.thankYouMessage || ''} onChange={handleInputChange} className="input border p-2 rounded w-full" />
            <textarea name="followUpProcess" placeholder="Follow-up Process" value={data.followUpProcess || ''} onChange={handleInputChange} className="input border p-2 rounded w-full" rows={3} />
            <input name="successMetrics" placeholder="Success Metrics" value={data.successMetrics || ''} onChange={handleInputChange} className="input border p-2 rounded w-full" />
          </Section>
        </>
      )}

      <div className="flex justify-between mt-6">
        <button
          onClick={back}
          className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded"
        >
          Back
        </button>
        <div className="flex gap-2">
          {renderExtras?.(services)}
          <button
            onClick={next}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesStep;
