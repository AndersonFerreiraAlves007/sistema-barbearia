/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), VitePWA({
        manifest: {
            name: "Luanderson Checkout",
            short_name: "Luanderson Checkout",
            start_url: "/",
            display: "standalone",
            background_color: "#ffffff",
            lang: "pt-br",
            scope: "/",
            icons: [
                {
                    src: "/android-chrome-192x192.png",
                    sizes: "192x192",
                    type: "image/png",
                    purpose: "any maskable",
                },
                {
                    src: "/android-chrome-512x512.png",
                    sizes: "512x512",
                    type: "image/png",
                    purpose: "any maskable",
                },
            ],
            theme_color: "#ffffff",
        },
    }),],
    test: {
        globals: true,
        environment: "jsdom",
    },
});
