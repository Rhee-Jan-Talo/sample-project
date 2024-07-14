import type { Metadata } from "next";
import "@/app/globals.css";
import { Providers } from '@/app/providers'
import { Figtree, Work_Sans } from "next/font/google";

// Initialize fonts
const worksans = Work_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-worksans",
});
const figtree = Figtree({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-figtree",
});

export const metadata: Metadata = {
  title: "Users",
  description: "Website that fetches Users Data from reqres.in",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={` ${figtree?.variable} ${worksans?.variable} w-[85%] m-auto max-w-[1440px] mt-[64px] py-8`}>
        <Providers>{children}</Providers>
      </body>
    </html>

  );
}
