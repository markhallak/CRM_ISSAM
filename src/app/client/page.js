"use client";

import React, { useState } from "react";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

export default function ClientPage() {
  // If needed, you can load client data from an API or server props
  const clientName = "23rd Group";
  const clientAddress = "100 Davis Drive, Hauppauge, NY 17893";

  // Example stats
  const totalInvoiced = "$569,548.49";
  const totalCollected = "$429,548.49";
  const projectsCompleted = 153;
  const openProjects = 21;

  // The status button text (e.g. “Compliant and Active”), could be a dropdown
  const [status, setStatus] = useState("Compliant and Active");

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Top Header */}
      <div className="flex items-center justify-between border-b pb-3 bg-white p-4 shadow-sm">
        <h1 className="text-2xl font-bold">{clientName}</h1>
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

      {/* Main container */}
      <div className="p-4 space-y-4">
        {/* Top section with client info + stats + status button */}
        <div className="flex flex-wrap lg:flex-nowrap space-y-4 lg:space-y-0">
          {/* Left: Client Info Box */}
          <div className="border rounded-md p-4 lg:w-1/2 relative shadow-sm">
            <h2 className="text-lg font-semibold mb-2">{clientName}</h2>
            <div className="flex items-center mb-4">
              <span className="material-icons text-gray-700 mr-2">location_on</span>
              <p>{clientAddress}</p>
            </div>
            {/* “Edit” Pencil in top-right */}
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
              aria-label="Edit client"
            >
              <span className="material-icons">edit</span>
            </button>
            {/* A box just to illustrate a big empty area if you want */}
            <div className="border-2 border-blue-300 mt-4 p-2 min-h-[80px]" />
          </div>

          {/* Middle: Four stats boxes stacked */}
          <div className="flex flex-col space-y-4 mx-auto lg:mx-8 my-4 lg:my-0">
            <div className="bg-blue-600 text-white p-4 rounded-xl text-center w-56">
              <div className="text-sm">Total Invoiced</div>
              <div className="text-2xl font-bold">{totalInvoiced}</div>
            </div>
            <div className="bg-blue-600 text-white p-4 rounded-xl text-center w-56">
              <div className="text-sm">Total Collected</div>
              <div className="text-2xl font-bold">{totalCollected}</div>
            </div>
            <div className="bg-blue-600 text-white p-4 rounded-xl text-center w-56">
              <div className="text-sm">Projects Completed</div>
              <div className="text-2xl font-bold">{projectsCompleted}</div>
            </div>
            <div className="bg-blue-600 text-white p-4 rounded-xl text-center w-56">
              <div className="text-sm">Open Projects</div>
              <div className="text-2xl font-bold">{openProjects}</div>
            </div>
          </div>

          {/* Right: Green status button (could be a dropdown) */}
          <div className="lg:w-1/3 flex items-start justify-end">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="bg-green-500 text-white hover:bg-green-600 h-12 text-xl flex items-center space-x-2"
                >
                  <span>{status}</span>
                  <span className="material-icons text-base">arrow_drop_down</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem
                  onClick={() => setStatus("Compliant and Active")}
                >
                  Compliant and Active
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setStatus("Non-compliant")}
                >
                  Non-compliant
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Tabs for “Invoices,” “Onboarding Paperwork,” “Active Projects” */}
        <Tabs defaultValue="invoices">
        <div className="border-b bg-white flex">
  <TabsList className="flex space-x-0">
    <TabsTrigger
      value="invoices"
      className="w-40 text-center border-r border-gray-200 py-2 font-semibold data-[state=active]:bg-blue-600 data-[state=active]:text-white"
    >
      Invoices
    </TabsTrigger>
    <TabsTrigger
      value="onboarding"
      className="w-60 text-center border-r border-gray-200 py-2 font-semibold data-[state=active]:bg-blue-600 data-[state=active]:text-white"
    >
      Onboarding Paperwork
    </TabsTrigger>
    <TabsTrigger
      value="projects"
      className="w-40 text-center py-2 font-semibold data-[state=active]:bg-blue-600 data-[state=active]:text-white"
    >
      Active Projects
    </TabsTrigger>
  </TabsList>
