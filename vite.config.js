import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { VitePWA } from "vite-plugin-pwa";

const base = "/birthday-pwa/";

export default defineConfig({
    base,
    plugins: [
        react(),
        tailwindcss(),

        VitePWA({
          registerType: "autoUpdate",
      
          includeAssets: [
              "favicon.ico",
              "favicon-16x16.png",
              "favicon-32x32.png",
              "apple-touch-icon.png",
              "og.png",
          ],

          workbox: {
            runtimeCaching: [
                {
                    urlPattern: ({ request }) =>
                        request.destination === "image",
                    handler: "CacheFirst",
                    options: {
                        cacheName: "birthday-images",
                        expiration: {
                            maxEntries: 20,
                            maxAgeSeconds: 60 * 60 * 24 * 365, // 1 year
                        },
                    },
                },
                {
                    urlPattern: ({ request }) =>
                        request.destination === "audio",
                    handler: "CacheFirst",
                    options: {
                        cacheName: "birthday-audio",
                        expiration: {
                            maxEntries: 5,
                            maxAgeSeconds: 60 * 60 * 24 * 365,
                        },
                    },
                },
            ],
        },
      
          manifest: {
              name: "Shweta",
              short_name: "Didi",
      
              description: "Birthday greeting PWA App",
      
              theme_color: "#8b5cf6",
              background_color: "#2e1065",
      
              display: "standalone",
              orientation: "portrait",
              
              start_url: base,
              scope: base,
      
              icons: [
                  {
                      src: "android-chrome-192x192.png",
                      sizes: "192x192",
                      type: "image/png",
                  },
                  {
                      src: "android-chrome-512x512.png",
                      sizes: "512x512",
                      type: "image/png",
                  },
                  {
                      src: "android-chrome-512x512.png",
                      sizes: "512x512",
                      type: "image/png",
                      purpose: "any",
                  },
              ],
          },
      })
    ],
});