"use client";
import React from "react";

export default function SettingsPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Top Header */}
      <div className="flex items-center justify-between p-4 border-b shadow-sm">
        <h1 className="text-2xl font-bold">Settings</h1>
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
          
          {/* Middle Icon */}
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

      {/* “Settings” divider */}
      <div className="border-b px-6 py-3">
        <h2 className="sr-only">Divider</h2>
      </div>

      {/* Main Content */}
      <div className="p-6">
        {/* Heading: Profile Settings */}
        <h1 className="text-2xl font-bold mb-6">Profile Settings</h1>

        {/* Boxes */}
        <div className="space-y-4">
          {/* Company Profile */}
          <div className="border border-[#A9CCE3] rounded p-4 hover:bg-[#F0F8FF] cursor-pointer">
            <h2 className="text-xl font-semibold text-[#0C3C78] mb-2">
              Company Profile
            </h2>
            <p className="text-sm text-gray-600">
              Add or Edit Basic Information about your Business
            </p>
          </div>

          {/* Documents */}
          <div className="border border-[#A9CCE3] rounded p-4 hover:bg-[#F0F8FF] cursor-pointer">
            <h2 className="text-xl font-semibold text-[#0C3C78] mb-2">
              Documents
            </h2>
            <p className="text-sm text-gray-600">
              Store Important Business Documents in one place
            </p>
          </div>

          {/* Passwords */}
          <div className="border border-[#A9CCE3] rounded p-4 hover:bg-[#F0F8FF] cursor-pointer">
            <h2 className="text-xl font-semibold text-[#0C3C78] mb-2">
              Passwords
            </h2>
            <p className="text-sm text-gray-600">
              Keep Track of Different Dashboard Logins related to your business
            </p>
          </div>

          {/* Insurance Information */}
          <div className="border border-[#A9CCE3] rounded p-4 hover:bg-[#F0F8FF] cursor-pointer">
            <h2 className="text-xl font-semibold text-[#0C3C78] mb-2">
              Insurance Information
            </h2>
            <p className="text-sm text-gray-600">
              Store all insurance related information in one place
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
