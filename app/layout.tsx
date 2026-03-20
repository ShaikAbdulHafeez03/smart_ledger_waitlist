  import type { Metadata } from "next";
  import "./globals.css";

  export const metadata: Metadata = {
    metadataBase: new URL("https://smartledger.shaikabdulhafeez.link/"), // 🔥 replace with your domain

    title: {
      default: "Fintan — GST Accounting Software for Indian Solopreneurs",
      template: "%s | Fintan",
    },

    description:
      "Fintan is a GST-ready accounting software for Indian freelancers and solopreneurs. Manage bookkeeping with AI, track expenses, and stay audit-ready with immutable records.",

    keywords: [
      "GST accounting software India",
      "bookkeeping for freelancers India",
      "accounting for solopreneurs",
      "GST ledger software",
      "AI accounting India",
      "freelancer finance tools",
    ],

    authors: [{ name: "Friedbot Studio" }],
    creator: "Friedbot Studio",
    applicationName: "Fintan",

    robots: {
      index: true,
      follow: true,
    },

    alternates: {
      canonical: "/",
    },

    openGraph: {
      title: "Fintan — Accounting that speaks human.",
      description:
        "AI-powered bookkeeping with GST-ready ledgers for Indian freelancers & solopreneurs.",
      url: "https://fintan.app",
      siteName: "Fintan",
      images: [
        {
          url: "/og-image.png", // 🔥 add this image in public folder
          width: 1200,
          height: 630,
          alt: "Fintan Accounting App",
        },
      ],
      locale: "en_IN",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: "Fintan — Accounting that speaks human.",
      description:
        "Join the waitlist. First 100 users get 50% lifetime discount.",
      images: ["/fintan_image"],
      creator: "@yourhandle", // optional
    },

    category: "finance",
  };

  export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <html lang="en">
        <body>{children}</body>
      </html>
    );
  }