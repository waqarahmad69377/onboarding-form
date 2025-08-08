import React, { useState } from 'react';

const EOSStep = ({ data = {}, update, next, back }) => {
  const [form, setForm] = useState(data || {});
  const [collapsed, setCollapsed] = useState({});

  const toggleSection = (key) => {
    setCollapsed(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === 'checkbox' ? checked : value;
    const updated = { ...form, [name]: val };
    setForm(updated);
    update(updated);
  };

  const renderInput = (label, name, type = 'text') => (
    <div className="mb-4">
      <label className="block font-semibold mb-1">{label}</label>
      <input
        type={type}
        name={name}
        value={form[name] || ''}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />
    </div>
  );

  const renderTextArea = (label, name) => (
    <div className="mb-4">
      <label className="block font-semibold mb-1">{label}</label>
      <textarea
        name={name}
        value={form[name] || ''}
        onChange={handleChange}
        className="w-full p-2 border rounded"
        rows={3}
      />
    </div>
  );

  const renderCheckbox = (label, name) => (
    <div className="flex items-center gap-2 mb-2">
      <input type="checkbox" name={name} checked={form[name] || false} onChange={handleChange} />
      <label>{label}</label>
    </div>
  );

  const Section = ({ id, title, children }) => (
    <div className="mb-8 border border-gray-300 rounded p-4 bg-white/5">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => toggleSection(id)}
      >
        <h3 className="text-lg font-semibold">{title}</h3>
        <span className="text-xl">{collapsed[id] ? '↓' : '↑'}</span>
      </div>
      {!collapsed[id] && <div className="mt-4">{children}</div>}
    </div>
  );

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Executive Operating Summary</h2>

      <Section id="strategic" title="1. Strategic Positioning">
        {renderInput('Years in Operation', 'yearsInOperation')}
        {renderInput('Founders Names', 'founders')}
        {renderTextArea('Founder Background', 'founderBackground')}
        {renderTextArea('Mission Statement', 'mission')}
        {renderTextArea('Core Values (comma separated)', 'coreValues')}
        {renderTextArea('Your Purpose / Why', 'purpose')}
      </Section>

      <Section id="target" title="2. Target Market & Demographics">
        {renderTextArea('Primary Target Market', 'targetMarket')}
        <label className="block font-semibold mt-2 mb-1">Age Ranges Served:</label>
        {['Adolescents', 'Young Adults', 'Adults', 'Seniors'].map((age) =>
          renderCheckbox(`${age}`, `age_${age.replace(/\s+/g, '').toLowerCase()}`)
        )}
        <label className="block font-semibold mt-4 mb-1">Gender Programs:</label>
        {['Men-only', 'Women-only', 'Co-ed', 'LGBTQ+ specialized'].map((g) =>
          renderCheckbox(`${g} programs`, `gender_${g.replace(/\s+/g, '').toLowerCase()}`)
        )}
        <label className="block font-semibold mt-4 mb-1">Facility Type:</label>
        {[
          'Inpatient Treatment Center',
          'Outpatient Treatment Center',
          'Sober Living Home',
          'Detox Facility',
          'Mental Health Facility',
          'Dual Diagnosis Center'
        ].map((type) =>
          renderCheckbox(type, `facility_${type.replace(/\s+/g, '').toLowerCase()}`)
        )}
        {renderInput('Other', 'facility_other')}
      </Section>

      <Section id="capacity" title="3. Capacity & Operations">
        {renderInput('Total Capacity', 'capacity')}
        {renderInput('Current Census', 'census')}
        {renderInput('Average Length of Stay (days)', 'lengthOfStay')}
        {renderInput('Typical Occupancy Rate (%)', 'occupancy')}
        {renderInput('Average Daily Census', 'dailyCensus')}
      </Section>

      <Section id="services" title="4. Services & Specializations">
        {renderTextArea('Primary Services Offered', 'primaryServices')}
        {renderInput('Top Revenue Service 1', 'revenueService1')}
        {renderInput('Top Revenue Service 2', 'revenueService2')}
        {renderInput('Top Revenue Service 3', 'revenueService3')}
        {renderTextArea('Specializations / Niche', 'specializations')}
        {renderTextArea('Proven Process', 'provenProcess')}
        {renderTextArea('Guarantee', 'guarantee')}
      </Section>

      <Section id="finance" title="5. Financial Performance">
        {renderInput('Annual Revenue Target ($)', 'revenueTarget')}
        {renderInput('YTD Revenue ($)', 'revenueYTD')}
        {renderInput('Average Daily Rate ($)', 'dailyRate')}
        {renderInput('Revenue Per Client ($)', 'revenuePerClient')}
      </Section>

      <Section id="kpi" title="6. Key Performance Indicators">
        {renderInput('Client Completion Rate (%)', 'completionRate')}
        {renderInput('Client Satisfaction Score (/10)', 'clientSatisfaction')}
        {renderInput('Family Satisfaction Score (/10)', 'familySatisfaction')}
        {renderInput('30-Day Readmission Rate (%)', 'readmission30')}
        {renderInput('90-Day Readmission Rate (%)', 'readmission90')}
        {renderInput('Staff Turnover Rate (%)', 'turnoverRate')}
      </Section>

      <Section id="success-metrics" title="7. Success Metrics & Outcomes">
        {renderTextArea('Outcome #1', 'outcome1')}
        {renderTextArea('Outcome #2', 'outcome2')}
        {renderTextArea('Outcome #3', 'outcome3')}
      </Section>

      <Section id="stories" title="8. Measurable Success Stories">
        {renderTextArea('Story #1', 'story1')}
        {renderTextArea('Story #2', 'story2')}
        {renderTextArea('Story #3', 'story3')}
      </Section>

      <Section id="team" title="9. Clinical Team Overview">
        {renderInput('Total Clinical Staff', 'clinicalStaff')}
        {renderInput('Staff to Client Ratio', 'staffRatio')}
        {renderInput('Percent with Masters (%)', 'mastersPercent')}
        {renderInput('Average Years of Experience', 'experience')}
        {renderCheckbox('Medical Director', 'hasMedicalDirector')}
        {renderInput('Medical Director Name/Credentials', 'medicalDirectorName')}
        {renderCheckbox('24/7 Medical Staff', 'hasMedicalStaff')}
      </Section>

      <Section id="competitors" title="10. Competitive Landscape">
        {[1, 2, 3, 4].map((i) => (
          <div key={i}>
            {renderInput(`Competitor ${i}`, `comp${i}`)}
            {renderInput(`Strength ${i}`, `comp${i}Strength`)}
          </div>
        ))}
      </Section>

      <Section id="advantages" title="11. Competitive Advantages">
        {[1, 2, 3].map((i) => (
          <div key={i}>
            {renderInput(`Advantage ${i} - Category`, `advCategory${i}`)}
            {renderInput(`Advantage ${i} - Value`, `advValue${i}`)}
            {renderInput(`Advantage ${i} - Metric`, `advMetric${i}`)}
          </div>
        ))}
      </Section>

      <Section id="growth" title="12. Growth & Market Position">
        {renderInput('Market Share (%)', 'marketShare')}
        {renderCheckbox('Typically Full with Waitlist', 'hasWaitlist')}
        {renderInput('Bed Expansion Plan', 'growthBeds')}
        {renderInput('New Programs', 'growthPrograms')}
        {renderInput('New Services', 'growthServices')}
        {renderInput('Geographic Expansion', 'growthGeo')}
      </Section>

      <div className="flex justify-between mt-6">
        <button onClick={back} className="px-4 py-2 bg-gray-500 text-white rounded">Back</button>
        <button onClick={next} className="px-4 py-2 bg-blue-600 text-white rounded">Next</button>
      </div>
    </div>
  );
};

export default EOSStep;
