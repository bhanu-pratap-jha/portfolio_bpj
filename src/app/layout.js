import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bhanu Pratap Jha",
  description: "Portfolio of Bhanu Pratap Jha",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <Navbar />
      {children}
      <Footer />
      </body>
    </html>
  );
}
