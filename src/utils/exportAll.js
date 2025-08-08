import { saveAs } from 'file-saver';
import JSZip from 'jszip';
import Papa from 'papaparse';
import { exportPDF } from './pdfExport';

export const exportJSON = (data) => {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  saveAs(blob, 'treatment_data.json');
};

export const exportCSV = (data) => {
  const flatData = flattenObject(data);
  const csv = Papa.unparse([flatData]);
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  saveAs(blob, 'treatment_data.csv');
};

export const zipAndDownload = async (data) => {
  const zip = new JSZip();

  // JSON
  zip.file('treatment_data.json', JSON.stringify(data, null, 2));

  // CSV
  const flatData = flattenObject(data);
  const csv = Papa.unparse([flatData]);
  zip.file('treatment_data.csv', csv);

  // PDF (base64 format)
  const pdf = new jsPDF();
  let y = 10;
  pdf.text('Treatment Summary PDF', 10, y);
  y += 10;
  pdf.text(`Company Name: ${data?.core?.companyName || 'N/A'}`, 10, y);
  const pdfBlob = pdf.output('blob');
  zip.file('treatment_summary.pdf', pdfBlob);

  const zipBlob = await zip.generateAsync({ type: 'blob' });
  saveAs(zipBlob, 'treatment_export.zip');
};

const flattenObject = (obj, prefix = '', res = {}) => {
  for (const key in obj) {
    const value = obj[key];
    const newKey = prefix ? `${prefix}.${key}` : key;
    if (value && typeof value === 'object' && !Array.isArray(value)) {
      flattenObject(value, newKey, res);
    } else {
      res[newKey] = value;
    }
  }
  return res;
};
