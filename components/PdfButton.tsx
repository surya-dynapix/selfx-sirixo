"use client";

import { FileText } from "lucide-react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export default function PdfButton({ order }: { order: any }) {
  const generatePdf = () => {
    const doc = new jsPDF();
    
    // Header
    doc.setFillColor(185, 28, 28); // Red-600
    doc.rect(0, 0, 210, 40, "F");
    
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(24);
    doc.setFont("helvetica", "bold");
    doc.text("SelfX Hardware Quote", 14, 25);
    
    // Customer Info
    doc.setTextColor(50, 50, 50);
    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.text(`Quote Date: ${new Date(order.createdAt).toLocaleDateString()}`, 14, 55);
    doc.text(`Customer Name: ${order.name}`, 14, 65);
    doc.text(`Email: ${order.email}`, 14, 75);
    doc.text(`Phone: ${order.phone}`, 14, 85);
    if (order.company) doc.text(`Company: ${order.company}`, 14, 95);
    
    // Items Table
    const tableData = order.items.map((item: any) => [
      item.name,
      `₹${item.price.toLocaleString()}`,
      item.quantity,
      `₹${(item.price * item.quantity).toLocaleString()}`
    ]);

    autoTable(doc, {
      startY: 110,
      head: [["Description", "Unit Price", "Qty", "Total"]],
      body: tableData,
      theme: "striped",
      headStyles: { fillColor: [185, 28, 28] }, // Red header
      foot: [["", "", "Grand Total:", `₹${order.total.toLocaleString()}`]],
      footStyles: { fillColor: [240, 240, 240], textColor: [0, 0, 0], fontStyle: "bold" },
    });
    
    // Footer
    const finalY = (doc as any).lastAutoTable.finalY || 200;
    doc.setFontSize(10);
    doc.setTextColor(150, 150, 150);
    doc.text("Thank you for choosing SelfX.", 14, finalY + 20);
    doc.text("All prices are exclusive of applicable Government Fees and Taxes.", 14, finalY + 26);
    
    // Save
    doc.save(`SelfX_Quote_${order.id.slice(-6)}.pdf`);
  };

  return (
    <button 
      onClick={generatePdf}
      className="px-4 py-2 bg-white border border-zinc-200 text-zinc-700 text-xs font-bold rounded-lg hover:bg-zinc-100 transition-colors flex items-center gap-2"
    >
      <FileText className="w-4 h-4" />
      Generate PDF
    </button>
  );
}
