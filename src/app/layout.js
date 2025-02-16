// app/layout.js
export const metadata = {
  title: "My Global Dashboard",
  description: "Global application layout",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        {children}
      </body>
    </html>
  );
}
