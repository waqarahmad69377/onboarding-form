import React, { useState } from 'react';
import Section from "@/components/Section";
const EOSStep = ({ data = {}, update, next, back }) => {
  const [form, setForm] = useState(data || {});
  const [errors, setErrors] = useState({});
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === 'checkbox' ? checked : value;
    update({ ...data, [name]: val });
    setForm(prev => ({ ...prev, [name]: val }));
  };
  const validate = () => {
    const newErrors = {};
    if (!form.yearsInOperation) newErrors.yearsInOperation = 'Years in operation is required';
    if (!form.founders) newErrors.founders = 'Founders names are required';
    if (!form.mission) newErrors.mission = 'Mission statement is required';
    if (!form.purpose) newErrors.purpose = 'Purpose is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const renderInput = (label, name, type = 'text') => (
    <div className="mb-4">
      <label className="block font-semibold mb-1 text-[#969696]">{label}</label>
      <input
        type={type}
        name={name}
        placeholder={"Enter "+label}
        value={form[name] || ''}
        onChange={handleChange}
        className="input border-[#868686] focus:border-[#C3FC68]/80 outline-none border-[1px] p-2 rounded-lg w-full"
      />
    </div>
  );

  const renderTextArea = (label, name) => (
    <div className="mb-4">
      <label className="block font-semibold mb-1 text-[#969696]">{label}</label>
      <textarea
        name={name}
        value={form[name] || ''}
        placeholder='Enter your text here...'
        onChange={handleChange}
        className="border-[#868686] focus:border-[#C3FC68]/80 outline-none border-[1px] p-2 rounded-lg w-full"
        rows={3}
      />
    </div>
  );

  const RenderCheckbox = ({label, name}) => {return(
    <div className="flex items-center gap-2 mb-2">
      <label className="flex items-center cursor-pointer">
        <input
          type="checkbox"
          name={name}
          checked={form[name] || false}
          onChange={handleChange}
          className="peer sr-only"
        />
        <span className="w-5 h-5 flex items-center justify-center border-2 border-[#969696] rounded transition-colors peer-checked:bg-[#C3FC68] peer-checked:border-[#C3FC68]">
          {form[name] && (
            <svg className="w-4 h-4 text-[#262626]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          )}
        </span>
        <span className="ml-2">{label}</span>
      </label>
    </div>
  )};

  // valide the form before proceeding
  const handleNext = () => {
    if (validate()) {
      next();
    }
  };  

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-[#969696]">Executive Operating Summary</h2>

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
        <div className='flex flex-wrap gap-4 mb-2'>
          {['Adolescents', 'Young Adults', 'Adults', 'Seniors'].map((age) =>
            // renderCheckbox(`${age}`, `age_${age.replace(/\s+/g, '').toLowerCase()}`)
            <RenderCheckbox key={age} label={age} name={`age_${age.replace(/\s+/g, '').toLowerCase()}`} />
          )}
        </div>
        <label className="block font-semibold mt-4 mb-1">Gender Programs:</label>
        <div className='flex flex-wrap gap-4 mb-2'>
        {['Men-only', 'Women-only', 'Co-ed', 'LGBTQ+ specialized'].map((g) =>
          // renderCheckbox(`${g} programs`, `gender_${g.replace(/\s+/g, '').toLowerCase()}`)
          <RenderCheckbox key={g} label={g} name={`gender_${g.replace(/\s+/g, '').toLowerCase()}`} />
        )}
        </div>
        <label className="block font-semibold mt-4 mb-1">Facility Type:</label>
        <div className='flex flex-wrap gap-4 mb-2'>
        {[
          'Inpatient Treatment Center',
          'Outpatient Treatment Center',
          'Sober Living Home',
          'Detox Facility',
          'Mental Health Facility',
          'Dual Diagnosis Center'
        ].map((type) =>
          // renderCheckbox(type, `facility_${type.replace(/\s+/g, '').toLowerCase()}`)
          <RenderCheckbox key={type} label={type} name={`facility_${type.replace(/\s+/g, '').toLowerCase()}`} />
        )}
        </div>
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
        <RenderCheckbox label="Medical Director" name="hasMedicalDirector" />
        {renderInput('Medical Director Name/Credentials', 'medicalDirectorName')}
        <RenderCheckbox label="24/7 Medical Staff" name="hasMedicalStaff" />
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
        <RenderCheckbox label="Typically Full with Waitlist" name="hasWaitlist" />
        {renderInput('Bed Expansion Plan', 'growthBeds')}
        {renderInput('New Programs', 'growthPrograms')}
        {renderInput('New Services', 'growthServices')}
        {renderInput('Geographic Expansion', 'growthGeo')}
      </Section>

      <div className="flex justify-between mt-6">
        <button onClick={back} className="btn bg-[#262626] rounded-full text-[#C3FC68] font-bold cursor-pointer hover:bg-[#C3FC68] hover:text-[#262626] px-10 py-2 rounded mt-4 transition-all duration-300">Back</button>
        <button onClick={next} className="btn bg-[#C3FC68] rounded-full text-[#262626] font-bold cursor-pointer hover:bg-[#262626] hover:text-[#C3FC68] px-10 py-2 rounded mt-4 transition-all duration-300">Next</button>
      </div>
    </div>
  );
};

export default EOSStep;
