import "./global.css";
import { RootProvider } from "fumadocs-ui/provider";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import type { Metadata } from "next"; // Import Metadata type

const inter = Inter({
  subsets: ["latin"],
});

// Define your metadata, including the favicon
export const metadata: Metadata = {
  title: {
    template: "%s | T9", // You can customize this
    default: "Welcome to T9",
  },
  icons: {
    icon: [
      {
        // Use an SVG data URL with the emoji
        url: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🏁</text></svg>",
        sizes: "any", // Favicon can scale to any size
        type: "image/svg+xml",
      },
    ],
    // You can also add an Apple touch icon if you have a separate one, e.g.:
    // apple: '/apple-icon.png',
  },
  // Add other metadata here if needed, e.g., Open Graph, Twitter cards
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider search={{ options: { type: "static" } }}>
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
