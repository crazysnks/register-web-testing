import './globals.css';

export const metadata = {
  title: 'Event Registration',
  description: 'Register for the event',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">{children}</body>
    </html>
  );
}
