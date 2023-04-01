import Header from "@/components/Header";
import "./globals.css";

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      {/* HEADER */}
      <Header />
      <body>{children}</body>
    </html>
  );
}
