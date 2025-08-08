import React, { useState } from 'react';
import Section from "@/components/Section";
const CoreStep = ({ data = {}, update, next }) => {
  const [errors, setErrors] = useState({});

 const handleChange = (e) => {
    const { name, value } = e.target;
    update({ ...data, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!data.companyName) newErrors.companyName = 'Facility name required';
    if (!data.primaryPhone) newErrors.primaryPhone = 'Phone required';
    if (!data.primaryEmail) {
      newErrors.primaryEmail = 'Email required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.primaryEmail)) {
      newErrors.primaryEmail = 'Enter a valid email address';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validate()) next();
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-[#969696]">Core Facility Information</h2>

      <Section id="contact" title="1. Contact & Identity">
        <div className='mb-4'>
          <label className="block font-semibold mb-1 text-[#969696]">Facility/Company Name <span>*</span></label>
          <input
            type='text'
            name="companyName"
            placeholder="Enter your Facility/Company Name"
            value={data.companyName || ''}
            onChange={handleChange}
            className="input border-[#868686] focus:border-[#C3FC68]/80 outline-none border-[1px] p-2 rounded-lg w-full"
          />
          {errors.companyName && <p className="text-red-500">{errors.companyName}</p>}
        </div>
        <div className='mb-4'>
          <label className="block font-semibold mb-1 text-[#969696]">Legal Company Name</label>
        <input
          type='text'
          name="legalName"
          placeholder="Legal Company Name"
          value={data.legalName || ''}
          onChange={handleChange}
          className="input border-[#868686] focus:border-[#C3FC68]/80 outline-none border-[1px] p-2 rounded-lg w-full"
        />
        </div>
        <div className='mb-4'>
          <label className="block font-semibold mb-1 text-[#969696]">Display Name for Marketing</label>
        <input
          type='text'
          name="displayName"
          placeholder="Display Name for Marketing"
          value={data.displayName || ''}
          onChange={handleChange}
          className="input border-[#868686] focus:border-[#C3FC68]/80 outline-none border-[1px] p-2 rounded-lg w-full"
        />
        </div>

        <div className="mb-4">
          <label className="block font-semibold mb-1 text-[#969696]">Primary Contact Information <span>*</span></label>
          <input
            type='text'
            name="primaryPhone"
            placeholder="Primary Phone"
            value={data.primaryPhone || ''}
            onChange={handleChange}
            className="input border-[#868686] focus:border-[#C3FC68]/80 outline-none border-[1px] p-2 rounded-lg w-full"
          />
          {errors.primaryPhone && <p className="text-red-500">{errors.primaryPhone}</p>}
        </div>
        <div className='mb-4'>
          <label className="block font-semibold mb-1 text-[#969696]">Primary Contact Email <span>*</span></label>
          <input
            type='email'
            name="primaryEmail"
            placeholder="Primary Email"
            value={data.primaryEmail || ''}
            onChange={handleChange}
            className="input border-[#868686] focus:border-[#C3FC68]/80 outline-none border-[1px] p-2 rounded-lg w-full"
          />
          {errors.primaryEmail && <p className="text-red-500">{errors.primaryEmail}</p>}
        </div>
        <div className='mb-4'>
          <label className="block font-semibold mb-1 text-[#969696]">Website URL</label>
        <input
          type='url'
          name="website"
          placeholder="Website URL"
          value={data.website || ''}
          onChange={handleChange}
          className="input border-[#868686] focus:border-[#C3FC68]/80 outline-none border-[1px] p-2 rounded-lg w-full"
        />
        </div>
      </Section>

      <Section id="location" title="2. Location Information">
        <div className='mb-4'>
        <label className="block font-semibold mb-1 text-[#969696]">Primary Business Address</label>
        <input
          type="text"
          name="primaryAddress"
          placeholder="Primary Business Address"
          value={data.primaryAddress || ''}
          onChange={handleChange}
          className="input border-[#868686] focus:border-[#C3FC68]/80 outline-none border-[1px] p-2 rounded-lg w-full"
        />
        </div>
        <div className='mb-4'>
        <label className="block font-semibold mb-1 text-[#969696]">Additional Locations</label>
        <input
          type="text"
          name="additionalLocations"
          placeholder="Additional Locations"
          value={data.additionalLocations || ''}
          onChange={handleChange}
          className="input border-[#868686] focus:border-[#C3FC68]/80 outline-none border-[1px] p-2 rounded-lg w-full"
        />
        </div>
        <div className='mb-4'>
        <label className="block font-semibold mb-1 text-[#969696]">Service Areas (cities/regions served)</label>
        <input
          type="text"
          name="serviceAreas"
          placeholder="Service Areas (cities/regions served)"
          value={data.serviceAreas || ''}
          onChange={handleChange}
          className="input border-[#868686] focus:border-[#C3FC68]/80 outline-none border-[1px] p-2 rounded-lg w-full"
        />
        </div>
        <div className='mb-4'>
        <label className="block font-semibold mb-1 text-[#969696]">Service Radius (miles)</label>
        <input
          name="serviceRadius"
          placeholder="Service Radius (miles)"
          type="number"
          value={data.serviceRadius || ''}
          onChange={handleChange}
          className="input border-[#868686] focus:border-[#C3FC68]/80 outline-none border-[1px] p-2 rounded-lg w-full"
        />
        </div>
      </Section>

      <Section id="google" title="3. Google Business Profile Integration">
        <input
          type="url"
          name="googleProfileUrl"
          placeholder="Google Business Profile URL"
          value={data.googleProfileUrl || ''}
          onChange={handleChange}
          className="input border-[#868686] focus:border-[#C3FC68]/80 outline-none border-[1px] p-2 rounded-lg w-full"
        />
        <p className="text-sm text-gray-500">Entering a URL will auto-populate business details.</p>
        {data.googleProfileUrl && (
          <div className="text-sm bg-gray-200 p-3 rounded-lg mt-2">
            <p className='text-[#000]'>Verified Name: ABC Treatment Center</p>
            <p className='text-[#000]'>Rating: 4.8 stars (132 reviews)</p>
            <p className='text-[#000]'>Business Hours: Mon-Fri 9am-6pm</p>
            <p className='text-[#000]'>Phone: (555) 123-4567</p>
          </div>
        )}
      </Section>

      <button
        onClick={handleNext}
        className="btn bg-[#C3FC68] rounded-full text-[#262626] font-bold cursor-pointer hover:bg-[#262626] hover:text-[#C3FC68] px-10 py-2 mt-4 transition-all duration-300"
      >
        Next
      </button>
    </div>
  );
};

export default CoreStep;
