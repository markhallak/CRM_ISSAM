import "../globals.css";
import Sidebar from "../dashboard/sidebar"; // Reusing the same sidebar component

export const metadata = {
  title: "Settings",
  description: "Settings Section",
};

export default function SettingsLayout({ children }) {
  return (
    // Stack sidebar on mobile, side-by-side on md+
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Sidebar container: full width on mobile, fixed width on desktop */}
      <div className="w-full md:w-64">
        <Sidebar />
      </div>
      {/* Main settings content */}
      <main className="flex-1 p-8">
        {children}
      </main>
    </div>
  );
}
