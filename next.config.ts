import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    allowedDevOrigins: ["192.168.0.97"],
    sassOptions: {
        additionalData: `
            @use "@/styles/variables.scss" as *;
        `,
    },
};

export default nextConfig;
