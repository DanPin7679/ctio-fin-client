import Link from "next/link";
import Footer from "../components/navigation/footer";
import Header from "../components/navigation/header";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className=" font-inter antialiased bg-gray-900 text-gray-100 tracking-tight">
        <div className="flex flex-col min-h-screen">
          <Header></Header>
          <main className="grow">{children}</main>
          <Footer></Footer>
        </div>
      </body>
    </html>
  );
}
