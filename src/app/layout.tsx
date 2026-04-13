import type { Metadata } from "next";

import { sansRegular, serifThin } from "@/fonts";

import Nav from "@/components/Nav/Nav";

import "@/styles/globals.scss";

export const metadata: Metadata = {
    title: "Alex & Maxi",
    description: "Hochzeit von Alex & Maxi",
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
