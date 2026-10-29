import "./globals.css";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body /*layout limpio*/>{children}</body>
    </html>
  );
}
