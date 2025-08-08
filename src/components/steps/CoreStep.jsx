import React, { useState } from 'react';

const CoreStep = ({ data = {}, update, next }) => {
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
    if (!data.companyName) newErrors.companyName = 'Facility name required';
    if (!data.primaryPhone) newErrors.primaryPhone = 'Phone required';
    if (!data.primaryEmail) newErrors.primaryEmail = 'Email required';
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
      <h2 className="text-2xl font-bold mb-4">Core Facility Information</h2>

      <Section id="contact" title="1. Contact & Identity">
        <div>
          <input
            name="companyName"
            placeholder="Facility/Company Name"
            value={data.companyName || ''}
            onChange={handleChange}
            className="input border p-2 rounded w-full"
          />
          {errors.companyName && <p className="text-red-500">{errors.companyName}</p>}
        </div>
        <input
          name="legalName"
          placeholder="Legal Company Name"
          value={data.legalName || ''}
          onChange={handleChange}
          className="input border p-2 rounded w-full"
        />
        <input
          name="displayName"
          placeholder="Display Name for Marketing"
          value={data.displayName || ''}
          onChange={handleChange}
          className="input border p-2 rounded w-full"
        />
        <div>
          <input
            name="primaryPhone"
            placeholder="Primary Phone"
            value={data.primaryPhone || ''}
            onChange={handleChange}
            className="input border p-2 rounded w-full"
          />
          {errors.primaryPhone && <p className="text-red-500">{errors.primaryPhone}</p>}
        </div>
        <div>
          <input
            name="primaryEmail"
            placeholder="Primary Email"
            value={data.primaryEmail || ''}
            onChange={handleChange}
            className="input border p-2 rounded w-full"
          />
          {errors.primaryEmail && <p className="text-red-500">{errors.primaryEmail}</p>}
        </div>
        <input
          name="website"
          placeholder="Website URL"
          value={data.website || ''}
          onChange={handleChange}
          className="input border p-2 rounded w-full"
        />
      </Section>

      <Section id="location" title="2. Location Information">
        <input
          name="primaryAddress"
          placeholder="Primary Business Address"
          value={data.primaryAddress || ''}
          onChange={handleChange}
          className="input border p-2 rounded w-full"
        />
        <input
          name="additionalLocations"
          placeholder="Additional Locations"
          value={data.additionalLocations || ''}
          onChange={handleChange}
          className="input border p-2 rounded w-full"
        />
        <input
          name="serviceAreas"
          placeholder="Service Areas (cities/regions served)"
          value={data.serviceAreas || ''}
          onChange={handleChange}
          className="input border p-2 rounded w-full"
        />
        <input
          name="serviceRadius"
          placeholder="Service Radius (miles)"
          type="number"
          value={data.serviceRadius || ''}
          onChange={handleChange}
          className="input border p-2 rounded w-full"
        />
      </Section>

      <Section id="google" title="3. Google Business Profile Integration">
        <input
          name="googleProfileUrl"
          placeholder="Google Business Profile URL"
          value={data.googleProfileUrl || ''}
          onChange={handleChange}
          className="input border p-2 rounded w-full"
        />
        <p className="text-sm text-gray-500">Entering a URL will auto-populate business details.</p>
        {data.googleProfileUrl && (
          <div className="text-sm bg-gray-100 p-3 rounded mt-2">
            <p>Verified Name: ABC Treatment Center</p>
            <p>Rating: 4.8 stars (132 reviews)</p>
            <p>Business Hours: Mon-Fri 9am-6pm</p>
            <p>Phone: (555) 123-4567</p>
          </div>
        )}
      </Section>

      <button
        onClick={handleNext}
        className="btn bg-blue-600 text-white px-4 py-2 rounded mt-4"
      >
        Next
      </button>
    </div>
  );
};

export default CoreStep;
