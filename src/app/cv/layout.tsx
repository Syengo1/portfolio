// src/app/cv/layout.tsx
import type { Metadata } from "next";
import type { ReactNode } from "react";

const siteUrl = "https://antonysyengo.vercel.app";

export const metadata: Metadata = {
  title: {
    absolute: "Antony Syengo | Full-Stack Software Developer CV",
  },

  description:
    "Curriculum Vitae of Antony Syengo — Full-Stack Software Developer with a BSc in Data Science and Analytics from JKUAT, enterprise IT support experience at The National Treasury, and 8+ deployed web & POS systems.",

  alternates: {
    canonical: "/cv",
  },

  openGraph: {
    type: "profile",
    url: `${siteUrl}/cv`,
    siteName: "Antony Syengo Portfolio",
    title: "Antony Syengo | Full-Stack Software Developer CV",
    description:
      "View Antony Syengo's professional CV: full-stack engineering skills, selected software projects, National Treasury IT attachment, and BSc in Data Science & Analytics from JKUAT.",
    locale: "en_KE",
    images: [
      {
        url: "/cv/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Antony Syengo — Full-Stack Software Developer CV Preview",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    creator: "@syengoo",
    title: "Antony Syengo | Full-Stack Software Developer CV",
    description:
      "Full-stack software engineering experience, selected projects, technical skills, and JKUAT Data Science & Analytics qualification.",
    images: ["/cv/opengraph-image"],
  },
};

export default function CVLayout({ children }: { children: ReactNode }) {
  return children;
}