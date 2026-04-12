import type { Metadata } from "next";
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
        <html lang="de" className={``}>
            <body>{children}</body>
        </html>
    );
}
