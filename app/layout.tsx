import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SoundProvider } from "@/components/sound-provider";
import { SiteHeader } from "@/components/site-header";
import { ScrollProgress } from "@/components/scroll-progress";
import { SmoothScroll } from "@/components/smooth-scroll";
import { BackToTop } from "@/components/back-to-top";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: {
    default: "Christian Jude | Computer Engineer & Developer",
    template: "%s | Christian Jude",
  },
  description: "Graduating BSCPE student and certified Python & Database developer specializing in AI-driven systems and cybersecurity solutions.",
  metadataBase: new URL("https://my-portfolio-gules-seven-lxpwm7vyqd.vercel.app/"), 
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/apple-icon.png",
  },
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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-(--background) text-(--ink)`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <SoundProvider>
            <SmoothScroll />
            <ScrollProgress />
            <div className="flex min-h-screen flex-col lg:flex-row relative">
              <SiteHeader />
              <main className="flex-1 w-full lg:pl-56">
                <div className="mx-auto w-full max-w-2xl px-4 py-8 md:px-6 md:py-16">
                  {children}
                </div>
              </main>
            </div>
            <BackToTop />
          </SoundProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}