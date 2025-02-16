// app/insurance/layout.js
import "../globals.css";
import "../../styles/dashboard.css"; 
import Sidebar from "../dashboard/sidebar"; 

export const metadata = {
  title: "Insurance",
  description: "Insurance Information Section",
};

export default function InsuranceLayout({ children }) {
  return (
    <div className="flex">
      {/* Sidebar (fixed) */}
      <Sidebar />

      {/* Main content area, offset by sidebar width */}
      <main className="ml-64 p-8 w-full min-h-screen bg-white">
        {children}
      </main>
    </div>
  );
}
