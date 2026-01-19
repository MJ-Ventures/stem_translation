import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "STEM Translation - Turn Complex STEM Topics Into Stories People Remember",
  description: "AI chatbot that analyzes your target audience, your STEM topic, and how humans learn best—then crafts tailored explanations, analogies, and narratives that make science stick.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
