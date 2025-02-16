"use client";
import React from "react";

export default function CompanyProfilePage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Top Header */}
      <div className="flex items-center justify-between p-4 border-b shadow-sm">
        <h1 className="text-2xl font-bold">Company Profile</h1>
        <div className="flex items-center space-x-4">
          {/* Notification button with icon */}
          <button
            className="relative p-2"
            style={{ marginLeft: "-19px" }}
            aria-label="Notifications"
          >
            <span className="material-icons text-gray-600">notifications</span>
            <span className="absolute top-1 right-1 bg-green-500 w-2 h-2 rounded-full" />
          </button>

          {/* Chat button with icon */}
          <button className="p-2" aria-label="Messages">
            <span className="material-icons text-gray-600">chat</span>
          </button>

          {/* Search button with icon */}
          <button className="p-2" aria-label="Search">
            <span className="material-icons text-gray-600">search</span>
          </button>

          {/* “WC” logo/avatar */}
          <div className="w-10 h-10 rounded-full border flex items-center justify-center font-bold text-black bg-white shadow">
            WC
          </div>
        </div>
      </div>

      {/* Horizontal Divider */}
      <div className="border-b px-6 py-3">
        <h2 className="sr-only">Divider</h2>
      </div>

      {/* Main Content */}
      <div className="p-6">
        

        {/* Two-column layout for details */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div>
            {/* Basic Information */}
            <h3 className="text-xl font-semibold mb-4 border-b pb-2">
              Basic Information
            </h3>
            <ul className="space-y-1 text-gray-700">
              <li>Company Name (as shown in W9):</li>
              <li>Address:</li>
              <li>Satellite Office Address (if applicable):</li>
              <li>Organization Type:</li>
              <li>Year of Establishment:</li>
              <li>Annual Revenue (2023):</li>
              <li>Total Revenue (Last 5 years):</li>
              <li>Accepted Payment Methods:</li>
              <li>NAICS (North American Industry Classification System):</li>
              <li>DUNS (Data Universal Numbering System):</li>
            </ul>

            {/* Contact Information */}
            <h3 className="text-xl font-semibold mt-8 mb-4 border-b pb-2">
              Contact Information
            </h3>
            <ul className="space-y-1 text-gray-700">
              <li>
                Dispatch Supervisor (In Charge of Scheduling/Incoming Calls):
              </li>
              <li>
                Field Supervisor (Technical Aspects, On-Ground Services):
              </li>
              <li>
                Management Supervisor (Onboarding &amp; Macro-Level Decisions):
              </li>
              <li>Regular Hours (Email &amp; Phone Number):</li>
              <li>Emergency Hours (Email &amp; Phone Number):</li>
            </ul>

            {/* Client References */}
            <h3 className="text-xl font-semibold mt-8 mb-4 border-b pb-2">
              Client References
            </h3>
            <p className="text-gray-700">
              <em>Company Name | Contact Name | Email | Phone Number</em>
            </p>
          </div>

          {/* Right Column */}
          <div>
            {/* Service Information */}
            <h3 className="text-xl font-semibold mb-4 border-b pb-2">
              Service Information
            </h3>
            <ul className="space-y-1 text-gray-700">
              <li>Coverage Area (Cities):</li>
              <li>Number of Admin Staff:</li>
              <li>Number of Field Staff:</li>
              <li>License(s):</li>
              <li>Working Hours:</li>
              <li>Do you cover afterhours?</li>
              <li>Do you cover weekend calls?</li>
            </ul>

            {/* Load Information */}
            <h3 className="text-xl font-semibold mt-8 mb-4 border-b pb-2">
              Load Information
            </h3>
            <ul className="space-y-1 text-gray-700">
              <li>Average monthly work tickets (last 4 months):</li>
              <li>
                Percentage Split of PO source (e.g. 30% Residential, 50% Commercial,
                20% Industrial):
              </li>
              <li>Current Monthly PO capacity (Maximum capacity):</li>
              <li># of POs with current staff and capabilities:</li>
            </ul>

            {/* Trade Information */}
            <h3 className="text-xl font-semibold mt-8 mb-4 border-b pb-2">
              Trade Information
            </h3>
            <ul className="space-y-1 text-gray-700">
              <li>Services/Industries Covered:</li>
              <li>Special Licenses/Certifications:</li>
              <li>Manufacturer Partnerships, etc.:</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
