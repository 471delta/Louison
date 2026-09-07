import './globals.css';

export const metadata = {
  title: 'Louison',
  description: 'Louison - A modern web experience',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
