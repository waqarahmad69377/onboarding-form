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
      <h2 className="text-2xl font-bold mb-6 text-[#969696]">Technical Overview</h2>

      {/* 1. Current Systems */}
      <Section id="currentSystem" title="1. Current Systems">
        <input
          name="domainProvider"
          placeholder="Domain Provider *"
          value={data.domainProvider || ''}
          onChange={handleChange}
          className="input border-[#868686] focus:border-[#C3FC68]/80 outline-none border-[1px] p-2 rounded-lg w-full"
        />
        {errors.domainProvider && <p className="text-red-500 text-sm">{errors.domainProvider}</p>}

        <input
          name="hosting"
          placeholder="Website Hosting"
          value={data.hosting || ''}
          onChange={handleChange}
          className="input border-[#868686] focus:border-[#C3FC68]/80 outline-none border-[1px] p-2 rounded-lg w-full"
        />

        <div>
          <label className="block font-semibold mb-1 text-[#969696]">Email System:</label>
          <div className='flex flex-row gap-2'>
          {['Gmail', 'Outlook', 'Other'].map((opt) => (
            <div className="flex items-center gap-2 mb-2" key={opt}>
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name={"emailSystem"}
                  value={opt}
                  checked={data.emailSystem === opt}
                  onChange={handleRadioChange}
                  className="peer sr-only"
                />{' '}
                <span className="w-5 h-5 flex items-center justify-center border-2 border-[#969696] rounded-full transition-colors peer-checked:bg-[#C3FC68] peer-checked:border-[#C3FC68]">
                  {data.emailSystem === opt && (
                    <svg className="w-4 h-4 text-[#262626]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </span>
                <span className="ml-2 text-[#969696]">{opt}</span>
              </label>
            </div>
          ))}
          </div>
          {data.emailSystem === 'Other' && (
            <input
              name="emailSystemOther"
              placeholder="Specify Other"
              value={data.emailSystemOther || ''}
              onChange={handleChange}
              className="input border-[#868686] focus:border-[#C3FC68]/80 outline-none border-[1px] p-2 rounded-lg w-full mt-2"
            />
          )}
        </div>

        <input
          name="phoneSystem"
          placeholder="Phone System"
          value={data.phoneSystem || ''}
          onChange={handleChange}
          className="input border-[#868686] focus:border-[#C3FC68]/80 outline-none border-[1px] p-2 rounded-lg w-full"
        />

        <div>
          <label className="block font-semibold mb-1 text-[#969696]">CRM System:</label>
          <div className='flex flex-row gap-2'>
          {['Salesforce', 'HubSpot', 'Go High Level', 'None', 'Other'].map((opt) => (
            <div className="flex items-center gap-2 mb-2" key={opt}>
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name={"crmSystem"}
                  value={opt}
                  checked={data.crmSystem === opt}
                  onChange={handleRadioChange}
                  className="peer sr-only"
                />{' '}
                <span className="w-5 h-5 flex items-center justify-center border-2 border-[#969696] rounded-full transition-colors peer-checked:bg-[#C3FC68] peer-checked:border-[#C3FC68]">
                  {data.crmSystem === opt && (
                    <svg className="w-4 h-4 text-[#262626]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </span>
                <span className="ml-2 text-[#969696]">{opt}</span>
              </label>
            </div>
          ))}
          </div>
          {data.crmSystem === 'Other' && (
            <input
              name="crmSystemOther"
              placeholder="Specify Other"
              value={data.crmSystemOther || ''}
              onChange={handleChange}
              className="input border-[#868686] focus:border-[#C3FC68]/80 outline-none border-[1px] p-2 rounded-lg w-full mt-2"
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
              <label className="block font-semibold mb-1 text-[#969696]">{item}:</label>
              <div className='flex flex-row gap-2'>
              {['Set up', 'Need setup', 'Need access'].map((status) => (
                <div className="flex items-center gap-2 mb-2" key={status}>
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name={name}
                      value={status}
                      checked={data[name] === status}
                      onChange={handleRadioChange}
                      className="peer sr-only"
                    />{' '}
                    <span className="w-5 h-5 flex items-center justify-center border-2 border-[#969696] rounded-full transition-colors peer-checked:bg-[#C3FC68] peer-checked:border-[#C3FC68]">
                      {data[name] === status && (
                        <svg className="w-4 h-4 text-[#262626]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </span>
                    <span className="ml-2 text-[#969696]">{status}</span>
                  </label>
                </div>
              ))}
              </div>
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
              <label className="block font-semibold mb-1 text-[#969696]">{field}:</label>
              <div className='flex flex-row gap-2'>
              {['Yes', 'No'].map((val) => (
                <div className="flex items-center gap-2 mb-2" key={val}>
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name={name}
                      value={val}
                      checked={data[name] === val}
                      onChange={handleRadioChange}
                      className="peer sr-only"
                    />{' '}
                    <span className="w-5 h-5 flex items-center justify-center border-2 border-[#969696] rounded-full transition-colors peer-checked:bg-[#C3FC68] peer-checked:border-[#C3FC68]">
                      {data[name] === val && (
                        <svg className="w-4 h-4 text-[#262626]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </span>
                    <span className="ml-2">{val}</span>
                  </label>
                </div>
              ))}
              </div>
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
