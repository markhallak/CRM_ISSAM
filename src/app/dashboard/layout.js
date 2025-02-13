// src/app/dashboard/layout.js
import { Header } from '../../components/header';

export default function DashboardLayout({ children }) {
  return (
    <>
      <Header title="Dashboard" />
      <div>
        {children}
      </div>
    </>
  );
}
