import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()], // React plugin for Vite
  base: "/", // Ensures proper resource paths
  build: {
    outDir: "dist", // Directory for build files
    rollupOptions: {
      input: "./index.html", // Entry point for the app
    },
  },
  server: {
    port: 3000, // Port for the development server
    open: true, // Opens the browser when the server starts
  },
  resolve: {
    alias: {
      "@": "/src", // Optional: Creates a shorthand for src folder
    },
  },
});