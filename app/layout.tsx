import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Core — Auditor-Defensible Accounting for Indian Solopreneurs",
  description:
    "Describe business events in plain English. AI Core handles GST-ready ledgers, mandatory proof, and immutable records — keeping you 100% audit-ready. Join the early-bird waitlist.",
  openGraph: {
    title: "AI Core — Accounting that speaks human.",
    description:
      "Chat-driven bookkeeping with mandatory proof and GST-ready ledgers for Indian freelancers & solopreneurs.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Core — Accounting that speaks human.",
    description:
      "Join the waitlist. First 100 users get 50% lifetime discount.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
