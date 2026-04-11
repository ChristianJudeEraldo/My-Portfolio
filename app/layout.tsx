import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/site-header";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Christian Jude | Computer Engineer & Developer",
    template: "%s | Christian Jude",
  },
  description: "Graduating BSCPE student and certified Python & Database developer specializing in AI-driven systems and cybersecurity solutions.",
  metadataBase: new URL("https://my-portfolio-gules-seven-lxpwm7vyqd.vercel.app/"), 
  openGraph: {
    title: "Christian Jude | Computer Engineering Portfolio",
    description: "Explore the projects and technical expertise of Christian Jude, a certified developer focused on AI (CNN), Cybersecurity, and Full-stack development.",
    url: "https://my-portfolio-gules-seven-lxpwm7vyqd.vercel.app/",
    siteName: "Christian Jude Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} linear-bg-aurora antialiased selection:bg-[#7170ff]/30`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <div className="relative flex min-h-screen flex-col">
            <SiteHeader />
            <main className="linear-shell flex-1 py-8 md:py-10">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}