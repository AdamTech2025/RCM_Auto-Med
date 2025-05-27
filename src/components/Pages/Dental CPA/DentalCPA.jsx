import React from 'react';
import grp_pic from '../../../assets/grp_1.jpg';

export default function DentalCPA() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[350px] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${grp_pic})` }}>
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4 drop-shadow-lg">AI-Powered RCM for Dental Excellence</h1>
          <p className="text-lg md:text-xl text-white max-w-3xl mx-auto drop-shadow">Streamline your revenue cycle, reduce billing errors, and maximize profitability with our cutting-edge AI tools tailored for dental practices.</p>
        </div>
      </div>
      {/* AI Solutions Section */}
      <div className="max-w-5xl mx-auto py-16 px-4">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-8 text-primary">Unlock Peak Performance with Intelligent RCM</h2>
        <p className="text-lg text-gray-700 text-center mb-12 leading-relaxed">
          Our AI-driven platform automates and optimizes every facet of your dental practice's revenue cycle management. From seamless insurance verification and automated claim generation to proactive denial management and insightful financial analytics, we empower you to enhance efficiency, accelerate payments, and dedicate more time to patient care.
        </p>
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 text-gray-800 text-lg">
          <ul className="list-disc pl-6 space-y-3">
            <li>Automated Claim Submission & Real-time Tracking</li>
            <li>AI-Powered Insurance Eligibility Verification</li>
            <li>Intelligent Denial Prediction & Management</li>
            <li>Automated Remittance Processing & Reconciliation</li>
            <li>AI-Assisted Coding & Compliance Audits</li>
            <li>Reduced Administrative Overhead & Costs</li>
          </ul>
          <ul className="list-disc pl-6 space-y-3">
            <li>Predictive Revenue Cycle Analytics & Reporting</li>
            <li>Automated Patient Billing & Follow-up</li>
            <li>Real-time Performance Dashboards</li>
            <li>Seamless Integration with Dental PMS</li>
            <li>Enhanced Clean Claim Rates</li>
            <li>Faster Reimbursement Cycles</li>
          </ul>
        </div>
      </div>
    </div>
  );
} 