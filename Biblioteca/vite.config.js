import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    /*
    server: {
        host: '192.168.1.142', // replace with the IP address of the Homestead machine
        https: false,
        cors: true,
        hmr: {
            host: '192.168.1.142', // replace with the IP address of the Homestead machine
        }
    },
    */
    plugins: [
        laravel({
            input: 'resources/js/app.jsx',
            refresh: true,
        }),
        react(),
    ],
});
