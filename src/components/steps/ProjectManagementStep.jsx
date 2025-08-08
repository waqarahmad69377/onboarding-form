import React, { useState } from 'react';
import Section from '@/components/Section';

const ProjectManagementStep = ({ data = {}, update, next, back }) => {
  const [form, setForm] = useState(data || {});

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    const val = type === 'checkbox' ? checked : value;
    const updated = { ...form, [name]: val };
    setForm(updated);
    update(updated);
  };

  const renderCheckboxGroup = (name, options) => (
    <div className="flex flex-wrap gap-4">
      {options.map((opt) => (
        <label key={opt} className="flex items-center gap-2">
          <input
            type="checkbox"
            name={name + '_' + opt.toLowerCase().replace(/\s+/g, '')}
            checked={form[name + '_' + opt.toLowerCase().replace(/\s+/g, '')] || false}
            onChange={handleChange}
          />
          {opt}
        </label>
      ))}
    </div>
  );

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Project Management</h2>

      <Section id="communication" title="1. Communication Preferences">
        <input
          name="primaryContact"
          placeholder="Primary Project Contact"
          value={form.primaryContact || ''}
          onChange={handleChange}
          className="input border p-2 rounded w-full"
        />

        <label className="block font-semibold mt-2 mb-1">Preferred Communication Method:</label>
        {renderCheckboxGroup('commMethod', ['Email', 'Phone', 'Text', 'Video Calls'])}

        <input
          name="bestContactTimes"
          placeholder="Best Times to Contact"
          value={form.bestContactTimes || ''}
          onChange={handleChange}
          className="input border p-2 rounded w-full mt-2"
        />

        <label className="block font-semibold mt-2 mb-1">Update Frequency:</label>
        {renderCheckboxGroup('updateFreq', ['Daily', 'Weekly', 'Bi-weekly', 'Monthly'])}

        <label className="block font-semibold mt-2 mb-1">Meeting Preference:</label>
        {renderCheckboxGroup('meetingPref', ['Weekly', 'Bi-weekly', 'Monthly', 'As Needed'])}
      </Section>

      <Section id="timeline" title="2. Timeline & Expectations">
        <input
          name="launchDate"
          placeholder="Target Launch Date"
          value={form.launchDate || ''}
          onChange={handleChange}
          className="input border p-2 rounded w-full"
        />

        <label className="block font-semibold mt-2 mb-1">Priority Level:</label>
        {renderCheckboxGroup('priority', ['Rush', 'Standard', 'Flexible'])}

        <input
          name="blackoutDates"
          placeholder="Blackout Dates/Busy Periods"
          value={form.blackoutDates || ''}
          onChange={handleChange}
          className="input border p-2 rounded w-full mt-2"
        />

        <input
          name="decisionMakers"
          placeholder="Key Decision Makers"
          value={form.decisionMakers || ''}
          onChange={handleChange}
          className="input border p-2 rounded w-full mt-2"
        />

        <input
          name="approvalProcess"
          placeholder="Approval Process"
          value={form.approvalProcess || ''}
          onChange={handleChange}
          className="input border p-2 rounded w-full mt-2"
        />
      </Section>

      <Section id="successDefinition" title="3. Success Definition">
        <input
          name="success30"
          placeholder="30-Day Success Looks Like"
          value={form.success30 || ''}
          onChange={handleChange}
          className="input border p-2 rounded w-full"
        />

        <input
          name="success90"
          placeholder="90-Day Success Looks Like"
          value={form.success90 || ''}
          onChange={handleChange}
          className="input border p-2 rounded w-full mt-2"
        />

        <input
          name="completeSuccess"
          placeholder="Complete Success Means"
          value={form.completeSuccess || ''}
          onChange={handleChange}
          className="input border p-2 rounded w-full mt-2"
        />

        <input
          name="biggestChallenge"
          placeholder="Biggest Concern/Challenge"
          value={form.biggestChallenge || ''}
          onChange={handleChange}
          className="input border p-2 rounded w-full mt-2"
        />
      </Section>

      <div className="flex justify-between mt-6">
        <button
          onClick={back}
          className="btn bg-[#262626] rounded-full text-[#C3FC68] font-bold hover:bg-[#C3FC68] hover:text-[#262626] px-10 py-2 transition-all duration-300"
        >
          Back
        </button>
        <button
          onClick={next}
          className="btn bg-[#C3FC68] rounded-full text-[#262626] font-bold hover:bg-[#262626] hover:text-[#C3FC68] px-10 py-2 transition-all duration-300"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProjectManagementStep;
