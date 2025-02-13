// src/app/layout.js
import "./globals.css";

export const metadata = {
  title: 'CRM',
  description: 'CRM for providers and service companies',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Load your global font from Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=YourGlobalFont:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
          {children}
      </body>
    </html>
  );
}
