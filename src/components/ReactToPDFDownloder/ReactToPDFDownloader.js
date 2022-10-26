import React from "react";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import { FaDownload } from "react-icons/fa";

const ReactToPDFDownloader = ({ roofElementId, downloadFileName }) => {
  const downloadFileDocument = () => {
    const input = document.getElementById(roofElementId);
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "pt", "a2");
      pdf.addImage(imgData, "JPEG", 0, 0);
      pdf.save(`${downloadFileName}`);
    });
  };

  return (
    <div>
      <button className="btn btn-block mt-5" onClick={downloadFileDocument}>
        Download Page PDF
        <FaDownload className="text-3xl ml-3 p-1 rounded-full bg-slate-500"></FaDownload>
      </button>
    </div>
  );
};

export default ReactToPDFDownloader;
