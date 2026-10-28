import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SoundProvider } from "@/components/sound-provider";
import { SiteHeader } from "@/components/site-header";
import { ScrollProgress } from "@/components/scroll-progress";
import { SmoothScroll } from "@/components/smooth-scroll";
import { CircularReveal } from "@/components/circular-reveal";
import { Toaster } from "sonner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: {
    default: "Christian Jude Eraldo | Computer Engineer & Full-Stack Developer",
    template: "%s | Christian Jude Eraldo",
  },
  description:
    "Christian Jude Eraldo — Computer Engineering graduate from the Philippines specializing in AI/ML (computer vision, CNNs), full-stack web development with Next.js, and applied machine learning systems.",
  metadataBase: new URL("https://www.judeeraldo.tech"),
  alternates: {
    canonical: "/",
  },
  authors: [{ name: "Christian Jude Eraldo", url: "https://www.judeeraldo.tech" }],
  keywords: [
    "Christian Jude Eraldo",
    "Christian Jude",
    "Jude Eraldo",
    "Computer Engineering portfolio",
    "Full-stack developer Philippines",
    "Next.js developer",
    "Machine learning engineer",
    "Computer vision CNN",
    "TypeScript developer",
    "React developer Philippines",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    title: "Christian Jude Eraldo | Computer Engineer & Full-Stack Developer",
    description:
      "Portfolio of Christian Jude Eraldo — AI/ML systems, computer vision, and high-performance web platforms built with Next.js and React.",
    url: "https://www.judeeraldo.tech",
    siteName: "Christian Jude Eraldo Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Christian Jude Eraldo – Computer Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Christian Jude Eraldo | Computer Engineer & Full-Stack Developer",
    description:
      "AI/ML systems, computer vision, and high-performance web platforms built with Next.js and React.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/icon.png", type: "image/png", sizes: "256x256" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: [{ url: "/favicon.ico" }],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-(--background) text-(--ink)`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <SoundProvider>
            <SmoothScroll />
            <ScrollProgress />
            <CircularReveal />
            <Toaster position="bottom-right" theme="system" />
            <div className="flex min-h-screen flex-col lg:flex-row relative">
              <SiteHeader />
              <main className="flex-1 w-full lg:pl-60">
                <div className="mx-auto w-full max-w-3xl px-4 py-6 md:px-8 md:py-10">
                  {children}
                </div>
              </main>
            </div>
          </SoundProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}