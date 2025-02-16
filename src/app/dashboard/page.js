"use client";

import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react"; // FullCalendar React wrapper
import dayGridPlugin from "@fullcalendar/daygrid"; // DayGrid plugin
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

export default function DashboardPage() {
  const [selectedSort, setSelectedSort] = useState("This Month");
  const handleSortChange = (value) => setSelectedSort(value);
  const currentDate = new Date();

  return (
    <div className="p-4 bg-white min-h-screen space-y-6">
      {/* Top Header */}
      <div className="flex items-center justify-between border-b pb-3 bg-white p-4 shadow-sm">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <div className="flex items-center space-x-4">
          <button
            className="relative p-2"
            style={{ marginLeft: "-19px" }}
            aria-label="Notifications"
          >
            <span className="material-icons text-gray-600">notifications</span>
            <span className="absolute top-1 right-1 bg-green-500 w-2 h-2 rounded-full"></span>
          </button>
          <button className="p-2" aria-label="Search">
            <span className="material-icons text-gray-600">search</span>
          </button>
          <div className="w-10 h-10 rounded-full border flex items-center justify-center font-bold text-black bg-white shadow">
            WC
          </div>
        </div>
      </div>

      {/* Main Content Flex Container */}
      <div className="flex gap-6">
        {/* Left Column: Date/Sort Header + Calendar */}
        <div className="flex-1 space-y-6">
          {/* Header with current date and sort button */}
          <div className="flex items-center justify-between bg-white p-4 shadow-sm rounded">
            <h2 className="text-lg font-semibold">
              {currentDate.toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </h2>
            <div className="flex items-center">
              <span className="mr-2 text-sm">Sort By:</span>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">{selectedSort}</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem onClick={() => handleSortChange("This Month")}>
                    This Month
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => handleSortChange("This Week")}>
                    This Week
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => handleSortChange("This Year")}>
                    This Year
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          {/* Calendar */}
          <div className="border rounded p-4 bg-white shadow-sm">
            <FullCalendar
              plugins={[dayGridPlugin]}
              initialView="dayGridMonth"
              dateClick={(info) => console.log("Date clicked:", info.dateStr)}
              className="rounded-md border shadow p-4"
            />
          </div>
        </div>

        {/* Right Column: Sidebar for Performance Overview & Latest Updates */}
        <div className="w-80 space-y-6">
          <div className="mb-8">
            <h3 className="text-lg font-bold mb-16">Performance Overview</h3>
            <div className="space-y-4">
              <div className="bg-blue-600 text-white p-4 rounded-xl">
                <div className="text-sm">Total Invoiced</div>
                <div className="text-2xl font-bold">$569,548.49</div>
              </div>
              <div className="bg-blue-600 text-white p-4 rounded-xl">
                <div className="text-sm">Total Collected</div>
                <div className="text-2xl font-bold">$429,548.49</div>
              </div>
              <div className="bg-blue-600 text-white p-4 rounded-xl">
                <div className="text-sm">Projects Completed</div>
                <div className="text-2xl font-bold">153</div>
              </div>
              <div className="bg-blue-600 text-white p-4 rounded-xl">
                <div className="text-sm">Open Projects</div>
                <div className="text-2xl font-bold">21</div>
              </div>
            </div>
          </div>
          <div className="border rounded p-4 bg-white shadow-sm">
            <h3 className="font-bold text-lg mb-2 text-black">Latest Updates</h3>
            <table className="w-full">
              <tbody>
                <tr className="border-b border-gray-300">
                  <td className="p-2 text-black">Update 1</td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="p-2 text-black">Update 2</td>
                </tr>
                <tr>
                  <td className="p-2 text-black">Update 3</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
