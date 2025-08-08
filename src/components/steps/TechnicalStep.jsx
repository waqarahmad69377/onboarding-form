import React, { useState } from 'react';
import Section from '@/components/Section';

const TechnicalStep = ({ data = {}, update, next, back }) => {
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    update({ ...data, [name]: value });
  };

  const handleRadioChange = (e) => {
    const { name, value } = e.target;
    update({ ...data, [name]: value });
  };

  const handleValidate = () => {
    const newErrors = {};
    if (!data.domainProvider) newErrors.domainProvider = 'Domain provider is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (handleValidate()) next();
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Technical Overview</h2>

      {/* 1. Current Systems */}
      <Section id="currentSystem" title="1. Current Systems">
        <input
          name="domainProvider"
          placeholder="Domain Provider"
          value={data.domainProvider || ''}
          onChange={handleChange}
          className="input border p-2 rounded w-full"
        />
        {errors.domainProvider && <p className="text-red-500 text-sm">{errors.domainProvider}</p>}

        <input
          name="hosting"
          placeholder="Website Hosting"
          value={data.hosting || ''}
          onChange={handleChange}
          className="input border p-2 rounded w-full"
        />

        <div>
          <label className="block font-semibold mb-1">Email System:</label>
          {['Gmail', 'Outlook', 'Other'].map((opt) => (
            <label key={opt} className="mr-4">
              <input
                type="radio"
                name="emailSystem"
                value={opt}
                checked={data.emailSystem === opt}
                onChange={handleRadioChange}
              />{' '}
              {opt}
            </label>
          ))}
          {data.emailSystem === 'Other' && (
            <input
              name="emailSystemOther"
              placeholder="Specify Other"
              value={data.emailSystemOther || ''}
              onChange={handleChange}
              className="input border p-2 rounded w-full mt-2"
            />
          )}
        </div>

        <input
          name="phoneSystem"
          placeholder="Phone System"
          value={data.phoneSystem || ''}
          onChange={handleChange}
          className="input border p-2 rounded w-full"
        />

        <div>
          <label className="block font-semibold mb-1">CRM System:</label>
          {['Salesforce', 'HubSpot', 'Go High Level', 'None', 'Other'].map((opt) => (
            <label key={opt} className="mr-4">
              <input
                type="radio"
                name="crmSystem"
                value={opt}
                checked={data.crmSystem === opt}
                onChange={handleRadioChange}
              />{' '}
              {opt}
            </label>
          ))}
          {data.crmSystem === 'Other' && (
            <input
              name="crmSystemOther"
              placeholder="Specify Other"
              value={data.crmSystemOther || ''}
              onChange={handleChange}
              className="input border p-2 rounded w-full mt-2"
            />
          )}
        </div>
      </Section>

      {/* 2. Analytics & Tracking */}
      <Section id={"trackingAnalytics"} title="2. Analytics & Tracking">
        {['Google Analytics', 'Google Search Console', 'Google My Business', 'Google Tag Manager'].map((item) => {
          const name = item.replace(/\s+/g, '').toLowerCase();
          return (
            <div key={item}>
              <label className="block font-semibold mb-1">{item}:</label>
              {['Set up', 'Need setup', 'Need access'].map((status) => (
                <label key={status} className="mr-4">
                  <input
                    type="radio"
                    name={name}
                    value={status}
                    checked={data[name] === status}
                    onChange={handleRadioChange}
                  />{' '}
                  {status}
                </label>
              ))}
            </div>
          );
        })}
      </Section>

      {/* 3. Access Required */}
      <Section title="3. Access Required">
        {[
          'Website Admin Access',
          'Domain Provider Access',
          'CRM Access',
          'Phone System Access',
          'Social Media Admin Access',
        ].map((field) => {
          const name = field.replace(/\s+/g, '').toLowerCase();
          return (
            <div key={name}>
              <label className="block font-semibold mb-1">{field}:</label>
              {['Yes', 'No'].map((val) => (
                <label key={val} className="mr-4">
                  <input
                    type="radio"
                    name={name}
                    value={val}
                    checked={data[name] === val}
                    onChange={handleRadioChange}
                  />{' '}
                  {val}
                </label>
              ))}
            </div>
          );
        })}
      </Section>

      <div className="flex justify-between mt-6">
        <button onClick={back} className="btn bg-[#262626] rounded-full text-[#C3FC68] font-bold cursor-pointer hover:bg-[#C3FC68] hover:text-[#262626] px-10 py-2 rounded mt-4 transition-all duration-300">
          Back
        </button>
        <button onClick={handleNext} className="btn bg-[#C3FC68] rounded-full text-[#262626] font-bold cursor-pointer hover:bg-[#262626] hover:text-[#C3FC68] px-10 py-2 rounded mt-4 transition-all duration-300">
          Next
        </button>
      </div>
    </div>
  );
};

export default TechnicalStep;
