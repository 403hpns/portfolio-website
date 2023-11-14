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
        <div className="overflow-x-hidden fixed inset-0 w-full h-screen -z-50 scale-100 after:block after:absolute after:inset-0 after:w-full after:h-full after:bg-main after:bg-center after:bg-cover" />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
