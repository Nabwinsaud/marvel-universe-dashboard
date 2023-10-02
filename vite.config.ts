import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      //* comment out the following are no more needed
      // "@assets": path.resolve(__dirname, "./src/assets"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@ui": path.resolve(__dirname, "./src/ui"),
      // "@lib": path.resolve(__dirname, "./src/lib"),
      // "@pages": path.resolve(__dirname, "./src/pages"),
      // "@store": path.resolve(__dirname, "./src/store"),
    },
  },
});
