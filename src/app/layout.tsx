import { K2D } from "next/font/google";
import "@/styles/globals.css";

const k2d = K2D({ subsets: ["latin"], weight: ["400", "600", "800"] });

export const metadata = {
  title: "My website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${k2d.className}`}>
        <div className="fixed inset-0 w-full h-screen -z-50 scale-100 after:block after:absolute after:inset-0 after:w-full after:h-full after:bg-main after:bg-center after:bg-cover afer:bg-no-reapeat" />
        {children}
      </body>
    </html>
  );
}
