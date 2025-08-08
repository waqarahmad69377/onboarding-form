import jsPDF from 'jspdf';

export const exportPDF = (data) => {
  const doc = new jsPDF();
  let y = 20;

  const addSection = (title, fields) => {
    doc.setFontSize(14);
    doc.setTextColor(33, 37, 41);
    doc.setFont('helvetica', 'bold');
    doc.text(title, 10, y);
    y += 8;

    doc.setFontSize(11);
    doc.setFont('helvetica', 'normal');

    fields.forEach(([label, value]) => {
      const text = `${label}: ${value || 'N/A'}`;
      const splitText = doc.splitTextToSize(text, 180);
      doc.text(splitText, 10, y);
      y += splitText.length * 6;
    });

    y += 6;
    if (y > 270) {
      doc.addPage();
      y = 20;
    }
  };

  // CORE STEP
  addSection('🏢 Core Information', [
    ['Company Name', data?.core?.companyName],
    ['DBA (Doing Business As)', data?.core?.dba],
    ['Facility Type', data?.core?.facilityType],
    ['Website', data?.core?.website],
    ['Phone', data?.core?.phone],
    ['Email', data?.core?.email],
    ['Address', data?.core?.address],
    ['City', data?.core?.city],
    ['State', data?.core?.state],
    ['Zip Code', data?.core?.zip],
    ['Years in Operation', data?.core?.years],
  ]);

  // EOS STEP
  addSection('📊 Executive Operating Summary (EOS)', [
    ['Years in Operation', data?.eos?.years],
    ['Mission Statement', data?.eos?.mission],
    ['Core Values', data?.eos?.coreValues],
    ['Unique Selling Proposition', data?.eos?.usp],
    ['Target Demographics', data?.eos?.target],
    ['Treatment Modalities', data?.eos?.modalities],
    ['Licensing Info', data?.eos?.licensing],
    ['Insurance Accepted', data?.eos?.insuranceAccepted],
    ['Special Programs', data?.eos?.specialPrograms],
    ['Outcomes Tracked', data?.eos?.outcomes],
    ['Staff Credentials', data?.eos?.staff],
    ['Alumni Engagement', data?.eos?.alumni],
  ]);

  // DIGITAL STEP
  addSection('💻 Digital Presence', [
    ['Website Platform', data?.digital?.websitePlatform],
    ['Facebook Page', data?.digital?.facebook],
    ['Instagram', data?.digital?.instagram],
    ['LinkedIn', data?.digital?.linkedin],
    ['YouTube', data?.digital?.youtube],
    ['Other Social Media', data?.digital?.otherSocial],
    ['Logo Available', data?.digital?.logoAvailable],
    ['Logo Link', data?.digital?.logoLink],
    ['Brand Guidelines', data?.digital?.brandGuidelines],
    ['Brand Guidelines Link', data?.digital?.brandGuidelinesLink],
    ['Professional Photos', data?.digital?.photosAvailable],
    ['Photos Link', data?.digital?.photosLink],
    ['Video Content', data?.digital?.videoAvailable],
    ['Video Link', data?.digital?.videoLink],
    ['Google Rating', data?.digital?.googleRating],
    ['Testimonial 1', data?.digital?.testimonial1],
    ['Attribution 1', data?.digital?.testimonial1Attribution],
    ['Testimonial 2', data?.digital?.testimonial2],
    ['Attribution 2', data?.digital?.testimonial2Attribution],
  ]);

  // TECHNICAL STEP
  addSection('🛠 Technical Details', [
    ['Domain Provider', data?.technical?.domainProvider],
    ['Hosting', data?.technical?.hosting],
    ['Email System', data?.technical?.emailSystem],
    ['Email System (Other)', data?.technical?.emailSystemOther],
    ['Phone System', data?.technical?.phoneSystem],
    ['CRM System', data?.technical?.crmSystem],
    ['CRM System (Other)', data?.technical?.crmSystemOther],
    ['Google Analytics', data?.technical?.googleanalytics],
    ['Google Search Console', data?.technical?.googlesearchconsole],
    ['Google My Business', data?.technical?.googlemybusiness],
    ['Google Tag Manager', data?.technical?.googletagmanager],
    ['Website Admin Access', data?.technical?.websiteadminaccess],
    ['Domain Access', data?.technical?.domainprovideraccess],
    ['CRM Access', data?.technical?.crmaccess],
    ['Phone Access', data?.technical?.phonesystemaccess],
    ['Social Media Access', data?.technical?.socialmediaadminaccess],
  ]);

  // SERVICES STEP
  addSection('🧩 Services Selected', [
    ['Landing Page Creation', data?.services?.landingPage ? 'Yes' : 'No'],
    ['Sober Living Website', data?.services?.soberLiving ? 'Yes' : 'No'],
    ['AdWords Campaign', data?.services?.adwords ? 'Yes' : 'No'],
  ]);

  // LANDING PAGE
  if (data?.services?.landingPage) {
    addSection('📄 Landing Page Content', [
      ['Headline', data?.landing?.headline],
      ['Subheadline', data?.landing?.subheadline],
      ['Key Benefits', data?.landing?.keyBenefits],
      ['Pain Points', data?.landing?.painPoints],
      ['Form Fields Other', data?.landing?.formField_other],
      ['Submission Email', data?.landing?.submissionEmail],
      ['Thank You Message', data?.landing?.thankYouMessage],
      ['Follow-up Process', data?.landing?.followUpProcess],
      ['Success Metrics', data?.landing?.successMetrics],
    ]);
  }

  // PROJECT MANAGEMENT (optional if added)
  if (data?.project) {
    addSection('📅 Project Management', [
      ['Primary Contact', data?.project?.contact],
      ['Preferred Communication', data?.project?.communication],
      ['Best Times', data?.project?.bestTimes],
      ['Update Frequency', data?.project?.frequency],
      ['Meeting Preference', data?.project?.meetings],
      ['Target Launch Date', data?.project?.launchDate],
      ['Priority Level', data?.project?.priority],
      ['Blackout Dates', data?.project?.blackout],
      ['Key Decision Makers', data?.project?.decisionMakers],
      ['Approval Process', data?.project?.approval],
      ['30 Day Success', data?.project?.success30],
      ['90 Day Success', data?.project?.success90],
      ['Complete Success', data?.project?.completeSuccess],
      ['Main Challenge', data?.project?.challenge],
    ]);
  }

  doc.save('onboarding_summary.pdf');
};
