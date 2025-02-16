import "../globals.css";
import Sidebar from "../dashboard/sidebar";

export default function CompanyProfileLayout({ children }) {
  return (
    <div className="flex">
      {/* Sidebar (fixed) */}
      <Sidebar />
      {/* Main content offset by the sidebar */}
      <main className="ml-64 p-8 min-h-screen w-full">
        {children}
      </main>
    </div>
  );
}
