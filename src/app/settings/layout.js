// src/app/settings/layout.js
import { Header } from '../../components/header';

export default function DashboardLayout({ children }) {
  return (
    <>
      <Header title="Settings" />
      <div>
        {children}
      </div>
    </>
  );
}
