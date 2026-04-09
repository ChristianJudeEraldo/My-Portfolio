import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/site-header";

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
      <body className="antialiased selection:bg-blue-500/30">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          {/* Main Layout Structure */}
          <div className="relative flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1 container mx-auto px-4 py-8">
              {children}
            </main>
            {/* You can add a SiteFooter here later */}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}