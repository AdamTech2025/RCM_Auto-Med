import React from 'react';
import grp_pic from '../../assets/grp_1.jpg';

export default function DentalCPA() {
  return (
    <div className="bg-black/12 min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[350px] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${grp_pic})` }}>
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-4 drop-shadow-lg">Dental Accounting Group</h1>
          <p className="text-lg md:text-xl text-white max-w-2xl mx-auto drop-shadow">Headquartered in the Pacific Northwest, serving dentists nationwide, Dental Accounting Group is a fast growing accounting services firm that specializes in bookkeeping, tax & business advisory for dental practice owners.</p>
        </div>
      </div>
      {/* Mission Section */}
      <div className="max-w-5xl mx-auto py-16 px-4">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-8" style={{ color: '#6bbf43' }}>Our Mission</h2>
        <p className="text-lg text-gray-700 text-center mb-8">Our mission is to help as many dentists as we can become successful in the business of dentistry. We provide full service bookkeeping, tax services and business advisory for dental practice owners so that they can better monitor, manage and improve their operating performance and profitability. We are your Dental Accounting Group.</p>
        <div className="grid md:grid-cols-2 gap-8 text-gray-800 text-lg">
          <ul className="list-disc pl-6 space-y-2">
            <li>Business & Personal Tax Services</li>
            <li>Full Service Bookkeeping</li>
            <li>QuickBooks & Advisory Support</li>
            <li>Acquisition & Start-Up Services</li>
            <li>Planning & Management Advisory</li>
            <li>Local & State Tax Filings</li>
          </ul>
          <ul className="list-disc pl-6 space-y-2">
            <li>Patient Management System Deposit Reconciliation</li>
            <li>Payroll Services</li>
            <li>Bill Pay Services</li>
            <li>Insurance Credentialing</li>
            <li>Continuing Business Education</li>
          </ul>
        </div>
      </div>
    </div>
  );
} 