import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import Header from "@/app/components/header";
import "./globals.css";
import SocialsList from "./components/Socials";
import AppTheme from "./utils/AppTheme";

const firaCode = Fira_Code({ subsets: ["latin"] });

export const metadata: Metadata = {
  generator: "Next.js",
  applicationName: "Victor Raguin Portfolio",
  title:
    "Victor Raguin's | Front-End Developer in Next.js & Tailwind CSS",
  description:
    "Welcome to Victor Raguin's portfolio, a passionate and experienced front-end developer specialized in crafting modern and responsive user interfaces with Next.js and Tailwind CSS. Boasting a strong background in web development, Victor offers deep technical expertise, innovative solutions, and a commitment to excellence in every project. Explore his achievements, projects, and find out how he can turn your digital vision into reality.",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Victor Raguin",
    "Front-End Developer",
    "Next.js Expert",
    "Tailwind CSS",
    "Web Developer Portfolio",
    "User Interfaces",
    "UI/UX",
    "Website Creation",
    "Modern Web Development",
    "Innovative Web Solutions",
  ],
  authors: [{ name: "Victor Raguin" }],
  creator: "Victor Raguin",
  publisher: "Victor Raguin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
<html lang="en" >
  <AppTheme >
  <body className={`${firaCode.className} + bg-white dark:bg-dark text-dark dark:text-gray `}>
    <div className="flex flex-row justify-center">
      <div className="w-1/6">
        <SocialsList />
      </div>
      <div className="flex flex-col flex-grow">
        <Header />
        <div className="flex flex-row justify-between">
          {children}
        </div>
      </div>
      <div className="w-1/6 text-right">
      </div>
    </div>
  </body>
  </AppTheme>
</html>

  );
}
