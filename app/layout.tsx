import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/global.css";
export const metadata = {
  title: "Drimbbble",
  description: "Showcase and discover remarkable developer projects",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
