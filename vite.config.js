import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";

export default defineConfig({
    plugins: [
        laravel({
            input: ["public/assets/css/styles.css", "public/assets/js/script.js"],
            refresh: true,
        }),
    ],
});
