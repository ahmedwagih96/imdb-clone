import Header from "@/components/Header";
import "./globals.css";
import Providers from "@/app/Providers";

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <Providers>
        {/* HEADER */}
        <Header />
        <body>{children}</body>
      </Providers>
    </html>
  );
}
