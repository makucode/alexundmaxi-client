import type { Metadata } from "next";

import { sansRegular, serifThin } from "@/fonts";

import Nav from "@/components/Nav/Nav";

import "@/styles/globals.scss";

export const metadata: Metadata = {
    title: "Alex & Maxi",
    description: "Hochzeit von Alex & Maxi",
    // favicon.ico is auto-detected from src/app and handled by Next.js.
    // The remaining files live in /public and are wired up here.
    icons: {
        icon: [
            { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
            { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
        ],
        apple: [
            { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
        ],
    },
    manifest: "/site.webmanifest",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="de"
            className={`${sansRegular.variable} ${serifThin.variable}`}
        >
            <body>
                <Nav />
                {children}
            </body>
        </html>
    );
}
