import localFont from "next/font/local";

export const sansRegular = localFont({
    src: [
        {
            path: "./sans-regular.woff2",
            weight: "400",
            style: "normal",
        },
    ],
    variable: "--font-sans",
    display: "swap",
});

export const serifThin = localFont({
    src: [
        {
            path: "./serif-thin.woff2",
            weight: "100",
            style: "normal",
        },
    ],
    variable: "--font-serif",
    display: "swap",
});
