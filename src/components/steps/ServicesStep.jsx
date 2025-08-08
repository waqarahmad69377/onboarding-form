'use client';
import React, { useState } from 'react';
import Section from "@/components/Section";
import Link from 'next/link';

const ServicesStep = ({ data = {}, update, next, back, renderExtras }) => {
  const [form, setForm] = useState(data || {});
  const services = form.services || {};

  const handleCheckboxChange = (e) => {
    const { name } = e.target;
    const updatedServices = {
      landingPage: false,
      soberLiving: false,
      adwords: false,
      [name]: true
    };
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
        <span className="w-5 h-5 flex items-center justify-center border-2 border-[#969696] rounded-full transition-colors peer-checked:bg-[#C3FC68] peer-checked:border-[#C3FC68]">
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
      <h2 className="text-2xl font-bold mb-4 text-[#969696]">Service Selection</h2>
      <div className='flex flex-row gap-2 mb-6'>
        {renderCheckbox("Landing Page Creation", "landingPage", "landingPage")}
        {renderCheckbox("Sober Living Website", "soberLiving", "soberLiving")}
        {renderCheckbox("AdWords Campaign Setup", "adwords", "adwords")}
      </div>

      {/* Landing Page Form */}
      {services.landingPage && (
        <>
          <Section id={"contentRequirement"} title="2. Content Requirements">
            <input name="headline" placeholder="Headline" value={form.headline || ''} onChange={handleInputChange} className="input border-[#868686] focus:border-[#C3FC68]/80 outline-none border-[1px] p-2 rounded-lg w-full" />
            <input name="subheadline" placeholder="Subheadline" value={form.subheadline || ''} onChange={handleInputChange} className="input border-[#868686] focus:border-[#C3FC68]/80 outline-none border-[1px] p-2 rounded-lg w-full" />
            <textarea name="keyBenefits" placeholder="Key Benefits (3-5 bullets)" value={form.keyBenefits || ''} onChange={handleInputChange} className="input border-[#868686] focus:border-[#C3FC68]/80 outline-none border-[1px] p-2 rounded-lg w-full" rows={3} />
            <textarea name="painPoints" placeholder="Pain Points to Address" value={form.painPoints || ''} onChange={handleInputChange} className="input border-[#868686] focus:border-[#C3FC68]/80 outline-none border-[1px] p-2 rounded-lg w-full" rows={3} />
            <div className="mb-2">
              <label className="block font-semibold mb-1 text-[#969696]">Social Proof Elements:</label>
              <div className='flex flex-wrap gap-4'>
              {['Testimonials', 'Awards', 'Certifications', 'Statistics'].map((item) => (
                <div className="flex items-center gap-2 mb-2" key={item}>
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      name={`proof_${item.toLowerCase().replace(/\s+/g, '')}`}
                      value={item}
                      checked={form[`proof_${item.toLowerCase().replace(/\s+/g, '')}`] || false}
                      onChange={(e) => handleInputChange({ target: { name: `proof_${item.toLowerCase().replace(/\s+/g, '')}`, value: e.target.checked } })}
                      className="peer sr-only"
                    />{' '}
                    <span className="w-5 h-5 flex items-center justify-center border-2 border-[#969696] rounded transition-colors peer-checked:bg-[#C3FC68] peer-checked:border-[#C3FC68]">
                      {form[`proof_${item.toLowerCase().replace(/\s+/g, '')}`] && (
                        <svg className="w-4 h-4 text-[#262626]" fill="none" stroke="#262626" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </span>
                    <span className="ml-2 text-[#969696]">{item}</span>
                  </label>
                </div>
              ))}
              </div>
            </div>
            <div className="mb-2">
              <label className="block font-semibold mb-1 text-[#969696]">Form Fields Needed:</label>
              <div className='flex flex-wrap gap-4'>
              {['Name', 'Phone', 'Email', 'Insurance'].map((item) => (
                <div className="flex items-center gap-2 mb-2" key={item}>
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      name={`proof_${item.toLowerCase().replace(/\s+/g, '')}`}
                      value={item}
                      checked={form[`proof_${item.toLowerCase().replace(/\s+/g, '')}`] || false}
                      onChange={(e) => handleInputChange({ target: { name: `proof_${item.toLowerCase().replace(/\s+/g, '')}`, value: e.target.checked } })}
                      className="peer sr-only"
                    />{' '}
                    <span className="w-5 h-5 flex items-center justify-center border-2 border-[#969696] rounded transition-colors peer-checked:bg-[#C3FC68] peer-checked:border-[#C3FC68]">
                      {form[`proof_${item.toLowerCase().replace(/\s+/g, '')}`] && (
                        <svg className="w-4 h-4 text-[#262626]" fill="none" stroke="#262626" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </span>
                    <span className="ml-2 text-[#969696]">{item}</span>
                  </label>
                </div>
              ))}
              </div>
              <input name="formField_other" placeholder="Other..." value={form.formField_other || ''} onChange={handleInputChange} className="input border-[#868686] focus:border-[#C3FC68]/80 outline-none border-[1px] p-2 rounded-lg w-full mt-2" />
            </div>
          </Section>

          <Section id={"designPreferences"} title="3. Design Preferences">
            <input name="colorScheme" placeholder="Color Scheme" value={form.colorScheme || ''} onChange={handleInputChange} className="input border-[#868686] focus:border-[#C3FC68]/80 outline-none border-[1px] p-2 rounded-lg w-full" />
            <label className="block font-semibold mt-2 mb-1 text-[#969696]">Mood/Feel:</label>
            <div className='flex flex-wrap gap-4 mb-2'>
            {['Professional', 'Warm/Welcoming', 'Modern', 'Trustworthy', 'Hope-focused'].map((mood) => (
              <div className="flex items-center gap-2 mb-2" key={mood}>
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      name={`mood_${mood.toLowerCase().replace(/\s+/g, '')}`}
                      value={mood}
                      checked={form[`mood_${mood.toLowerCase().replace(/\s+/g, '')}`] || false}
                      onChange={(e) => handleInputChange({ target: { name: `mood_${mood.toLowerCase().replace(/\s+/g, '')}`, value: e.target.checked } })}
                      className="peer sr-only"
                    />{' '}
                    <span className="w-5 h-5 flex items-center justify-center border-2 border-[#969696] rounded transition-colors peer-checked:bg-[#C3FC68] peer-checked:border-[#C3FC68]">
                      {form[`mood_${mood.toLowerCase().replace(/\s+/g, '')}`] && (
                        <svg className="w-4 h-4 text-[#262626]" fill="none" stroke="#262626" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </span>
                    <span className="ml-2 text-[#969696]">{mood}</span>
                  </label>
                </div>
              // <label key={mood} className="mr-4 text-[#969696]">
              //   <input type="checkbox" name={`mood_${mood.toLowerCase().replace(/[/\s]/g, '')}`} checked={form[`mood_${mood.toLowerCase().replace(/[/\s]/g, '')}`] || false} onChange={(e) => handleInputChange({ target: { name: `mood_${mood.toLowerCase().replace(/[/\s]/g, '')}`, value: e.target.checked } })} /> {mood}
              // </label>
            ))}
            </div>
            <label className="block font-semibold mt-2 mb-1 text-[#969696]">Images Needed:</label>
            <div className='flex flex-wrap gap-4 mb-2'>
            {['Facility Photos', 'Staff Photos', 'Stock Images', 'Client Photos (anonymized)'].map((img) => (
              <div className="flex items-center gap-2 mb-2" key={img}>
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      name={`img_${img.toLowerCase().replace(/\s+/g, '')}`}
                      value={img}
                      checked={form[`img_${img.toLowerCase().replace(/\s+/g, '')}`] || false}
                      onChange={(e) => handleInputChange({ target: { name: `img_${img.toLowerCase().replace(/\s+/g, '')}`, value: e.target.checked } })}
                      className="peer sr-only"
                    />{' '}
                    <span className="w-5 h-5 flex items-center justify-center border-2 border-[#969696] rounded transition-colors peer-checked:bg-[#C3FC68] peer-checked:border-[#C3FC68]">
                      {form[`img_${img.toLowerCase().replace(/\s+/g, '')}`] && (
                        <svg className="w-4 h-4 text-[#262626]" fill="none" stroke="#262626" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </span>
                    <span className="ml-2 text-[#969696]">{img}</span>
                  </label>
                </div>
            ))}
            </div>
            <label className="block font-semibold mt-2 mb-1 text-[#969696]">Video Requirements:</label>
            <div className='flex flex-wrap gap-4 mb-2'>
            {['Welcome Video', 'Testimonial', 'Virtual Tour', 'None'].map((vid) => (
              <div className="flex items-center gap-2 mb-2" key={vid}>
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      name={`vid_${vid.toLowerCase().replace(/\s+/g, '')}`}
                      value={vid}
                      checked={form[`vid_${vid.toLowerCase().replace(/\s+/g, '')}`] || false}
                      onChange={(e) => handleInputChange({ target: { name: `vid_${vid.toLowerCase().replace(/\s+/g, '')}`, value: e.target.checked } })}
                      className="peer sr-only"
                    />{' '}
                    <span className="w-5 h-5 flex items-center justify-center border-2 border-[#969696] rounded transition-colors peer-checked:bg-[#C3FC68] peer-checked:border-[#C3FC68]">
                      {form[`vid_${vid.toLowerCase().replace(/\s+/g, '')}`] && (
                        <svg className="w-4 h-4 text-[#262626]" fill="none" stroke="#262626" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </span>
                    <span className="ml-2 text-[#969696]">{vid}</span>
                  </label>
                </div>
              // <label key={vid} className="mr-4 text-[#969696]">
              //   <input type="checkbox" name={`video_${vid.toLowerCase().replace(/\s+/g, '_')}`} checked={form[`video_${vid.toLowerCase().replace(/\s+/g, '_')}`] || false} onChange={(e) => handleInputChange({ target: { name: `video_${vid.toLowerCase().replace(/\s+/g, '_')}`, value: e.target.checked } })} /> {vid}
              // </label>
            ))}
            </div>
          </Section>

          <Section id={"conversionTracking"} title="4. Conversion Tracking">
            <input name="submissionEmail" placeholder="Form Submission Email" value={form.submissionEmail || ''} onChange={handleInputChange} className="input border-[#868686] focus:border-[#C3FC68]/80 outline-none border-[1px] p-2 rounded-lg w-full" />
            <input name="thankYouMessage" placeholder="Thank You Page Message" value={form.thankYouMessage || ''} onChange={handleInputChange} className="input border-[#868686] focus:border-[#C3FC68]/80 outline-none border-[1px] p-2 rounded-lg w-full" />
            <textarea name="followUpProcess" placeholder="Follow-up Process" value={form.followUpProcess || ''} onChange={handleInputChange} className="input border-[#868686] focus:border-[#C3FC68]/80 outline-none border-[1px] p-2 rounded-lg w-full" rows={3} />
            <input name="successMetrics" placeholder="Success Metrics" value={form.successMetrics || ''} onChange={handleInputChange} className="input border-[#868686] focus:border-[#C3FC68]/80 outline-none border-[1px] p-2 rounded-lg w-full" />
          </Section>
        </>
      )}

      {/* Sober Living Form */}
      {services.soberLiving && (
        <Section id="soberLiving" title="🏠 Sober Living Website">
          <p className="mb-2">Check if creating sober living website</p>
          <Link href={"/onboarding/sober-living"} className="btn bg-[#C3FC68] text-[#262626] hover:bg-[#C3FC68]/80 px-6 py-2 font-bold block w-70 text-center rounded-full">Proceed to Sober Living Form</Link>
          <p className="mt-2 text-sm text-gray-600">Existing Clients: <a href="https://brandnorth.com/onboarding/sober-living" target="_blank" className="text-[#C3FC68] underline">brandnorth.com/onboarding/sober-living</a></p>
        </Section>
      )}

      {/* AdWords Campaign Form */}
      {services.adwords && (
        <Section id="adwords" title="📱 AdWords Campaign">
          <p className="mb-2">Check if creating AdWords campaign</p>
          <Link href={"/onboarding/adwords"} className="btn bg-[#C3FC68] text-[#262626] hover:bg-[#C3FC68]/80 px-6 py-2 font-bold block w-70 text-center rounded-full">Proceed to AdWords Setup</Link>
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
