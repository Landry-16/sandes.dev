import './globals.css';

export const metadata = {
  title: 'Sandes | Computer Science Student & Developer',
  description: 'Portfolio of Sandes - A third-year CS student at Epitech Paris. Passionate about building elegant solutions and exploring the intersection of code and creativity.',
  viewport: 'width=device-width, initial-scale=1',
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90" font-family="serif" font-weight="bold" fill="%23b8956f">S</text></svg>',
  },
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
