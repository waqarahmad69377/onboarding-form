import React, { useState } from 'react';
import Section from "@/components/Section";
const DigitalStep = ({ data = {}, update, next, back }) => {
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
      <h2 className="text-2xl font-bold mb-4">Digital Presence Overview</h2>

      {/* 1. Current Digital Assets */}
      <Section id="digitalAssets" title="1. Current Digital Assets">
        <div className='mb-4'>
          <label className="block font-semibold mb-1">Website Platform <span>*</span></label>
          <select
            name="websitePlatform"
            onChange={handleChange}
            defaultValue={data.websitePlatform || ''}
            className="input border p-2 rounded w-full text-[#000] bg-white"
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
          <label className="block font-semibold mb-1">Facebook Business Page</label>
          <input name="facebook" placeholder="Facebook Business Page" value={data.facebook || ''} onChange={handleChange} className="input border p-2 rounded w-full" />
        </div>
        <div className='mb-4'>
          <label className="block font-semibold mb-1">Instagram Account</label>
        <input name="instagram" placeholder="Instagram Account" value={data.instagram || ''} onChange={handleChange} className="input border p-2 rounded w-full" />
        </div>
        <div className='mb-4'>
          <label className="block font-semibold mb-1">LinkedIn Company Page</label>
        <input name="linkedin" placeholder="LinkedIn Company Page" value={data.linkedin || ''} onChange={handleChange} className="input border p-2 rounded w-full" />
        </div>
        <div className='mb-4'>
          <label className="block font-semibold mb-1">YouTube Channel</label>
          <input name="youtube" placeholder="YouTube Channel" value={data.youtube || ''} onChange={handleChange} className="input border p-2 rounded w-full" />
        </div>
        <div className='mb-4'>
          <label className="block font-semibold mb-1">Other Social Media</label>
        <input name="otherSocial" placeholder="Other Social Media" value={data.otherSocial || ''} onChange={handleChange} className="input border p-2 rounded w-full" />
        </div>
      </Section>

      {/* 2. Brand Assets */}
      <Section id="brandAssets" title="2. Brand Assets">
        <div className="flex items-center gap-4">
          <label>Logo Files Available:</label>
          <label><input type="radio" name="logoAvailable" value="Yes" onChange={handleChange} checked={data.logoAvailable === 'Yes'} /> Yes</label>
          <label><input type="radio" name="logoAvailable" value="No" onChange={handleChange} checked={data.logoAvailable === 'No'} /> No</label>
        </div>
        {data.logoAvailable === 'Yes' && (
          <input name="logoLink" placeholder="Logo Link" value={data.logoLink || ''} onChange={handleChange} className="input border p-2 rounded w-full" />
        )}

        <div className="flex items-center gap-4">
          <label>Brand Guidelines:</label>
          <label><input type="radio" name="brandGuidelines" value="Yes" onChange={handleChange} checked={data.brandGuidelines === 'Yes'} /> Yes</label>
          <label><input type="radio" name="brandGuidelines" value="No" onChange={handleChange} checked={data.brandGuidelines === 'No'} /> No</label>
        </div>
        {data.brandGuidelines === 'Yes' && (
          <input name="brandGuidelinesLink" placeholder="Brand Guidelines Link" value={data.brandGuidelinesLink || ''} onChange={handleChange} className="input border p-2 rounded w-full" />
        )}

        <div className="flex items-center gap-4">
          <label>Professional Photos:</label>
          <label><input type="radio" name="photosAvailable" value="Yes" onChange={handleChange} checked={data.photosAvailable === 'Yes'} /> Yes</label>
          <label><input type="radio" name="photosAvailable" value="No" onChange={handleChange} checked={data.photosAvailable === 'No'} /> No</label>
        </div>
        {data.photosAvailable === 'Yes' && (
          <input name="photosLink" placeholder="Photos Link" value={data.photosLink || ''} onChange={handleChange} className="input border p-2 rounded w-full" />
        )}

        <div className="flex items-center gap-4">
          <label>Video Content:</label>
          <label><input type="radio" name="videoAvailable" value="Yes" onChange={handleChange} checked={data.videoAvailable === 'Yes'} /> Yes</label>
          <label><input type="radio" name="videoAvailable" value="No" onChange={handleChange} checked={data.videoAvailable === 'No'} /> No</label>
        </div>
        {data.videoAvailable === 'Yes' && (
          <input name="videoLink" placeholder="Video Content Link" value={data.videoLink || ''} onChange={handleChange} className="input border p-2 rounded w-full" />
        )}
      </Section>

      {/* 3. Reviews & Testimonials */}
      <Section id="reviews" title="3. Reviews & Testimonials">
        <input name="googleRating" placeholder="Current Google Rating" value={data.googleRating || ''} onChange={handleChange} className="input border p-2 rounded w-full" />
        <input name="testimonial1" placeholder="Featured Testimonial #1" value={data.testimonial1 || ''} onChange={handleChange} className="input border p-2 rounded w-full" />
        <input name="testimonial1Attribution" placeholder="Attribution (Name/Location)" value={data.testimonial1Attribution || ''} onChange={handleChange} className="input border p-2 rounded w-full" />
        <input name="testimonial2" placeholder="Featured Testimonial #2" value={data.testimonial2 || ''} onChange={handleChange} className="input border p-2 rounded w-full" />
        <input name="testimonial2Attribution" placeholder="Attribution (Name/Location)" value={data.testimonial2Attribution || ''} onChange={handleChange} className="input border p-2 rounded w-full" />
      </Section>

      <div className="flex justify-between mt-6">
        <button onClick={back} className="btn bg-[#262626] rounded-full text-[#C3FC68] font-bold cursor-pointer hover:bg-[#C3FC68] hover:text-[#262626] px-10 py-2 rounded mt-4 transition-all duration-300">Back</button>
        <button onClick={handleNext} className="btn bg-[#C3FC68] rounded-full text-[#262626] font-bold cursor-pointer hover:bg-[#262626] hover:text-[#C3FC68] px-10 py-2 rounded mt-4 transition-all duration-300">Next</button>
      </div>
    </div>
  );
};

export default DigitalStep;
