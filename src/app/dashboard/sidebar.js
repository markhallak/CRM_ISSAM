"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button"; // if you want to use it for styling

// Extracted sidebar content to reuse in both desktop and mobile menus
function SidebarContent() {
  return (
    <div className="relative h-full">
      {/* Logo / Title */}
      <h1 className="text-2xl font-bold text-[#0C3C78] mb-2">
        Wang Construction
      </h1>
      <div className="text-xs uppercase text-gray-600 tracking-wide mb-8">
        Admin
      </div>

      {/* Navigation Links */}
      <nav className="space-y-2">
        <div className="flex items-center space-x-2 p-2 rounded hover:bg-[#649BD2] hover:text-white cursor-pointer">
          <span className="material-icons">dashboard</span>
          <span>Dashboard</span>
        </div>

        <div className="flex items-center space-x-2 p-2 rounded hover:bg-[#649BD2] hover:text-white cursor-pointer">
          <span className="material-icons">assessment</span>
          <span>Projects</span>
        </div>

        {/* Active Link */}
        <div className="flex items-center space-x-2 p-2 rounded hover:bg-[#649BD2] hover:text-white cursor-pointer">
          <span className="material-icons">groups</span>
          <span>Clients</span>
        </div>

        <div className="flex items-center space-x-2 p-2 rounded hover:bg-[#649BD2] hover:text-white cursor-pointer">
          <span className="material-icons">account_balance_wallet</span>
          <span>Billing</span>
        </div>
      </nav>

      {/* Footer Navigation */}
      <div className="absolute bottom-6 left-6 space-y-4 text-gray-700">
        <div className="flex items-center space-x-2 hover:text-[#0C3C78] cursor-pointer">
          <span className="material-icons">settings</span>
          <span>Settings</span>
        </div>
        <div className="flex items-center space-x-2 hover:text-[#0C3C78] cursor-pointer">
          <span className="material-icons">logout</span>
          <span>Log Out</span>
        </div>
        <div className="flex items-center space-x-2 hover:text-[#0C3C78] cursor-pointer">
          <span className="material-icons">help</span>
          <span>Help</span>
        </div>
      </div>
    </div>
  );
}

export default function Sidebar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden md:fixed md:block w-64 h-screen bg-[#A9CCE3] text-sm text-gray-800 p-6">
        <SidebarContent />
      </div>

      {/* Mobile Header with Burger Icon */}
      <div className="md:hidden flex items-center justify-between bg-[#A9CCE3] p-4">
        <h1 className="text-xl font-bold text-[#0C3C78]">Wang Construction</h1>
        <button
          onClick={() => setMobileMenuOpen(true)}
          className="focus:outline-none"
          aria-label="Open menu"
        >
          <span className="material-icons">menu</span>
        </button>
      </div>

      {/* Mobile Sidebar Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black opacity-50"
            onClick={() => setMobileMenuOpen(false)}
          ></div>
          {/* Drawer */}
          <div className="relative w-64 h-full bg-[#A9CCE3] text-sm text-gray-800 p-6">
            {/* Close button */}
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="mb-4 focus:outline-none"
              aria-label="Close menu"
            >
              <span className="material-icons">close</span>
            </button>
            <SidebarContent />
          </div>
        </div>
      )}
    </>
  );
}
