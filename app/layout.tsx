import Navbar from "@/components/ui/Navbar";
import "./globals.css";
import Footer from "@/components/sections/Footer";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
