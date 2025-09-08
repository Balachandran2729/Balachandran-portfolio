import "./globals.css";
// ...existing code...
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export const metadata = {
  title: "Balachandran C - Portfolio",
  description: "Computer Science student with experience in MERN stack and React Native",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="min-h-screen bg-gray-900 text-gray-100 transition-colors duration-300">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
