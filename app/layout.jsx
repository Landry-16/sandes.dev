import './globals.css';

export const metadata = {
  title: 'Sandes Savarimuthu | Folio of Works & Days',
  description: 'Portfolio of Sandes Savarimuthu, student and full-stack and software developer. A reading app, two rendering engines, and a writing desk, kept like a commonplace book.',
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90" font-family="serif" font-weight="300" fill="%23c9a24a">S</text></svg>',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
