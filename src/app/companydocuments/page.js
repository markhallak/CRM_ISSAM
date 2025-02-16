import React from "react";

const CompanyDocuments = () => {
  return (
    <div className="bg-white min-h-screen relative">
      {/* Top Header */}
      <div className="flex items-center justify-between p-4 border-b shadow-sm">
        <h1 className="text-2xl font-bold">Company Documents</h1>
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

      {/* Documents Table */}
      <div className="px-6 py-4">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-white border-b-2 border-black">
              <th className="text-left p-3">Title</th>
              <th className="text-left p-3">Type</th>
              <th className="text-left p-3">Date Uploaded</th>
              <th className="p-3 text-center">
                <button
                  className="bg-green-500 text-white px-3 py-1 rounded-full shadow-lg text-lg"
                  aria-label="Add Document"
                >
                  +
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {/* Example Rows */}
            <tr className="border-b border-gray-400">
              <td className="p-3">W9.PDF</td>
              <td className="p-3">W9</td>
              <td className="p-3">08/12/2024</td>
              <td className="p-3 text-center">...</td>
            </tr>
            <tr className="border-b border-gray-400">
              <td className="p-3">COImcd.pdf</td>
              <td className="p-3">Sample COI</td>
              <td className="p-3">09/14/2025</td>
              <td className="p-3 text-center">...</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CompanyDocuments;
