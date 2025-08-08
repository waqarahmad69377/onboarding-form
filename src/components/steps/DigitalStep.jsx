import React, { useState } from 'react';

const DigitalStep = ({ data = {}, update, next, back }) => {
  const [errors, setErrors] = useState({});
  const [collapsed, setCollapsed] = useState({});

  const toggleSection = (id) => {
    setCollapsed(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleChange = (e) => {
    update({ [e.target.name]: e.target.value });
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

  const Section = ({ id, title, children }) => (
    <div className="mb-6 border border-gray-300 rounded p-4 bg-white/5">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => toggleSection(id)}
      >
        <h3 className="text-lg font-semibold">{title}</h3>
        <span className="text-xl">{collapsed[id] ? '↓' : '↑'}</span>
      </div>
      {!collapsed[id] && <div className="mt-4 space-y-3">{children}</div>}
    </div>
  );

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Digital Presence Overview</h2>

      {/* 1. Current Digital Assets */}
      <Section id="digitalAssets" title="1. Current Digital Assets">
        <select
          name="websitePlatform"
          onChange={handleChange}
          defaultValue={data.websitePlatform || ''}
          className="input border p-2 rounded w-full"
        >
          <option value="">Select Website Platform</option>
          <option value="WordPress">WordPress</option>
          <option value="Squarespace">Squarespace</option>
          <option value="Wix">Wix</option>
          <option value="Custom">Custom</option>
          <option value="None">None</option>
        </select>
        {errors.websitePlatform && <p className="text-red-500 text-sm">{errors.websitePlatform}</p>}

        <input name="facebook" placeholder="Facebook Business Page" value={data.facebook || ''} onChange={handleChange} className="input border p-2 rounded w-full" />
        <input name="instagram" placeholder="Instagram Account" value={data.instagram || ''} onChange={handleChange} className="input border p-2 rounded w-full" />
        <input name="linkedin" placeholder="LinkedIn Company Page" value={data.linkedin || ''} onChange={handleChange} className="input border p-2 rounded w-full" />
        <input name="youtube" placeholder="YouTube Channel" value={data.youtube || ''} onChange={handleChange} className="input border p-2 rounded w-full" />
        <input name="otherSocial" placeholder="Other Social Media" value={data.otherSocial || ''} onChange={handleChange} className="input border p-2 rounded w-full" />
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
        <button onClick={back} className="btn bg-gray-300 text-black px-4 py-2 rounded">Back</button>
        <button onClick={handleNext} className="btn bg-blue-600 text-white px-4 py-2 rounded">Next</button>
      </div>
    </div>
  );
};

export default DigitalStep;
