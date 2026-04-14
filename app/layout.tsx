import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme/theme-provider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Chirag Dodiya — Senior Software Engineer',
  description: 'Senior Software Engineer specializing in building reliable, scalable web products. Explore my experience, projects, and ways to get in touch.',
  openGraph: {
    title: 'Chirag Dodiya — Senior Software Engineer',
    description: 'Portfolio, experience, and projects by Chirag Dodiya.',
    url: '/',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chirag Dodiya — Senior Software Engineer',
    description: 'Building reliable, scalable web platforms.'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}