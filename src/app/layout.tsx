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
      <body
        className={`${k2d.className} min-h-screen bg-main bg-fixed bg-no-repeat`}
      >
        {children}
      </body>
    </html>
  );
}
