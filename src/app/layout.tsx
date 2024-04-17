import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";
import SocialsList from "./components/Socials";
import AppTheme from "./utils/AppTheme";
import Header from "./components/Header";

const firaCode = Fira_Code({ subsets: ["latin"] });

export const metadata: Metadata = {
  generator: "Next.js",
  applicationName: "Victor Raguin Portfolio",
  title: "Victor Raguin's | Front-End Developer in Next.js & Tailwind CSS",
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
    <html lang="en" className="scroll-smooth">
      <AppTheme>
        <body
          className={`${firaCode.className} + bg-white dark:bg-black text-dark dark:text-white h-screen w-full`}>
          <div className="md:flex flex-row justify-center">
            <div className="hidden md:flex w-1/6 md:w-[40%] lg:w-1/6 4xl:w-1/3 5xl:w-1/2 md:justify-center 4xl:justify-end">
              <SocialsList />
            </div>
            <div className="flex flex-col flex-grow">
              <Header />
              <div className="md:flex flex-row justify-between">{children}</div>
            </div>
            <div className="md:w-1/12 lg:w-1/6 4xl:w-1/3 5xl:w-1/2 text-right"></div>
          </div>
        </body>
      </AppTheme>
    </html>
  );
}
