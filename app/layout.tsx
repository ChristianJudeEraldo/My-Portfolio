import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Christian Jude | Computer Engineer",
  description: "Portfolio of a Computer Engineering student specializing in AI and Cybersecurity.",
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
          disableTransitionOnChange
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