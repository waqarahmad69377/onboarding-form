import jsPDF from 'jspdf';

export const exportPDF = (data) => {
  const doc = new jsPDF();
  let y = 10;

  const addSection = (title, fields) => {
    doc.setFontSize(14);
    doc.text(title, 10, y);
    y += 8;

    doc.setFontSize(10);
    fields.forEach(([label, value]) => {
      doc.text(`${label}: ${value || 'N/A'}`, 10, y);
      y += 6;
    });

    y += 4;
  };

  addSection('Basic Info', [
    ['Company Name', data?.core?.companyName],
    ['Primary Phone', data?.core?.phone],
  ]);

  addSection('EOS', [
    ['Years in Operation', data?.eos?.years],
    ['Mission', data?.eos?.mission],
  ]);

  addSection('Digital', [
    ['Website Platform', data?.digital?.websitePlatform],
  ]);

  addSection('Technical', [
    ['Domain Provider', data?.technical?.domain],
  ]);

  addSection('Services', [
    ['Landing Page', data?.services?.landingPage ? 'Yes' : 'No'],
    ['Sober Living', data?.services?.soberLiving ? 'Yes' : 'No'],
    ['AdWords', data?.services?.adwords ? 'Yes' : 'No'],
  ]);

  doc.save('treatment_summary.pdf');
};
