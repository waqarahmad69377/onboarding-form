import React from 'react';
import { exportPDF } from '@/utils/pdfExport';
import { exportJSON, exportCSV, zipAndDownload } from '@/utils/exportAll';
import Section from '@/components/Section';

const ReviewStep = ({ data = {}, back, next }) => {
  const {
    core = {},
    eos = {},
    digital = {},
    technical = {},
    services = {},
    landing = {},
    project = {},
  } = data;

  const renderField = (label, value) => (
    <p><strong>{label}:</strong> {value || 'N/A'}</p>
  );

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">📋 Review Your Submission</h2>
      <p className="mb-6">Please review the information below. If everything looks good, click "Submit" to complete the onboarding process.</p>
      <p className="mb-6">If you need to make changes, click "Back" to return to the previous step.</p>
      <Section id={"core"} title={"Core"} className="mb-6">
        <p className="text-sm text-gray-500">Review the core facility information you provided.</p>
        {/* Core Info */}
        <div className="bg-white/10 p-4 rounded shadow mb-4">
          <h3 className="font-semibold text-lg mb-2">🏢 Core Facility Info</h3>
          {renderField('Company Name', core.companyName)}
          {renderField('Legal Name', core.legalName)}
          {renderField('Display Name', core.displayName)}
          {renderField('Primary Phone', core.primaryPhone)}
          {renderField('Primary Email', core.primaryEmail)}
          {renderField('Website', core.website)}
        </div>
      </Section>
      <Section id={"eos"} title={"Executive Operating Summary"} className="mb-6">
        <p className="text-sm text-gray-500">Review the executive operating summary details you provided.</p>
      {/* EOS */}
      <div className="bg-white/10 p-4 rounded shadow mb-4">
        <h3 className="font-semibold text-lg mb-2">📊 Executive Operating Summary (EOS)</h3>
        {renderField('Years in Operation', eos.years)}
        {renderField('Ownership Structure', eos.ownership)}
        {renderField('Capacity', eos.capacity)}
        {renderField('Staff Size', eos.staffSize)}
      </div>
      </Section>
      <Section id={"digital"} title={"Digital Presence"} className="mb-6">
        <p className="text-sm text-gray-500">Review the digital presence details you provided.</p>
      {/* Digital */}
      <div className="bg-white/10 p-4 rounded shadow mb-4">
        <h3 className="font-semibold text-lg mb-2">💻 Digital Presence</h3>
        {renderField('Website Platform', digital.websitePlatform)}
        {renderField('Facebook', digital.facebook)}
        {renderField('Instagram', digital.instagram)}
        {renderField('LinkedIn', digital.linkedin)}
        {renderField('YouTube', digital.youtube)}
        {renderField('Other Social Media', digital.otherSocial)}
      </div>
      </Section>
      <Section id={"technical"} title={"Technical Overview"} className="mb-6">
        <p className="text-sm text-gray-500">Review the technical overview details you provided.</p>
      {/* Technical */}
      <div className="bg-white/10 p-4 rounded shadow mb-4">
        <h3 className="font-semibold text-lg mb-2">🛠 Technical Information</h3>
        {renderField('Domain Provider', technical.domainProvider)}
        {renderField('Hosting', technical.hosting)}
        {renderField('Phone System', technical.phoneSystem)}
        {renderField('Email System', technical.emailSystem)}
        {renderField('CRM System', technical.crmSystem)}
      </div>
      </Section>
      <Section id={"services"} title={"Services"} className="mb-6">
        <p className="text-sm text-gray-500">Review the services you selected.</p>

      {/* Services */}
      <div className="bg-white/10 p-4 rounded shadow mb-4">
        <h3 className="font-semibold text-lg mb-2">🧩 Selected Services</h3>
        {renderField('Landing Page', services.landingPage ? 'Yes' : 'No')}
        {renderField('Sober Living Website', services.soberLiving ? 'Yes' : 'No')}
        {renderField('AdWords Campaign', services.adwords ? 'Yes' : 'No')}
      </div>

      {/* Landing Page (if selected) */}
      {services.landingPage && (
        <div className="bg-white/10 p-4 rounded shadow mb-4">
          <h3 className="font-semibold text-lg mb-2">📄 Landing Page</h3>
          {renderField('Headline', landing.headline)}
          {renderField('Subheadline', landing.subheadline)}
          {renderField('Benefits', landing.benefits)}
          {renderField('Pain Points', landing.painPoints)}
          {renderField('Form Submission Email', landing.submissionEmail)}
        </div>
      )}
      </Section>
      <Section id={"project"} title={"Project Management"} className="mb-6">
        <p className="text-sm text-gray-500">Review the project management details you provided.</p>
      {/* Project Management */}
      {project && (
        <div className="bg-white/10 p-4 rounded shadow mb-4">
          <h3 className="font-semibold text-lg mb-2">🗂 Project Management</h3>
          {renderField('Primary Contact', project.primaryContact)}
          {renderField('Communication Method', project.communicationMethod)}
          {renderField('Best Time to Contact', project.bestTimes)}
          {renderField('Update Frequency', project.updateFrequency)}
          {renderField('Meeting Preference', project.meetingPreference)}
          {renderField('Launch Date', project.launchDate)}
          {renderField('Priority Level', project.priorityLevel)}
          {renderField('Busy Periods', project.blackoutDates)}
          {renderField('Decision Makers', project.keyDecisionMakers)}
          {renderField('Approval Process', project.approvalProcess)}
          {renderField('30-Day Success', project.success30)}
          {renderField('90-Day Success', project.success90)}
          {renderField('Full Success', project.completeSuccess)}
          {renderField('Biggest Concern', project.concern)}
        </div>
      )}
      </Section>
      
      {/* Export Buttons */}
      <div className="mt-6 flex flex-wrap gap-4">
        <button
          onClick={() => exportPDF(data)}
          className="bg-rose-600 hover:bg-rose-700 text-white px-4 py-2 rounded"
        >
          Download PDF
        </button>
        <button
          onClick={() => exportJSON(data)}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
        >
          Download JSON
        </button>
        <button
          onClick={() => exportCSV(data)}
          className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded"
        >
          Download CSV
        </button>
        <button
          onClick={() => zipAndDownload(data)}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded"
        >
          Export All (ZIP)
        </button>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-8">
        <button
          onClick={back}
          className="btn bg-[#262626] rounded-full text-[#C3FC68] font-bold cursor-pointer hover:bg-[#C3FC68] hover:text-[#262626] px-10 py-2 mt-4 transition-all duration-300"
        >
          Back
        </button>
        <button
          onClick={next}
          className="btn bg-[#C3FC68] rounded-full text-[#262626] font-bold cursor-pointer hover:bg-[#262626] hover:text-[#C3FC68] px-10 py-2 mt-4 transition-all duration-300"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default ReviewStep;