</div>

          {/* Invoices Table */}
          <TabsContent value="invoices">
            <div className="p-4 border border-t-0 rounded-b shadow-sm">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b bg-gray-100">
                    <th className="p-2 text-left">Invoice Number</th>
                    <th className="p-2 text-left">Issue Date</th>
                    <th className="p-2 text-left">Due Date</th>
                    <th className="p-2 text-left">Amount</th>
                    <th className="p-2 text-left">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-2">5412</td>
                    <td className="p-2">08/12/2024</td>
                    <td className="p-2">09/12/2024</td>
                    <td className="p-2">$542.5</td>
                    <td className="p-2">14 Days Overdue</td>
                  </tr>
                  <tr>
                    <td className="p-2">6412</td>
                    <td className="p-2">11/02/2024</td>
                    <td className="p-2">01/02/2025</td>
                    <td className="p-2">$23,670.50</td>
                    <td className="p-2">Outstanding</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </TabsContent>

          {/* Onboarding Paperwork Table */}
          <TabsContent value="onboarding">
            <div className="p-4 border border-t-0 rounded-b shadow-sm">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b bg-gray-100">
                    <th className="p-2 text-left">Title</th>
                    <th className="p-2 text-left">Type</th>
                    <th className="p-2 text-left">Date Uploaded</th>
                    <th className="p-2 text-left">Uploaded By</th>
                    <th className="p-2 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-2">Assessment 1.jpeg</td>
                    <td className="p-2">W9</td>
                    <td className="p-2">08/12/2024</td>
                    <td className="p-2">Issam</td>
                    <td className="p-2 text-right">
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
                  <tr className="border-b">
                    <td className="p-2">Assessment 2.jpeg</td>
                    <td className="p-2">MSA</td>
                    <td className="p-2">09/14/2025</td>
                    <td className="p-2">John</td>
                    <td className="p-2 text-right">
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
                  <tr>
                    <td className="p-2">Quote 5412.pdf</td>
                    <td className="p-2">Contract</td>
                    <td className="p-2">09/14/2025</td>
                    <td className="p-2">Sarah</td>
                    <td className="p-2 text-right">
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
          </TabsContent>

          {/* Active Projects Table */}
          <TabsContent value="projects">
            <div className="p-4 border border-t-0 rounded-b shadow-sm">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b bg-gray-100">
                    <th className="p-2 text-left">PO Number</th>
                    <th className="p-2 text-left">Priority</th>
                    <th className="p-2 text-left">Type</th>
                    <th className="p-2 text-left">Address</th>
                    <th className="p-2 text-left">Trade</th>
                    <th className="p-2 text-left">Status</th>
                    <th className="p-2 text-left">NTE</th>
                    <th className="p-2 text-left">Assignee</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-2">75518-01</td>
                    <td className="p-2">P1 - Emergency</td>
                    <td className="p-2">Commercial</td>
                    <td className="p-2">90 Easton Rd, New Haven, CT 64123</td>
                    <td className="p-2">Handyman</td>
                    <td className="p-2">Open</td>
                    <td className="p-2">$135</td>
                    <td className="p-2">Sarah Sims</td>
                  </tr>
                  <tr>
                    <td className="p-2">4182-02</td>
                    <td className="p-2">P2 - Same Day</td>
                    <td className="p-2">Residential</td>
                    <td className="p-2">
                      416 Camaro Pl NE
                      <br />
                      Hamden, CT 62123
                    </td>
                    <td className="p-2">Plumbing - Drain Cleaning</td>
                    <td className="p-2">Quote Submitted</td>
                    <td className="p-2">$135</td>
                    <td className="p-2">John Khoury</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
