// app/dashboard/layout.js
import "../globals.css";
import "../../styles/dashboard.css";


import Sidebar from "./sidebar";

export const metadata = {
  title: "Dashboard",
  description: "Dashboard Section",
};

export default function DashboardLayout({ children }) {
  return (
    <div className="flex">
      {/* Sidebar (fixed) */}
      <Sidebar />
      {/* Main dashboard content offset by the sidebar width */}
      <main className="ml-64 p-8 min-h-screen w-full">
        {children}
      </main>
    </div>
  );
}
