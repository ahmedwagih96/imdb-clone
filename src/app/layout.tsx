import Header from "@/components/Header";
import "./globals.css";
import Providers from "@/app/Providers";
import Navbar from "@/components/Navbar";

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {/* HEADER */}
          <Header />
          {/* NAVBAR */}
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
