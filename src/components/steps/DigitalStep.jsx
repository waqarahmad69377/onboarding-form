'use client';
import React, { useState } from 'react';
import Section from "@/components/Section";
const DigitalStep = ({ data = {}, update, next, back }) => {
  const [form, setForm] = useState(data || {});
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    update({ ...data, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!data.websitePlatform) newErrors.websitePlatform = 'Website Platform is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validate()) next();
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-[#969696]">Digital Presence Overview</h2>

      {/* 1. Current Digital Assets */}
      <Section id="digitalAssets" title="1. Current Digital Assets">
        <div className='mb-4'>
          <label className="block font-semibold mb-1 text-[#969696]">Website Platform <span>*</span></label>
          <select
            name="websitePlatform"
            onChange={handleChange}
            defaultValue={data.websitePlatform || ''}
            className="input border-[#868686] focus:border-[#C3FC68]/80 outline-none border-[1px] p-2 rounded-lg w-full text-white/80 bg-[#262626]"
          >
            <option value="">Select Website Platform</option>
            <option value="WordPress">WordPress</option>
            <option value="Squarespace">Squarespace</option>
            <option value="Wix">Wix</option>
            <option value="Custom">Custom</option>
            <option value="None">None</option>
          </select>
        {errors.websitePlatform && <p className="text-red-500 text-sm">{errors.websitePlatform}</p>}
        </div>
        <div className='mb-4'>
          <label className="block font-semibold mb-1 text-[#969696]">Facebook Business Page</label>
          <input name="facebook" placeholder="Facebook Business Page" value={data.facebook || ''} onChange={handleChange} className="input border-[#868686] focus:border-[#C3FC68]/80 outline-none border-[1px] p-2 rounded-lg w-full" />
        </div>
        <div className='mb-4'>
          <label className="block font-semibold mb-1 text-[#969696]">Instagram Account</label>
        <input name="instagram" placeholder="Instagram Account" value={data.instagram || ''} onChange={handleChange} className="input border-[#868686] focus:border-[#C3FC68]/80 outline-none border-[1px] p-2 rounded-lg w-full" />
        </div>
        <div className='mb-4'>
          <label className="block font-semibold mb-1 text-[#969696]">LinkedIn Company Page</label>
        <input name="linkedin" placeholder="LinkedIn Company Page" value={data.linkedin || ''} onChange={handleChange} className="input border-[#868686] focus:border-[#C3FC68]/80 outline-none border-[1px] p-2 rounded-lg w-full" />
        </div>
        <div className='mb-4'>
          <label className="block font-semibold mb-1 text-[#969696]">YouTube Channel</label>
          <input name="youtube" placeholder="YouTube Channel" value={data.youtube || ''} onChange={handleChange} className="input border-[#868686] focus:border-[#C3FC68]/80 outline-none border-[1px] p-2 rounded-lg w-full" />
        </div>
        <div className='mb-4'>
          <label className="block font-semibold mb-1 text-[#969696]">Other Social Media</label>
        <input name="otherSocial" placeholder="Other Social Media" value={data.otherSocial || ''} onChange={handleChange} className="input border-[#868686] focus:border-[#C3FC68]/80 outline-none border-[1px] p-2 rounded-lg w-full" />
        </div>
      </Section>

      {/* 2. Brand Assets */}
      <Section id="brandAssets" title="2. Brand Assets">
        <div className="flex items-center gap-4">
          <label className='text-[#969696]'>Logo Files Available:</label>
          <div className="flex items-center gap-2 mb-2">
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name={"logoAvailable"}
                value={"Yes"}
                checked={data.logoAvailable === 'Yes'}
                onChange={handleChange}
                className="peer sr-only"
              />
              <span className="w-5 h-5 flex items-center justify-center border-2 border-[#969696] rounded-full transition-colors peer-checked:bg-[#C3FC68] peer-checked:border-[#C3FC68]">
                {data.logoAvailable === 'Yes' && (
                  <svg className="w-4 h-4 text-[#262626]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </span>
              <span className="ml-2">Yes</span>
            </label>
          </div>
          {/* <label><input type="radio" name="logoAvailable" value="Yes" onChange={handleChange} checked={data.logoAvailable === 'Yes'} /> Yes</label> */}
          <div className="flex items-center gap-2 mb-2">
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name={"logoAvailable"}
                value={"No"}
                checked={data.logoAvailable === 'No'}
                onChange={handleChange}
                className="peer sr-only"
              />
              <span className="w-5 h-5 flex items-center justify-center border-2 border-[#969696] rounded-full transition-colors peer-checked:bg-[#C3FC68] peer-checked:border-[#C3FC68]">
                {data.logoAvailable === 'No' && (
                  <svg className="w-4 h-4 text-[#262626]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </span>
              <span className="ml-2">No</span>
            </label>
          </div>
          {/* <label><input type="radio" name="logoAvailable" value="No" onChange={handleChange} checked={data.logoAvailable === 'No'} /> No</label> */}
        </div>
        {data.logoAvailable === 'Yes' && (
          <input name="logoLink" placeholder="Logo Link" value={data.logoLink || ''} onChange={handleChange} className="input border-[#868686] focus:border-[#C3FC68]/80 outline-none border-[1px] p-2 rounded-lg w-full" />
        )}

        <div className="flex items-center gap-4">
          <label className='text-[#969696]'>Brand Guidelines:</label>
          <div className="flex items-center gap-2 mb-2">
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name={"brandGuidelines"}
                value={"Yes"}
                checked={data.brandGuidelines === 'Yes'}
                onChange={handleChange}
                className="peer sr-only"
              />
              <span className="w-5 h-5 flex items-center justify-center border-2 border-[#969696] rounded-full transition-colors peer-checked:bg-[#C3FC68] peer-checked:border-[#C3FC68]">
                {data.brandGuidelines === 'Yes' && (
                  <svg className="w-4 h-4 text-[#262626]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </span>
              <span className="ml-2">Yes</span>
            </label>
          </div>
          {/* <label><input type="radio" name="brandGuidelines" value="Yes" onChange={handleChange} checked={data.brandGuidelines === 'Yes'} /> Yes</label> */}
          <div className="flex items-center gap-2 mb-2">
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name={"brandGuidelines"}
                value={"No"}
                checked={data.brandGuidelines === 'No'}
                onChange={handleChange}
                className="peer sr-only"
              />
              <span className="w-5 h-5 flex items-center justify-center border-2 border-[#969696] rounded-full transition-colors peer-checked:bg-[#C3FC68] peer-checked:border-[#C3FC68]">
                {data.brandGuidelines === 'No' && (
                  <svg className="w-4 h-4 text-[#262626]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </span>
              <span className="ml-2">No</span>
            </label>
          </div>
          {/* <label><input type="radio" name="brandGuidelines" value="No" onChange={handleChange} checked={data.brandGuidelines === 'No'} /> No</label> */}
        </div>
        {data.brandGuidelines === 'Yes' && (
          <input name="brandGuidelinesLink" placeholder="Brand Guidelines Link" value={data.brandGuidelinesLink || ''} onChange={handleChange} className="input border-[#868686] focus:border-[#C3FC68]/80 outline-none border-[1px] p-2 rounded-lg w-full" />
        )}

        <div className="flex items-center gap-4">
          <label className='text-[#969696]'>Professional Photos:</label>
          <div className="flex items-center gap-2 mb-2">
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name={"photosAvailable"}
                value={"Yes"}
                checked={data.photosAvailable === 'Yes'}
                onChange={handleChange}
                className="peer sr-only"
              />
              <span className="w-5 h-5 flex items-center justify-center border-2 border-[#969696] rounded-full transition-colors peer-checked:bg-[#C3FC68] peer-checked:border-[#C3FC68]">
                {data.photosAvailable === 'Yes' && (
                  <svg className="w-4 h-4 text-[#262626]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </span>
              <span className="ml-2">Yes</span>
            </label>
          </div>
          {/* <label><input type="radio" name="photosAvailable" value="Yes" onChange={handleChange} checked={data.photosAvailable === 'Yes'} /> Yes</label> */}
          <div className="flex items-center gap-2 mb-2">
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name={"photosAvailable"}
                value={"No"}
                checked={data.photosAvailable === 'No'}
                onChange={handleChange}
                className="peer sr-only"
              />
              <span className="w-5 h-5 flex items-center justify-center border-2 border-[#969696] rounded-full transition-colors peer-checked:bg-[#C3FC68] peer-checked:border-[#C3FC68]">
                {data.photosAvailable === 'No' && (
                  <svg className="w-4 h-4 text-[#262626]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </span>
              <span className="ml-2">No</span>
            </label>
          </div>
          {/* <label><input type="radio" name="photosAvailable" value="No" onChange={handleChange} checked={data.photosAvailable === 'No'} /> No</label> */}
        </div>
        {data.photosAvailable === 'Yes' && (
          <input name="photosLink" placeholder="Photos Link" value={data.photosLink || ''} onChange={handleChange} className="input border-[#868686] focus:border-[#C3FC68]/80 outline-none border-[1px] p-2 rounded-lg w-full" />
        )}

        <div className="flex items-center gap-4">
          <label className='text-[#969696]'>Video Content:</label>
          <div className="flex items-center gap-2 mb-2">
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name={"videoAvailable"}
                value={"Yes"}
                checked={data.videoAvailable === 'Yes'}
                onChange={handleChange}
                className="peer sr-only"
              />
              <span className="w-5 h-5 flex items-center justify-center border-2 border-[#969696] rounded-full transition-colors peer-checked:bg-[#C3FC68] peer-checked:border-[#C3FC68]">
                {data.videoAvailable === 'Yes' && (
                  <svg className="w-4 h-4 text-[#262626]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </span>
              <span className="ml-2">Yes</span>
            </label>
          </div>
          {/* <label><input type="radio" name="videoAvailable" value="Yes" onChange={handleChange} checked={data.videoAvailable === 'Yes'} /> Yes</label> */}
          <div className="flex items-center gap-2 mb-2">
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name={"videoAvailable"}
                value={"No"}
                checked={data.videoAvailable === 'No'}
                onChange={handleChange}
                className="peer sr-only"
              />
              <span className="w-5 h-5 flex items-center justify-center border-2 border-[#969696] rounded-full transition-colors peer-checked:bg-[#C3FC68] peer-checked:border-[#C3FC68]">
                {data.videoAvailable === 'No' && (
                  <svg className="w-4 h-4 text-[#262626]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </span>
              <span className="ml-2">No</span>
            </label>
          </div>
          {/* <label><input type="radio" name="videoAvailable" value="No" onChange={handleChange} checked={data.videoAvailable === 'No'} /> No</label> */}
        </div>
        {data.videoAvailable === 'Yes' && (
          <input name="videoLink" placeholder="Video Content Link" value={data.videoLink || ''} onChange={handleChange} className="input border-[#868686] focus:border-[#C3FC68]/80 outline-none border-[1px] p-2 rounded-lg w-full" />
        )}
      </Section>

      {/* 3. Reviews & Testimonials */}
      <Section id="reviews" title="3. Reviews & Testimonials">
        <input name="googleRating" placeholder="Current Google Rating" value={data.googleRating || ''} onChange={handleChange} className="input border-[#868686] focus:border-[#C3FC68]/80 outline-none border-[1px] p-2 rounded-lg w-full" />
        <input name="testimonial1" placeholder="Featured Testimonial #1" value={data.testimonial1 || ''} onChange={handleChange} className="input border-[#868686] focus:border-[#C3FC68]/80 outline-none border-[1px] p-2 rounded-lg w-full" />
        <input name="testimonial1Attribution" placeholder="Attribution (Name/Location)" value={data.testimonial1Attribution || ''} onChange={handleChange} className="input border-[#868686] focus:border-[#C3FC68]/80 outline-none border-[1px] p-2 rounded-lg w-full" />
        <input name="testimonial2" placeholder="Featured Testimonial #2" value={data.testimonial2 || ''} onChange={handleChange} className="input border-[#868686] focus:border-[#C3FC68]/80 outline-none border-[1px] p-2 rounded-lg w-full" />
        <input name="testimonial2Attribution" placeholder="Attribution (Name/Location)" value={data.testimonial2Attribution || ''} onChange={handleChange} className="input border-[#868686] focus:border-[#C3FC68]/80 outline-none border-[1px] p-2 rounded-lg w-full" />
      </Section>

      <div className="flex justify-between mt-6">
        <button onClick={back} className="btn bg-[#262626] rounded-full text-[#C3FC68] font-bold cursor-pointer hover:bg-[#C3FC68] hover:text-[#262626] px-10 py-2 rounded mt-4 transition-all duration-300">Back</button>
        <button onClick={handleNext} className="btn bg-[#C3FC68] rounded-full text-[#262626] font-bold cursor-pointer hover:bg-[#262626] hover:text-[#C3FC68] px-10 py-2 rounded mt-4 transition-all duration-300">Next</button>
      </div>
    </div>
  );
};

export default DigitalStep;
