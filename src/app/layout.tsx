import Navbar from "@/components/Navbar";
import Footer from "@/components/ui/Footer";
import "@/styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-brown-50 text-brown-900">
        <Navbar />
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
