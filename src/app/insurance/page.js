"use client";

import React, { useState } from "react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

export default function InsurancePage() {
  // State for all “Covered” dropdowns
  const [generalLiabilityCovered, setGeneralLiabilityCovered] = useState("");
  const [autoCovered, setAutoCovered] = useState("");
  const [umbrellaCovered, setUmbrellaCovered] = useState("");
  const [workersCompCovered, setWorkersCompCovered] = useState("");

  const CoverageRow = ({
    title,
    coveredValue,
    onCoveredChange,
  }) => (
    <div className="mb-8">
      {/* Coverage Title */}
      <div className="font-bold mb-2">{title}</div>

      {/* First row: 3 fields side by side */}
      <div className="flex flex-wrap gap-4 mb-4">
        {/* Covered Select */}
        <div className="flex items-center space-x-2">
          <label className="w-24">Covered:</label>
          <Select value={coveredValue} onValueChange={onCoveredChange}>
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Select..." />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Options</SelectLabel>
                <SelectItem value="Yes">Yes</SelectItem>
                <SelectItem value="No">No</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        {/* Producer */}
        <div className="flex items-center space-x-2">
          <label className="w-24">Producer:</label>
          <input
            type="text"
            placeholder="Producer name"
            className="border p-1 rounded w-48"
          />
        </div>

        {/* Agent Phone #1 */}
        <div className="flex items-center space-x-2">
          <label className="w-24">Agent Phone #1:</label>
          <input
            type="text"
            placeholder="(123) 456-7890"
            className="border p-1 rounded w-48"
          />
        </div>
      </div>

      {/* Second row: 2 fields side by side */}
      <div className="flex flex-wrap gap-4">
        {/* Agent Phone #2 */}
        <div className="flex items-center space-x-2">
          <label className="w-24">Agent Phone #2:</label>
          <input
            type="text"
            placeholder="(123) 456-7890"
            className="border p-1 rounded w-48"
          />
        </div>

        {/* Expiration Date */}
        <div className="flex items-center space-x-2">
          <label className="w-24">Expiration Date:</label>
          <input
            type="date"
            className="border p-1 rounded w-48"
          />
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* Top Header */}
      <div className="flex items-center justify-between border-b pb-3 bg-white p-4 shadow-sm">
        <h1 className="text-2xl font-bold">Insurance Information</h1>
        <div className="flex items-center space-x-4">
          <button
            className="relative p-2"
            style={{ marginLeft: "-19px" }}
            aria-label="Notifications"
          >
            <span className="material-icons text-gray-600">notifications</span>
            <span className="absolute top-1 right-1 bg-green-500 w-2 h-2 rounded-full" />
          </button>
          <button className="p-2" aria-label="Search">
            <span className="material-icons text-gray-600">search</span>
          </button>
          <div className="w-10 h-10 rounded-full border flex items-center justify-center font-bold text-black bg-white shadow">
            WC
          </div>
        </div>
      </div>

      {/* Thick horizontal line */}
      <div className="border-b-2 border-black my-2" />

      {/* Main form area */}
      <div className="p-4 space-y-8">
        {/* Coverage Details Card */}
        <div className="border p-4 rounded shadow-sm">
          <h2 className="text-xl font-semibold mb-6">Coverage Details</h2>

          {/* Reusable coverage rows */}
          <CoverageRow
            title="General Liability"
            coveredValue={generalLiabilityCovered}
            onCoveredChange={setGeneralLiabilityCovered}
          />
          <CoverageRow
            title="Automobile"
            coveredValue={autoCovered}
            onCoveredChange={setAutoCovered}
          />
          <CoverageRow
            title="Umbrella"
            coveredValue={umbrellaCovered}
            onCoveredChange={setUmbrellaCovered}
          />
          <CoverageRow
            title="WorkersComp"
            coveredValue={workersCompCovered}
            onCoveredChange={setWorkersCompCovered}
          />
        </div>

        {/* Insurance Documents Table */}
        <div className="border p-4 rounded shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Insurance Documents</h2>
            <Button
              variant="outline"
              className="flex items-center space-x-1 text-green-600 border-green-600"
            >
              <span className="material-icons text-base">add</span>
              <span>Add Document</span>
            </Button>
          </div>
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b bg-gray-100">
                <th className="text-left p-2">Title</th>
                <th className="text-left p-2">Insurance Type</th>
                <th className="text-left p-2">Date Uploaded</th>
                <th className="text-left p-2">Uploaded By</th>
                <th className="text-right p-2"></th>
              </tr>
            </thead>
            <tbody>
              {/* Example Row 1 */}
              <tr className="border-b">
                <td className="p-2">Assessment 1.jpeg</td>
                <td className="p-2">Sample</td>
                <td className="p-2">08/12/2024</td>
                <td className="p-2">Issam</td>
                <td className="text-right p-2">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <span className="material-icons">more_horiz</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem>Edit</DropdownMenuItem>
                      <DropdownMenuItem>Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </td>
              </tr>

              {/* Example Row 2 */}
              <tr className="border-b">
                <td className="p-2">Assessment 2.jpeg</td>
                <td className="p-2">Auto</td>
                <td className="p-2">09/14/2025</td>
                <td className="p-2">John</td>
                <td className="text-right p-2">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <span className="material-icons">more_horiz</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem>Edit</DropdownMenuItem>
                      <DropdownMenuItem>Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </td>
              </tr>

              {/* Example Row 3 */}
              <tr>
                <td className="p-2">Quote 5412.pdf</td>
                <td className="p-2">WC</td>
                <td className="p-2">09/14/2025</td>
                <td className="p-2">Sarah</td>
                <td className="text-right p-2">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <span className="material-icons">more_horiz</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem>Edit</DropdownMenuItem>
                      <DropdownMenuItem>Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
