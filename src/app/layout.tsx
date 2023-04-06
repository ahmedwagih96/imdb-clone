import Header from "@/components/Header";
import "./globals.css";
import Providers from "@/app/Providers";
import Navbar from "@/components/Navbar";
import SearchBox from "@/components/SearchBox";

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
          {/* SEARCH BOX */}
          <SearchBox />
          {/* CHILDREN */}
          {children}
        </Providers>
      </body>
    </html>
  );
}
