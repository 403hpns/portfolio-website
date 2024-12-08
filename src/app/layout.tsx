import { Toaster } from "react-hot-toast";
import { K2D } from "next/font/google";
import "@/styles/globals.css";

const k2d = K2D({ subsets: ["latin"], weight: ["400", "600", "800"] });

export const metadata = {
  title: "403hpns Portfolio",
  description: "My personal portfolio website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${k2d.className}`}>
        <div className="overflow-hidden fixed inset-0 w-full h-full -z-50 scale-105 bg-main bg-center bg-cover" />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
